import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Pager,
  PagerProvider,
  Pagination,
  useFocus,
  useIndex,
  usePager,
} from "@crowdlinker/react-native-pager";
import Animated from "react-native-reanimated";

const colors = ["#707070", "#707070", "#6C63FF"];

const circleConfig = {
  transform: [
    {
      scale: {
        inputRange: [-2, -1, 0, 1, 2],
        outputRange: [0.5, 0.5, 0.8, 0.5, 0.5],
      },
    },
  ],
};

const Circle = ({ i, onPress }) => {
  const [activeIndex] = usePager();
  const color = activeIndex === i ? "#6C63FF" : "#707070";
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(i)}
      style={styles.touchableCircleStyle}
    >
      <View
        style={[
          styles.circle,
          {
            backgroundColor: color,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const Circles = ({ children, onChange }) => {
  return (
    <Pagination
      pageInterpolation={circleConfig}
      style={styles.circlesContainer}
    >
      {React.Children.map(children, (_, i) => (
        <Circle i={i} onPress={onChange} />
      ))}
    </Pagination>
  );
};

const TextSlide = () => {
  return (
    <Animated.View style={styles.textSlideContainer}>
      <Text style={styles.letsGetStartedTextStyle}>Let's Get Started</Text>
      <Text style={styles.joinUsText}>Join Us Now And Enjoy</Text>
      <Text style={styles.joinUsText}>Credit Free Shipping</Text>
      <Text style={styles.joinUsText}>Instantly</Text>
    </Animated.View>
  );
};

const children = Array.from({ length: 3 }, (_, i) => <TextSlide key={i} />);

const GetStartedPager = () => {
  const [activeIndex, onChange] = usePager();

  return (
    <View style={{ flex: 1 }}>
      <Pager
        panProps={{
          enabled: true,
        }}
        style={styles.pagerStyle}
      >
        {children}
      </Pager>
      <Circles onChange={onChange}>{children}</Circles>
    </View>
  );
};

export default () => {
  const [activeIndex, onChange] = useState(1);

  return (
    <PagerProvider activeIndex={activeIndex} onChange={onChange}>
      <GetStartedPager />
    </PagerProvider>
  );
};

const styles = StyleSheet.create({
  circlesContainer: {
    height: 20,
    width: 100,
    alignSelf: "center",
  },
  joinUsText: {
    fontFamily: "Gotham-Light",
    fontSize: 15,
    marginBottom: 15,
  },
  pagerStyle: {
    flex: 1,
    height: 200,
  },
  touchableCircleStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#707070",
  },
  letsGetStartedTextStyle: {
    fontFamily: "Gotham-Bold",
    fontSize: 27,
    alignSelf: "center",
    color: "#000000",
    marginBottom: 20,
  },
  textSlideContainer: {
    flex: 1,
    alignItems: "center",
  },
});
