import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "./screens/GetStarted";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="GetStarted" component={GetStartedScreen} />
  </Stack.Navigator>
);
