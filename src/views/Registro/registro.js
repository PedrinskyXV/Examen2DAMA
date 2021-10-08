import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function Registro({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Bivoac-Reguler": require("../../../assets/fonts/bivoac_reguler.otf"),
    "Bivoac-Outline": require("../../../assets/fonts/bivoac_outline.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/* Colocacion de LOGO/BANNER */}

        <View style={styles.logoContainer}>
          <ImageBackground
            style={styles.logoImage}
            source={require("../../../assets/grill.jpg")}
          >
            <Text style={styles.logoTxt}>Mrs Grill</Text>
          </ImageBackground>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.titulo}>Registro</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Platillo ..."
            placeholderTextColor="#FFFFFF"
          />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Descripcion ..."
            placeholderTextColor="#FFFFFF"
          />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Menu')} style={styles.loginBtn}>
          <Text style={styles.loginText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#413e38",
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    height: 150,
    width: "100%",
    overflow: "hidden",
  },
  logoImage: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logoTxt: {
    fontSize: 75,
    color: "#BC2931",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "Bivoac-Reguler",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
    textShadowColor: "black",
    fontStyle: "italic",
  },
  titulo: {
    color: "#c3684d",
    fontSize: 45,
    fontFamily: "Bivoac-Reguler",
    margin: 50,
  },
  inputText: {
    width: 250,
    height: 40,
    color: "white",
    borderWidth: 1,
    padding: 1,
    backgroundColor: "#BC2931",
    borderRadius: 10,
    marginBottom: 30,
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "#c3684d",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  loginText: {
    color: "#413e38",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Bivoac-Reguler",
  },
});
