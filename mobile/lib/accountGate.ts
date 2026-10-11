import { Alert } from "react-native";
import { router } from "expo-router";
import type { User } from "firebase/auth";

// App Store Guideline 1.2: apps with user-generated content can't let people post anonymously.
// Every fresh install signs in as an anonymous guest (see AuthContext) so browsing never hits a
// registration wall, but creating content — posts, comments, messages — requires a real account,
// which is only created through signup (where the Terms/EULA checkbox lives).
export function isGuest(user: User | null | undefined): boolean {
  return !!user?.isAnonymous;
}

export function promptCreateAccount(action: string) {
  Alert.alert(
    "Create a free account",
    `You can browse Astryks as a guest, but to ${action} you need a free account and to agree to our Terms (zero tolerance for objectionable content or abusive behavior). There's no anonymous posting on Astryks.`,
    [
      { text: "Not now", style: "cancel" },
      { text: "Create account", onPress: () => router.push("/signup") },
    ]
  );
}
