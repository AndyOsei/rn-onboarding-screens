import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./screens/GetStarted";
import RegistrationScreen from "./screens/Registration";
import VerificationScreen from "./screens/Verification";
import FingerprintScreen from "./screens/Fingerprint";
import IdentityScreen from "./screens/Identity";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
    <Stack.Screen name="Fingerprint" component={FingerprintScreen} />
    <Stack.Screen name="Identity" component={IdentityScreen} />
  </Stack.Navigator>
);
