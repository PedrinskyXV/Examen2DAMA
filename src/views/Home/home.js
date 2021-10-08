import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const DATA = [
  {
    name: "Carnes",
    imagen:
      "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
  },
  {
    name: "Mariscos",
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/02/13/50/seafood-platter-1232389_960_720.jpg",
  },
  {
    name: "Ensaladas",
    imagen:
      "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg",
  },
  {
    name: "Pastas",
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg",
  },
  {
    name: "Bebidas",
    imagen:
      "https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776_960_720.jpg",
  },
  {
    name: "Postres",
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg",
  },
];

export default function Home({navigation}) {
  let [fontsLoaded] = useFonts({
    "Bivoac-Reguler": require("../../../assets/fonts/bivoac_reguler.otf"),
    "Bivoac-Outline": require("../../../assets/fonts/bivoac_outline.otf")
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
        
        <Text style={styles.carta}>{"\n"}Menu</Text>
        <Text style={styles.carta2}>WC Restaurant</Text>
        <View style={styles.container2}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              margin: 20,
            }}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Registro de Platillo/Bebida')} style={styles.loginBtn}>
          <Text style={styles.loginText}>Registrar Platillo/Bebida</Text>
        </TouchableOpacity>

        {/* Integrantes del equipo */}
        <Text style={styles.text2}>
          Rodrigo Alfredo Hidalgo Garcia - 332518 {"\n"}
          Pedro Alexander Pérez Rosales - 323418 {"\n"}
          Guillermo {"\n"}
          William la trola
        </Text>
      </View>
    );
  }
}
{
  /* funcion rederizadora */
}
const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.imageItem} source={{ uri: item.imagen }} />
      <Text style={styles.text1}>{item.name}</Text>
    </View>
  );
};

{
  /* ESTILOS USADOS */
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#413e38",
    flex: 1,
    alignItems: "center",
  },
  container2: {
    marginTop: 20,
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
  carta: {
    color: "#FF5B5B",
    fontSize: 35,
    fontFamily: "Bivoac-Reguler",
  },
  carta2: {
    color: "#FF5B5B",
    fontSize: 25,
    fontFamily: "Bivoac-Reguler",
  },
  item: {
    alignItems: "center",
  },
  imageItem: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderColor: "#FF7F00",
    borderWidth: 2,
    marginHorizontal: 5,
  },
  text1: {
    color: "#6BC569",
    fontSize: 18,
    alignItems: "center",
    fontFamily: "Bivoac-Reguler",
    padding: 15,
  },
  text2: {
    color: "#FF9B01",
    fontSize: 14,
    alignItems: "center",
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