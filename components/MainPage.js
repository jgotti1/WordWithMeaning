import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from "react-native";
import styles from "../Styles/main";
import clouds from "../assets/images/clouds.jpeg";
import Constants from "expo-constants";
import WordForm from "./WordForm";
import Reset from "../components/Reset";
// import { useState, useEffect, useCallback } from "react";
// import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

export default function Main() {
  const version = Constants.expoConfig.version;
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
        <View>
          <Text style={styles.title}>WORD SEARCH MANIA</Text>
        </View>
        <WordForm />
      </ImageBackground>
    </SafeAreaView>
  );
}
