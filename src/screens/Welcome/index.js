import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import {
  Background,
  TopImageBackground as ColoredDotsBackground,
  WelcomeImage,
} from "../../components";

const { width, height } = Dimensions.get("window");

export default ({ navigation }) => {
  const insets = useSafeArea();

  const next = () => navigation.navigate("GetStarted");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ColoredDotsBackground />
      <ColoredDotsBackground />
      <ColoredDotsBackground />
      <Background />
      <View style={styles.welcomeContainer}>
        <View style={styles.imageContainer}>
          <WelcomeImage />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={[styles.instructionsText, { marginTop: 30 }]}>
              Well you have thus come this far!
            </Text>
            <Text style={styles.instructionsText}>
              Speak friend and enter or some
            </Text>
            <Text style={styles.instructionsText}>lorem ipsum</Text>
          </View>
          <TouchableOpacity style={styles.touchable} onPress={next}>
            <Text style={styles.touchableText}>Hooray!</Text>
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
  welcomeContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    width,
    height: height / 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textContainer: {
    marginTop: 30,
  },
  instructionsText: {
    fontFamily: "Gotham-Light",
    fontSize: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  welcomeText: {
    fontFamily: "Gotham-Bold",
    fontSize: 27,
    alignSelf: "center",
    color: "#000000",
    marginBottom: 20,
  },
  touchable: {
    width: "70%",
    height: 50,
    backgroundColor: "#4F44FF",
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf: "center",
    marginTop: 100,
  },
  touchableText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    color: "white",
  },
  skipTouchable: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  card: {
    shadowColor: "#0000001C",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 9,
    width: "80%",
    height: 100,
    alignSelf: "center",
    marginTop: 30,
  },
});
