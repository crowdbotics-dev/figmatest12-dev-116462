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
      <View style={styles.View_1_27}>
        <View style={styles.View_I1_27_1_8} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/084e875b-c19a-4d53-9c44-8a9764221376"
          }}
          style={styles.ImageBackground_I1_27_1_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4ab7beb-0308-40fa-aa87-42839a108939"
          }}
          style={styles.ImageBackground_I1_27_1_11}
        />
        <View style={styles.View_I1_27_1_12} />
        <View style={styles.View_I1_27_1_14}>
          <Text style={styles.Text_I1_27_1_14}>
            www.lagostrafficmanagementsystem.com/Admin
          </Text>
        </View>
      </View>
      <View style={styles.View_1_190} />
      <TouchableOpacity
        style={styles.TouchableOpacity_1_215}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_1_191} />
        <View style={styles.View_1_203}>
          <Text style={styles.Text_1_203}>LS</Text>
        </View>
        <View style={styles.View_1_204}>
          <Text style={styles.Text_1_204}>RS</Text>
        </View>
        <View style={styles.View_1_200}>
          <Text style={styles.Text_1_200}>L</Text>
        </View>
        <View style={styles.View_1_201}>
          <Text style={styles.Text_1_201}>R</Text>
        </View>
        <View style={styles.View_1_195} />
        <View style={styles.View_1_205}>
          <Text style={styles.Text_1_205}>45</Text>
        </View>
        <View style={styles.View_1_199} />
        <View style={styles.View_1_198} />
        <View style={styles.View_1_197} />
        <View style={styles.View_1_207}>
          <Text style={styles.Text_1_207}>45</Text>
        </View>
        <View style={styles.View_1_214}>
          <Text style={styles.Text_1_214}>45</Text>
        </View>
        <View style={styles.View_1_208}>
          <Text style={styles.Text_1_208}>0</Text>
        </View>
        <View style={styles.View_1_210}>
          <Text style={styles.Text_1_210}>0</Text>
        </View>
        <View style={styles.View_1_213}>
          <Text style={styles.Text_1_213}>0</Text>
        </View>
        <View style={styles.View_1_211}>
          <Text style={styles.Text_1_211}>0</Text>
        </View>
        <View style={styles.View_1_212}>
          <Text style={styles.Text_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_316}>
        <Text style={styles.Text_2_316}>CHEVRON JUNCTION</Text>
      </View>
      <View style={styles.View_2_321}>
        <Text style={styles.Text_2_321}>OGBA JUNCTION</Text>
      </View>
      <View style={styles.View_2_318}>
        <Text style={styles.Text_2_318}>IKOYI JUNCTION</Text>
      </View>
      <View style={styles.View_2_319}>
        <Text style={styles.Text_2_319}>OBALENDE JUNCTION</Text>
      </View>
      <View style={styles.View_2_320}>
        <Text style={styles.Text_2_320}>SURULERE JUNCTION</Text>
      </View>
      <View style={styles.View_2_317}>
        <Text style={styles.Text_2_317}>AJAH JUNCTION</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_288}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_I1_288_1_191} />
        <View style={styles.View_I1_288_1_203}>
          <Text style={styles.Text_I1_288_1_203}>LS</Text>
        </View>
        <View style={styles.View_I1_288_1_204}>
          <Text style={styles.Text_I1_288_1_204}>RS</Text>
        </View>
        <View style={styles.View_I1_288_1_200}>
          <Text style={styles.Text_I1_288_1_200}>L</Text>
        </View>
        <View style={styles.View_I1_288_1_201}>
          <Text style={styles.Text_I1_288_1_201}>R</Text>
        </View>
        <View style={styles.View_I1_288_1_195} />
        <View style={styles.View_I1_288_1_205}>
          <Text style={styles.Text_I1_288_1_205}>45</Text>
        </View>
        <View style={styles.View_I1_288_1_199} />
        <View style={styles.View_I1_288_1_198} />
        <View style={styles.View_I1_288_1_197} />
        <View style={styles.View_I1_288_1_207}>
          <Text style={styles.Text_I1_288_1_207}>45</Text>
        </View>
        <View style={styles.View_I1_288_1_214}>
          <Text style={styles.Text_I1_288_1_214}>45</Text>
        </View>
        <View style={styles.View_I1_288_1_208}>
          <Text style={styles.Text_I1_288_1_208}>0</Text>
        </View>
        <View style={styles.View_I1_288_1_210}>
          <Text style={styles.Text_I1_288_1_210}>0</Text>
        </View>
        <View style={styles.View_I1_288_1_213}>
          <Text style={styles.Text_I1_288_1_213}>0</Text>
        </View>
        <View style={styles.View_I1_288_1_211}>
          <Text style={styles.Text_I1_288_1_211}>0</Text>
        </View>
        <View style={styles.View_I1_288_1_212}>
          <Text style={styles.Text_I1_288_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_216}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_I1_216_1_191} />
        <View style={styles.View_I1_216_1_203}>
          <Text style={styles.Text_I1_216_1_203}>LS</Text>
        </View>
        <View style={styles.View_I1_216_1_204}>
          <Text style={styles.Text_I1_216_1_204}>RS</Text>
        </View>
        <View style={styles.View_I1_216_1_200}>
          <Text style={styles.Text_I1_216_1_200}>L</Text>
        </View>
        <View style={styles.View_I1_216_1_201}>
          <Text style={styles.Text_I1_216_1_201}>R</Text>
        </View>
        <View style={styles.View_I1_216_1_195} />
        <View style={styles.View_I1_216_1_205}>
          <Text style={styles.Text_I1_216_1_205}>45</Text>
        </View>
        <View style={styles.View_I1_216_1_199} />
        <View style={styles.View_I1_216_1_198} />
        <View style={styles.View_I1_216_1_197} />
        <View style={styles.View_I1_216_1_207}>
          <Text style={styles.Text_I1_216_1_207}>45</Text>
        </View>
        <View style={styles.View_I1_216_1_214}>
          <Text style={styles.Text_I1_216_1_214}>45</Text>
        </View>
        <View style={styles.View_I1_216_1_208}>
          <Text style={styles.Text_I1_216_1_208}>0</Text>
        </View>
        <View style={styles.View_I1_216_1_210}>
          <Text style={styles.Text_I1_216_1_210}>0</Text>
        </View>
        <View style={styles.View_I1_216_1_213}>
          <Text style={styles.Text_I1_216_1_213}>0</Text>
        </View>
        <View style={styles.View_I1_216_1_211}>
          <Text style={styles.Text_I1_216_1_211}>0</Text>
        </View>
        <View style={styles.View_I1_216_1_212}>
          <Text style={styles.Text_I1_216_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_234}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_I1_234_1_191} />
        <View style={styles.View_I1_234_1_203}>
          <Text style={styles.Text_I1_234_1_203}>LS</Text>
        </View>
        <View style={styles.View_I1_234_1_204}>
          <Text style={styles.Text_I1_234_1_204}>RS</Text>
        </View>
        <View style={styles.View_I1_234_1_200}>
          <Text style={styles.Text_I1_234_1_200}>L</Text>
        </View>
        <View style={styles.View_I1_234_1_201}>
          <Text style={styles.Text_I1_234_1_201}>R</Text>
        </View>
        <View style={styles.View_I1_234_1_195} />
        <View style={styles.View_I1_234_1_205}>
          <Text style={styles.Text_I1_234_1_205}>45</Text>
        </View>
        <View style={styles.View_I1_234_1_199} />
        <View style={styles.View_I1_234_1_198} />
        <View style={styles.View_I1_234_1_197} />
        <View style={styles.View_I1_234_1_207}>
          <Text style={styles.Text_I1_234_1_207}>45</Text>
        </View>
        <View style={styles.View_I1_234_1_214}>
          <Text style={styles.Text_I1_234_1_214}>45</Text>
        </View>
        <View style={styles.View_I1_234_1_208}>
          <Text style={styles.Text_I1_234_1_208}>0</Text>
        </View>
        <View style={styles.View_I1_234_1_210}>
          <Text style={styles.Text_I1_234_1_210}>0</Text>
        </View>
        <View style={styles.View_I1_234_1_213}>
          <Text style={styles.Text_I1_234_1_213}>0</Text>
        </View>
        <View style={styles.View_I1_234_1_211}>
          <Text style={styles.Text_I1_234_1_211}>0</Text>
        </View>
        <View style={styles.View_I1_234_1_212}>
          <Text style={styles.Text_I1_234_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_252}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_I1_252_1_191} />
        <View style={styles.View_I1_252_1_203}>
          <Text style={styles.Text_I1_252_1_203}>LS</Text>
        </View>
        <View style={styles.View_I1_252_1_204}>
          <Text style={styles.Text_I1_252_1_204}>RS</Text>
        </View>
        <View style={styles.View_I1_252_1_200}>
          <Text style={styles.Text_I1_252_1_200}>L</Text>
        </View>
        <View style={styles.View_I1_252_1_201}>
          <Text style={styles.Text_I1_252_1_201}>R</Text>
        </View>
        <View style={styles.View_I1_252_1_195} />
        <View style={styles.View_I1_252_1_205}>
          <Text style={styles.Text_I1_252_1_205}>45</Text>
        </View>
        <View style={styles.View_I1_252_1_199} />
        <View style={styles.View_I1_252_1_198} />
        <View style={styles.View_I1_252_1_197} />
        <View style={styles.View_I1_252_1_207}>
          <Text style={styles.Text_I1_252_1_207}>45</Text>
        </View>
        <View style={styles.View_I1_252_1_214}>
          <Text style={styles.Text_I1_252_1_214}>45</Text>
        </View>
        <View style={styles.View_I1_252_1_208}>
          <Text style={styles.Text_I1_252_1_208}>0</Text>
        </View>
        <View style={styles.View_I1_252_1_210}>
          <Text style={styles.Text_I1_252_1_210}>0</Text>
        </View>
        <View style={styles.View_I1_252_1_213}>
          <Text style={styles.Text_I1_252_1_213}>0</Text>
        </View>
        <View style={styles.View_I1_252_1_211}>
          <Text style={styles.Text_I1_252_1_211}>0</Text>
        </View>
        <View style={styles.View_I1_252_1_212}>
          <Text style={styles.Text_I1_252_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_270}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_6"))
        }
      >
        <View style={styles.View_I1_270_1_191} />
        <View style={styles.View_I1_270_1_203}>
          <Text style={styles.Text_I1_270_1_203}>LS</Text>
        </View>
        <View style={styles.View_I1_270_1_204}>
          <Text style={styles.Text_I1_270_1_204}>RS</Text>
        </View>
        <View style={styles.View_I1_270_1_200}>
          <Text style={styles.Text_I1_270_1_200}>L</Text>
        </View>
        <View style={styles.View_I1_270_1_201}>
          <Text style={styles.Text_I1_270_1_201}>R</Text>
        </View>
        <View style={styles.View_I1_270_1_195} />
        <View style={styles.View_I1_270_1_205}>
          <Text style={styles.Text_I1_270_1_205}>45</Text>
        </View>
        <View style={styles.View_I1_270_1_199} />
        <View style={styles.View_I1_270_1_198} />
        <View style={styles.View_I1_270_1_197} />
        <View style={styles.View_I1_270_1_207}>
          <Text style={styles.Text_I1_270_1_207}>45</Text>
        </View>
        <View style={styles.View_I1_270_1_214}>
          <Text style={styles.Text_I1_270_1_214}>45</Text>
        </View>
        <View style={styles.View_I1_270_1_208}>
          <Text style={styles.Text_I1_270_1_208}>0</Text>
        </View>
        <View style={styles.View_I1_270_1_210}>
          <Text style={styles.Text_I1_270_1_210}>0</Text>
        </View>
        <View style={styles.View_I1_270_1_213}>
          <Text style={styles.Text_I1_270_1_213}>0</Text>
        </View>
        <View style={styles.View_I1_270_1_211}>
          <Text style={styles.Text_I1_270_1_211}>0</Text>
        </View>
        <View style={styles.View_I1_270_1_212}>
          <Text style={styles.Text_I1_270_1_212}>0</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_1_306} />
      <View style={styles.View_1_308}>
        <Text style={styles.Text_1_308}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7ed1ba4-1d74-4f9e-a378-598968b2bf82"
        }}
        style={styles.ImageBackground_1_309}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6601e14-1855-43fa-a162-c8267fda6636"
        }}
        style={styles.ImageBackground_1_315}
      />
      <View style={styles.View_1_310} />
      <View style={styles.View_1_312}>
        <Text style={styles.Text_1_312}>2</Text>
      </View>
      <View style={styles.View_1_313} />
      <View style={styles.View_1_314}>
        <Text style={styles.Text_1_314}>3</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_1_27: {
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
  View_I1_27_1_8: {
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
  ImageBackground_I1_27_1_10: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_I1_27_1_11: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_I1_27_1_12: {
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
  View_I1_27_1_14: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_27_1_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_190: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_1_215: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_191: {
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
  View_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_195: {
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
  View_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_199: {
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
  View_1_198: {
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
  View_1_197: {
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
  View_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_316: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_321: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2_321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_318: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_319: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_320: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_317: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_288: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_288_1_191: {
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
  View_I1_288_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_195: {
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
  View_I1_288_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_199: {
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
  View_I1_288_1_198: {
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
  View_I1_288_1_197: {
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
  View_I1_288_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_288_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_288_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_216: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_216_1_191: {
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
  View_I1_216_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_195: {
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
  View_I1_216_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_199: {
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
  View_I1_216_1_198: {
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
  View_I1_216_1_197: {
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
  View_I1_216_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_216_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_216_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_234: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_234_1_191: {
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
  View_I1_234_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_195: {
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
  View_I1_234_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_199: {
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
  View_I1_234_1_198: {
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
  View_I1_234_1_197: {
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
  View_I1_234_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_234_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_234_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_252: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_252_1_191: {
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
  View_I1_252_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_195: {
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
  View_I1_252_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_199: {
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
  View_I1_252_1_198: {
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
  View_I1_252_1_197: {
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
  View_I1_252_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_252_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_252_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_270: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_270_1_191: {
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
  View_I1_270_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_195: {
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
  View_I1_270_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_199: {
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
  View_I1_270_1_198: {
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
  View_I1_270_1_197: {
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
  View_I1_270_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_270_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1_270_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_306: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("107%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_308: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_1_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_309: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("106%")
  },
  ImageBackground_1_315: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("106%")
  },
  View_1_310: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("108%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_312: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_1_312: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_313: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("108%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_314: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_1_314: {
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
