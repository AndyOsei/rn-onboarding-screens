import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

export default (props) => {
  return (
    <Svg width={375} height={812} viewBox="0 0 375 812" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#eeedf5" stopOpacity={0.71} />
          <Stop offset={0.59} stopColor="#f0eff6" stopOpacity={0.749} />
          <Stop offset={0.727} stopColor="#f6f6f9" />
          <Stop offset={0.811} stopColor="#fcfcfd" />
          <Stop offset={0.886} stopColor="#fefefe" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Rectangle 76"
        fill="url(#prefix__a)"
        d="M0 0h375v812H0z"
      />
    </Svg>
  );
};
