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
import OTPInputView from "@twotalltotems/react-native-otp-input";
import {
  Background,
  TopImageBackground,
  FingerprintImage,
  Tick,
} from "../../components";

const { width, height } = Dimensions.get("window");

export default ({ navigation }) => {
  const [code, setCode] = React.useState("");
  const insets = useSafeArea();
  const verify = () => navigation.navigate("Fingerprint");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopImageBackground />
      <Background />
      <View style={styles.registrationContainer}>
        <View style={styles.imageContainer}>
          <FingerprintImage />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.verificationText}>Verification</Text>
            <Text style={styles.instructionsText}>
              Enter a 4 digit number that
            </Text>
            <Text style={styles.instructionsText}>
              was sent to + (1) 555 678 2810
            </Text>
          </View>
          <View>
            <View style={styles.card}>
              <View style={styles.inputContainer}>
                <OTPInputView
                  style={{ width: "80%", height: 200 }}
                  pinCount={4}
                  code={code}
                  onCodeChanged={(code) => setCode(code)}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {}}
                />
                <View style={styles.tick}>
                  <Tick />
                </View>
              </View>
              <TouchableOpacity style={styles.touchable} onPress={verify}>
                <Text style={styles.touchableText}>Verify</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.resendCodeText}>Re-Send code in 0:59</Text>
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
  verificationText: {
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
  tick: {
    padding: 20,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#7D7D7E",
    color: "#000000",
  },
  underlineStyleHighLighted: {
    borderBottomColor: "#4F44FF",
  },
  resendCodeText: {
    color: "#4F44FF",
    alignSelf: "center",
    marginTop: 20,
    fontFamily: "Gotham-Medium",
    fontSize: 15,
  },
});
