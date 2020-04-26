import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeArea } from "react-native-safe-area-context";
import {
  Background,
  TopImageBackground,
  RegistrationImage,
  Tick,
} from "../../components";
import { Icons } from "../../constants";

const { width, height } = Dimensions.get("window");

export default ({ navigation }) => {
  const insets = useSafeArea();
  const getCode = () => navigation.navigate("Verification");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <Background />
      <View style={styles.registrationContainer}>
        <View style={styles.imageContainer}>
          <RegistrationImage />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.registrationText}>Registration</Text>
            <Text style={styles.instructionsText}>
              Enter your mobile number to
            </Text>
            <Text style={styles.instructionsText}>
              Receive a verification code
            </Text>
          </View>
          <View>
            <View style={styles.card}>
              <View style={styles.inputContainer}>
                <Image source={Icons.flag} />
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  value="+ (1) 555 678 2810"
                />
                <Tick />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.touchable}
                onPress={getCode}
              >
                <Text style={styles.touchableText}>Get Code</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  registrationText: {
    fontFamily: "Gotham-Bold",
    fontSize: 27,
    alignSelf: "center",
    color: "#000000",
    marginBottom: 20,
  },
  touchable: {
    width: "100%",
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: 50,
    borderColor: "#6C63FF5C",
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    margin: 3,
    color: "#4F44FF",
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
    padding: 30,
    borderRadius: 9,
    width: "80%",
    alignSelf: "center",
    marginTop: 30,
  },
});
