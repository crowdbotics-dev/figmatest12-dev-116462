import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_33}>
        <View style={styles.View_I1_33_1_8} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da5eefaa-5caf-4635-8c9f-a0f51f4f8e14"
          }}
          style={styles.ImageBackground_I1_33_1_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6af8f17-2d95-4beb-abf4-d373f6fc8dd6"
          }}
          style={styles.ImageBackground_I1_33_1_11}
        />
        <View style={styles.View_I1_33_1_12} />
        <View style={styles.View_I1_33_1_14}>
          <Text style={styles.Text_I1_33_1_14}>
            www.lagostrafficmanagementsystem.com/IKOYI
          </Text>
        </View>
      </View>
      <View style={styles.View_2_497} />
      <View style={styles.View_2_535}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bfd7fa2-ea04-4029-9c1d-bb145ab36736"
          }}
          style={styles.ImageBackground_2_499}
        />
        <View style={styles.View_2_501}>
          <Text style={styles.Text_2_501}>VIDEO FEED FROM LOCATION</Text>
        </View>
        <View style={styles.View_2_502} />
        <View style={styles.View_2_504}>
          <Text style={styles.Text_2_504}>
            Intersection A: Heavy traffic congestion, expect delays of
            approximately 15 minutes. Intersection B: Moderate traffic flow,
            minimal delays. Intersection C: Smooth traffic flow, no significant
            delays.
          </Text>
        </View>
        <View style={styles.View_2_503}>
          <Text style={styles.Text_2_503}>Real-time Traffic Conditions</Text>
        </View>
        <View style={styles.View_2_505}>
          <Text style={styles.Text_2_505}>AI Advisory and action taken </Text>
        </View>
        <View style={styles.View_2_506} />
        <View style={styles.View_2_507}>
          <Text style={styles.Text_2_507}>
            Route 1: Take the alternate route via Street X to bypass
            Intersection A congestion. Route 2: Stick to the main route, as
            traffic at Intersection B is flowing smoothly. Route 3: Consider
            using Street Y to avoid any potential congestion near Intersection
            C.
          </Text>
        </View>
        <View style={styles.View_2_509} />
        <View style={styles.View_2_510}>
          <View style={styles.View_I2_510_1_191} />
          <View style={styles.View_I2_510_1_203}>
            <Text style={styles.Text_I2_510_1_203}>LS</Text>
          </View>
          <View style={styles.View_I2_510_1_204}>
            <Text style={styles.Text_I2_510_1_204}>RS</Text>
          </View>
          <View style={styles.View_I2_510_1_200}>
            <Text style={styles.Text_I2_510_1_200}>L</Text>
          </View>
          <View style={styles.View_I2_510_1_201}>
            <Text style={styles.Text_I2_510_1_201}>R</Text>
          </View>
          <View style={styles.View_I2_510_1_195} />
          <View style={styles.View_I2_510_1_205}>
            <Text style={styles.Text_I2_510_1_205}>45</Text>
          </View>
          <View style={styles.View_I2_510_1_199} />
          <View style={styles.View_I2_510_1_198} />
          <View style={styles.View_I2_510_1_197} />
          <View style={styles.View_I2_510_1_207}>
            <Text style={styles.Text_I2_510_1_207}>45</Text>
          </View>
          <View style={styles.View_I2_510_1_214}>
            <Text style={styles.Text_I2_510_1_214}>45</Text>
          </View>
          <View style={styles.View_I2_510_1_208}>
            <Text style={styles.Text_I2_510_1_208}>0</Text>
          </View>
          <View style={styles.View_I2_510_1_210}>
            <Text style={styles.Text_I2_510_1_210}>0</Text>
          </View>
          <View style={styles.View_I2_510_1_213}>
            <Text style={styles.Text_I2_510_1_213}>0</Text>
          </View>
          <View style={styles.View_I2_510_1_211}>
            <Text style={styles.Text_I2_510_1_211}>0</Text>
          </View>
          <View style={styles.View_I2_510_1_212}>
            <Text style={styles.Text_I2_510_1_212}>0</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_528}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_614"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_2_530}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("7_614"))
          }
        >
          <Text style={styles.Text_2_530}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_531}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_497"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_2_532}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_497"))
          }
        >
          <Text style={styles.Text_2_532}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_1_33: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_33_1_8: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I1_33_1_10: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_I1_33_1_11: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_I1_33_1_12: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 193, 193, 1)"
  },
  View_I1_33_1_14: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_33_1_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_497: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_535: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_499: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("4%")
  },
  View_2_501: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_501: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_502: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_504: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_503: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_505: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_2_505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_506: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_507: {
    flexGrow: 1,
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_2_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_509: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("69%"),
    backgroundColor: "rgba(239, 122, 122, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_510: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_510_1_191: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I2_510_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_195: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I2_510_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_199: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("20%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I2_510_1_198: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I2_510_1_197: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I2_510_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_510_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I2_510_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_528: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("74%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_2_530: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_531: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("86%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_2_532: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_2_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
