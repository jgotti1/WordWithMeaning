import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from "react-native";
import styles from "../Styles/main";
import clouds from "../assets/images/clouds.jpeg";
import Constants from "expo-constants";
import WordForm from "./WordForm";
// import { useState, useEffect, useCallback } from "react";
// import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

export default function Main() {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const apiKEY = process.env.EXPO_PUBLIC_API_KEY;
  const version = Constants.expoConfig.version;
  
  console.log(apiURL, apiKEY, version);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={clouds} style={styles.image}>
        {/* Version and copright link     */}
        <View style={styles.topLineContainer}>
          <Text style={styles.versionText}>{version}</Text>
          <View style={styles.copyright}>
            <TouchableOpacity onPress={() => Linking.openURL("https://johnmargotti.com/")}>
              <Text style={styles.linkText}>&#169; margotticode2023</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* section end */}
        <View>
          <Text style={styles.title}>WORDS WITH MEANING</Text>
        </View>
        <WordForm/>
      </ImageBackground>
    </SafeAreaView>
  );
}
