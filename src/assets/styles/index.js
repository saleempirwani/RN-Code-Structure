import { StyleSheet, Dimensions, Platform } from "react-native";
import Colors from "../colors";
import fonts from "../fonts";

const { width, height } = Dimensions.get("window");
const marginHorizontal = 20;

const fontSp2Px = (size) =>
  Platform.OS === "ios" ? Number(size) * 2 : Number(size) * 1.8;

export default StyleSheet.create({
  // GLOBAL STYLES...
  flex: (size) => ({ flex: Number(size) }),
  fontSize: (size) => ({ fontSize: fontSp2Px(size) }),
  color: (color) => ({ color: color }),
  textAlign: (z) => ({ textAlign: z }),
  backgroundColor: (color) => ({ backgroundColor: color }),
  full_Height: (H) => ({ height: H ? height / Number(H) : height }),
  height_width: (H, W) => ({ height: Number(H), width: Number(W) }),
  Divide_width: (W) => ({ width: width / Number(W) }),
  width: (W) => ({ width: Number(W) }),
  width_Percent: (W) => ({ width: W }),
  height: (H) => ({ height: Number(H) }),
  lineHeight: (size) => ({ lineHeight: Number(size) }),
  fontWeight: (size) => ({ fontWeight: size }),
  fontColor: (color) => ({ color: color }),
  padding: (size) => ({ padding: Number(size) }),
  margin: (size) => ({ margin: Number(size) }),
  flexDirection: (direction) => ({ flexDirection: direction }),
  self: (z) => ({ alignSelf: z }),
  alignItems: (z) => ({ alignItems: z }),
  justifyContent: (z) => ({ justifyContent: z }),
  mT: (size) => ({ marginTop: Number(size) }),
  mL: (size) => ({ marginLeft: Number(size) }),
  mR: (size) => ({ marginRight: Number(size) }),
  mB: (size) => ({ marginBottom: Number(size) }),
  mV: (size) => ({ marginVertical: Number(size) }),
  mH: (size) => ({ marginHorizontal: Number(size) }),
  pT: (size) => ({ paddingTop: Number(size) }),
  pB: (size) => ({ paddingBottom: Number(size) }),
  pL: (size) => ({ paddingLeft: Number(size) }),
  pR: (size) => ({ paddingRight: Number(size) }),
  pH: (size) => ({ paddingHorizontal: Number(size) }),
  pV: (size) => ({ paddingVertical: Number(size) }),
  bR: (size) => ({ borderRadius: Number(size) }),
  bBW: (size) => ({ borderBottomWidth: Number(size) }),
  BW: (size) => ({ borderWidth: Number(size) }),
  top: (size) => ({ top: Number(size) }),
  bottom: (size) => ({ bottom: Number(size) }),
  left: (size) => ({ left: Number(size) }),
  right: (size) => ({ right: Number(size) }),

  hitSlop: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10,
  },

  // GLOBAL FONT FAMILY
  fontOpenSansBoldPrimary8: {
    fontFamily: fonts.openSansBold,
    fontSize: fontSp2Px(8),
    color: Colors.primary,
  },

  // GLOBAL CONTAINER
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  // CUSTOM STYLES HERE...
});
