import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./screens/GetStarted";
import RegistrationScreen from "./screens/Registration";
import VerificationScreen from "./screens/Verification";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
  </Stack.Navigator>
);
