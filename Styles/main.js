import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    marginTop: 12,
    color: "white",
    textAlign: "center",
    fontSize: 52,
    fontFamily: "RadicalFortuneDemoRegular-ZV1Jl",
    textShadowColor: "#c1c1c4",
    textShadowRadius: 12,
  },
  copyright: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  versionText: {
    fontSize: 10,
    color: "white",
  },
  versionText: {
    fontSize: 10,
    color: "white",
  },
  topLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop: 12,
  },
  linkText: {
    fontSize: 9,
    color: "white",
    marginLeft: 5,
  },
});


export default styles;
