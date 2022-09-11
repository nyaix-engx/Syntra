import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const Instagram = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 333333 333333"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}>
    <Defs>
      <LinearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={250181}
        y1={308196}
        x2={83152.4}
        y2={25137}>
        <Stop offset={0} stopColor="#f58529" />
        <Stop offset={0.169} stopColor="#feda77" />
        <Stop offset={0.478} stopColor="#dd2a7b" />
        <Stop offset={0.78} stopColor="#8134af" />
        <Stop offset={1} stopColor="#515bd4" />
      </LinearGradient>
    </Defs>
    <Path
      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-40642 71361h81288c30526 0 55489 24654 55489 54772v81069c0 30125-24963 54771-55488 54771l-81289-1c-30526 0-55492-24646-55492-54771v-81069c0-30117 24966-54771 55492-54771zm40125 43843c29663 0 53734 24072 53734 53735 0 29667-24071 53735-53734 53735-29672 0-53739-24068-53739-53735 0-29663 24068-53735 53739-53735zm0 18150c19643 0 35586 15939 35586 35585 0 19647-15943 35589-35586 35589-19650 0-35590-15943-35590-35589s15940-35585 35590-35585zm51986-25598c4819 0 8726 3907 8726 8721 0 4819-3907 8726-8726 8726-4815 0-8721-3907-8721-8726 0-4815 3907-8721 8721-8721zm-85468-20825h68009c25537 0 46422 20782 46422 46178v68350c0 25395-20885 46174-46422 46174l-68009 1c-25537 0-46426-20778-46426-46174v-68352c0-25395 20889-46177 46426-46177z"
      fill="url(#a)"
    />
  </Svg>
);

export default Instagram;
