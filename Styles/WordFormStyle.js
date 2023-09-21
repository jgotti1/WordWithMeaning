import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
    marginLeft: 55,
    marginRight: 55,
    marginBottom: 20,
  },
  searchWord: {
    color: "white",
    textAlign: "center",
    marginTop: 8,
    fontSize: 22,
    fontFamily: "RadicalFortuneDemoRegular-ZV1Jl",
    textShadowColor: "#d8d8e0",
    textShadowRadius: 3,
    lineHeight: 22,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollViewContent: {
    flexGrow: 1, 
  },
  bottom: {
    height: 400,
  }
});

export default styles;
