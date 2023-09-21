import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking, Image } from "react-native";
import styles from "../Styles/main";
import clouds from "../assets/images/clouds.jpeg";
import Constants from "expo-constants";
import WordForm from "./WordForm";
import CenterImage from "../components/CenterImage";

export default function Main() {
  const version = Constants.expoConfig.version;
  return (
    <ImageBackground source={clouds} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
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
          <Text style={styles.title}>WORD UP !</Text>
        </View>
        <WordForm />
        <CenterImage />
      </SafeAreaView>
    </ImageBackground>
  );
}
