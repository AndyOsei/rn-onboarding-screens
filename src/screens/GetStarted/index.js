import * as React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import {
  Background,
  TopImageBackground,
  GetStartedImage,
} from "../../components";
import Pager from "./Pager";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
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
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.touchableText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "white" }]}
          >
            <Text style={[styles.touchableText, { color: "#4F44FF" }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
);

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
    fontSize: 15,
    color: "white",
  },
});
