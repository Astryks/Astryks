import { Text, Linking, Platform } from "react-native";
import { colors } from "@/lib/styles";

// Apple Guideline 3.1.2(c) requires every purchase surface to state, right next to the buy
// buttons (not just once on a login/signup screen elsewhere in the app): the subscription's
// title, length, price (already shown by each caller), that it auto-renews until canceled, and
// functional links to the Terms of Use (EULA) and Privacy Policy.
export default function SubscriptionDisclosure({ style }: { style?: object }) {
  return (
    <Text style={[{ fontSize: 12, color: colors.muted, lineHeight: 16 }, style]}>
      Astryks Premium (Weekly or Annual) auto-renews at the price shown until you cancel, billed
      through your {Platform.OS === "ios" ? "Apple ID" : "Google Play"} account.{" "}
      <Text style={{ textDecorationLine: "underline" }} onPress={() => Linking.openURL("https://astryks.com/terms")}>
        Terms of Use
      </Text>{" "}
      ·{" "}
      <Text style={{ textDecorationLine: "underline" }} onPress={() => Linking.openURL("https://astryks.com/privacy")}>
        Privacy Policy
      </Text>
    </Text>
  );
}
