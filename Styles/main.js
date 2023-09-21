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
    marginTop: 38,
    color: "white",
    textAlign: "center",
    fontSize: 48,
    fontFamily: "LuckiestGuy",
    letterSpacing: 10,
    textShadowColor: "#c1c1c4",
    textShadowRadius: 13,
  },
  copyright: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    marginRight: 5,
  },
  versionText: {
    fontSize: 10,
    color: "white",
    marginLeft: 5,
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
  searchWord: {
    fontSize: 32,
  },

});

export default styles;
