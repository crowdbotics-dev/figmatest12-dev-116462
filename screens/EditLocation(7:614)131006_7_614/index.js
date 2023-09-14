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
      <View style={styles.View_7_615}>
        <View style={styles.View_I7_615_1_8} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42210d8e-893d-43d5-b6cc-c64f5153a26d"
          }}
          style={styles.ImageBackground_I7_615_1_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f10842d-2f9d-4759-8498-acd6dd5fe0c8"
          }}
          style={styles.ImageBackground_I7_615_1_11}
        />
        <View style={styles.View_I7_615_1_12} />
        <View style={styles.View_I7_615_1_14}>
          <Text style={styles.Text_I7_615_1_14}>
            www.lagostrafficmanagementsystem.com/edit
          </Text>
        </View>
      </View>
      <View style={styles.View_7_616} />
      <View style={styles.View_7_617}>
        <View style={styles.View_I7_617_2_503}>
          <Text text="" style={styles.Text_I7_617_2_503} />
        </View>
        <View style={styles.View_I7_617_2_509} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I7_617_2_510}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_6"))
          }
        >
          <View style={styles.View_I7_617_2_510_1_191} />
          <View style={styles.View_I7_617_2_510_1_203}>
            <Text style={styles.Text_I7_617_2_510_1_203}>LS</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_204}>
            <Text style={styles.Text_I7_617_2_510_1_204}>RS</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_200}>
            <Text style={styles.Text_I7_617_2_510_1_200}>L</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_201}>
            <Text style={styles.Text_I7_617_2_510_1_201}>R</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_195} />
          <View style={styles.View_I7_617_2_510_1_205}>
            <Text style={styles.Text_I7_617_2_510_1_205}>45</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_199} />
          <View style={styles.View_I7_617_2_510_1_198} />
          <View style={styles.View_I7_617_2_510_1_197} />
          <View style={styles.View_I7_617_2_510_1_207}>
            <Text style={styles.Text_I7_617_2_510_1_207}>45</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_214}>
            <Text style={styles.Text_I7_617_2_510_1_214}>45</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_208}>
            <Text style={styles.Text_I7_617_2_510_1_208}>0</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_210}>
            <Text style={styles.Text_I7_617_2_510_1_210}>0</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_213}>
            <Text style={styles.Text_I7_617_2_510_1_213}>0</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_211}>
            <Text style={styles.Text_I7_617_2_510_1_211}>0</Text>
          </View>
          <View style={styles.View_I7_617_2_510_1_212}>
            <Text style={styles.Text_I7_617_2_510_1_212}>0</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I7_617_2_528} />
        <View style={styles.View_I7_617_2_530}>
          <Text style={styles.Text_I7_617_2_530}>EDIT</Text>
        </View>
        <View style={styles.View_I7_617_2_531} />
        <View style={styles.View_I7_617_2_532}>
          <Text style={styles.Text_I7_617_2_532}>SUBMIT</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_7_615: {
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
  View_I7_615_1_8: {
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
  ImageBackground_I7_615_1_10: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_I7_615_1_11: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_I7_615_1_12: {
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
  View_I7_615_1_14: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I7_615_1_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_616: {
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
  View_7_617: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_617_2_503: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_503: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_509: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("58%"),
    backgroundColor: "rgba(239, 122, 122, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_I7_617_2_510: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I7_617_2_510_1_191: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I7_617_2_510_1_203: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_204: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_200: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_201: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_195: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I7_617_2_510_1_205: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_199: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I7_617_2_510_1_198: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I7_617_2_510_1_197: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("5%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I7_617_2_510_1_207: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_214: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_210: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_210: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_213: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_213: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_211: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_211: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_510_1_212: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_510_1_212: {
    color: "rgba(244, 15, 15, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_528: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("62%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I7_617_2_530: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_530: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I7_617_2_531: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("72%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I7_617_2_532: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_I7_617_2_532: {
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
