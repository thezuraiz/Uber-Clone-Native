import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text className="font-bold">Hioi</Text>
    </SafeAreaView>
  );
}
