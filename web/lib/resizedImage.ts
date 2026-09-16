"use client";

import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

// The storage-resize-images extension (installed 2026-08-19) watches /posts uploads and writes a
// max-800x800 WebP copy alongside every new original at "<mediaPath>_800x800.webp" — original is
// never deleted. Two cases fall back to the full-res mediaUrl instead: posts uploaded before the
// extension existed (no resized copy will ever appear for those), and the brief window right
// after a fresh upload before the resize function has finished running.
export function useResizedImageUrl(mediaPath: string | undefined | null, fallbackUrl: string) {
  const [url, setUrl] = useState(fallbackUrl);

  useEffect(() => {
    let cancelled = false;
    setUrl(fallbackUrl);
    if (!mediaPath) return;
    getDownloadURL(ref(storage, `${mediaPath}_800x800.webp`))
      .then((resizedUrl) => {
        if (!cancelled) setUrl(resizedUrl);
      })
      .catch(() => {
        // Not resized (yet, or ever) — fallbackUrl above already covers this.
      });
    return () => {
      cancelled = true;
    };
  }, [mediaPath, fallbackUrl]);

  return url;
}

// Posts created after the postId-in-path change (see storage.rules's postIsHidden) store
// mediaPath alongside mediaUrl. mediaUrl itself is a Firebase "download token" URL — once
// minted, it keeps working forever for anyone who has it, completely bypassing Storage rules,
// even if the post is later made private or gets flagged by moderation. Fetching a fresh
// getDownloadURL from mediaPath on every view instead means Storage rules (which DO gate that
// call, unlike the raw token URL) are actually re-checked against the post's CURRENT
// visibility/moderation state each time, rather than trusting a token minted back when the post
// was first shared. Falls back to the stored mediaUrl only for legacy posts with no mediaPath at
// all (the flat pre-postId Storage layout, which storage.rules leaves permanently public by
// necessity — see its own comment) — there's no path to re-check rules against for those. On a
// denied fetch (the current viewer genuinely shouldn't see this post anymore), returns null
// rather than falling back to the old token, since rendering that would defeat the whole point.
export function usePostMediaUrl(mediaPath: string | undefined | null, fallbackUrl: string | null): string | null {
  const [url, setUrl] = useState<string | null>(mediaPath ? null : fallbackUrl);

  useEffect(() => {
    let cancelled = false;
    if (!mediaPath) {
      setUrl(fallbackUrl);
      return;
    }
    setUrl(null);
    getDownloadURL(ref(storage, mediaPath))
      .then((freshUrl) => {
        if (!cancelled) setUrl(freshUrl);
      })
      .catch(() => {
        if (!cancelled) setUrl(null);
      });
    return () => {
      cancelled = true;
    };
  }, [mediaPath, fallbackUrl]);

  return url;
}
