import * as React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import {
  Background,
  TopImageBackground,
  GetStartedImage,
} from "../../components";
import Pager from "./Pager";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";

export default ({ navigation }) => {
  const insets = useSafeArea();
  const createAccount = () => navigation.navigate("Registration");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <Background />
      <View style={styles.getStartedContainer}>
        <View style={styles.imageContainer}>
          <GetStartedImage />
        </View>
        <View style={styles.textContainer}>
          <Pager />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={createAccount}
          >
            <Text style={styles.touchableText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.touchable, { backgroundColor: "white" }]}
          >
            <Text style={[styles.touchableText, { color: "#4F44FF" }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeedf5",
  },
  getStartedContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  textContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  touchable: {
    width: 250,
    height: 50,
    backgroundColor: "#4F44FF",
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  touchableText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    color: "white",
  },
});
