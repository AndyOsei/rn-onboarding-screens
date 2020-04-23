import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoadAssets } from "./src/components";
import AppNavigator from "./src/navigator";
import { Icons } from "./src/constants";

const assets = [...Object.values(Icons)];

const fonts = {
  "Gotham-Bold": require("./assets/fonts/Gotham/Gotham-Bold.otf"),
  "Gotham-Light": require("./assets/fonts/Gotham/Gotham-Light.otf"),
  "Gotham-Medium": require("./assets/fonts/Gotham/Gotham-Medium.otf"),
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoadAssets {...{ fonts, assets }}>
          <AppNavigator />
        </LoadAssets>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
