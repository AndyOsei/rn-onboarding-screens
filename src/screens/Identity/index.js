import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import {
  Background,
  TopImageBackground,
  IdentityImage,
} from "../../components";

const { width, height } = Dimensions.get("window");

export default ({ navigation }) => {
  const insets = useSafeArea();

  const next = () => navigation.navigate("Welcome");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <Background />
      <View style={styles.registrationContainer}>
        <View style={styles.imageContainer}>
          <IdentityImage />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.identityText}>Identity</Text>
            <Text style={styles.instructionsText}>
              We Need to verify your identity
            </Text>
            <Text style={styles.instructionsText}>(Required)</Text>
          </View>
          <View style={[styles.card, { flexDirection: "row" }]}>
            <View style={styles.recommendedTextContainer}>
              <Text style={styles.recommendedText}>Recommended</Text>
            </View>
            <View style={styles.listCountIndicator}>
              <Text style={{ color: "white" }}>1</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.listEntryTitle}>National</Text>
              <Text style={styles.listEntrySubText}>
                ID or driver's iscence For Citizens
              </Text>
              <Text style={styles.listEntrySubText}>of the Country mainly</Text>
            </View>
          </View>
          <View style={[styles.card, { flexDirection: "row" }]}>
            <View style={styles.listCountIndicator}>
              <Text style={{ color: "white" }}>2</Text>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.listEntryTitle}>Passport</Text>
              <Text style={styles.listEntrySubText}>
                Required Passport for non citizens
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.touchable} onPress={next}>
            <Text style={styles.touchableText}>continue</Text>
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
  registrationContainer: {
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
  identityText: {
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
  listCountIndicator: {
    backgroundColor: "#3ACC6C",
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  listEntryTitle: {
    fontFamily: "Gotham-Bold",
    fontSize: 14,
  },
  listEntrySubText: {
    fontFamily: "Gotham-Light",
    fontSize: 13,
    marginTop: 10,
  },
  recommendedTextContainer: {
    position: "absolute",
    top: 13,
    right: 15,
    backgroundColor: "#F1291A",
    width: 85,
    height: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendedText: {
    color: "white",
    fontFamily: "Gotham-Bold",
    fontSize: 8,
  },
});
