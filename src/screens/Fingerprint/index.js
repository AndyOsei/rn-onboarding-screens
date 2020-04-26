import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import {
  Background,
  TopImageBackground,
  ShieldImage,
  Fingerprint,
} from "../../components";
import { Icons } from "../../constants";

const { width, height } = Dimensions.get("window");

export default ({ navigation }) => {
  const insets = useSafeArea();

  const next = () => navigation.navigate("Identity");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <Background />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <ShieldImage />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.fingerprintText}>Fingerprint</Text>
            <Text style={styles.instructionsText}>
              Rest your finger at the sensor
            </Text>
            <Text style={styles.instructionsText}>
              to capture your fingerprint
            </Text>
            <Text style={styles.instructionsText}>(optional)</Text>
          </View>
          <View style={styles.fingerprintContainer}>
            <Fingerprint />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchable}
            onPress={next}
          >
            <Text style={styles.touchableText}>continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.skipTouchable}
            onPress={next}
          >
            <Text style={styles.skipText}>Skip This Step</Text>
            <Image source={Icons.arrowForward} />
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
  content: {
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
  codeContainer: {
    flex: 1,
    alignItems: "center",
  },
  instructionsText: {
    fontFamily: "Gotham-Light",
    fontSize: 15,
    marginBottom: 15,
    alignSelf: "center",
  },
  fingerprintText: {
    fontFamily: "Gotham-Bold",
    fontSize: 27,
    alignSelf: "center",
    color: "#000000",
    marginBottom: 20,
  },
  fingerprintContainer: {
    alignItems: "center",
    marginTop: 20,
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
    marginTop: 30,
  },
  touchableText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    color: "white",
  },
  skipText: {
    fontFamily: "Gotham-Medium",
    fontSize: 15,
    marginRight: 20,
    color: "#4F44FF",
  },
  skipTouchable: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
});
