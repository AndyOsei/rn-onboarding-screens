import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LoadAssets } from "./src/components";
import AppNavigator from "./src/navigator";

const assets = [];

const fonts = {
  "Gotham-Bold": require("./assets/fonts/Gotham/Gotham-Bold.otf"),
  "Gotham-Light": require("./assets/fonts/Gotham/Gotham-Light.otf"),
  "Gotham-Medium": require("./assets/fonts/Gotham/GothamMedium_1.ttf"),
};

export default function App() {
  return (
    <NavigationContainer>
      <LoadAssets {...{ fonts, assets }}>
        <AppNavigator />
      </LoadAssets>
    </NavigationContainer>
  );
}
