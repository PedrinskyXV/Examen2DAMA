import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
  ImageBackground,
  View,
} from "react-native";

import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../../../database/firebase";

export default function Login({ navigation }) {
  const initialState = {
    usuario: "",
    clave: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      //const usuario = "";
      let count = 0;
      const datos = await getDocs(collection(db, "usuarios"));

      datos.forEach((documento) => {
        count = 1;
        console.log(documento.data().usuario);
        console.log(documento.data().clave);
      });

      if (count == 0) {
        console.log("Registrando usuario predeterminado");
        saveNewUser();
      }
    };
    obtenerDatos();
  }, []);

  const saveNewUser = async () => {
    try {
      await addDoc(collection(db, "usuarios"), {
        nombreCompleto: "Administrador Villa Maria",
        usuario: "admin",
        clave: "adminV1ll@",
      });
      console.log("USUARIO AGREGADO !");
    } catch (error) {
      console.error(error);
    }
  };

  const logearse = async () => {
    try {
      const datos = await getDocs(collection(db, "usuarios"));

      datos.forEach((documento) => {
        let _user = documento.data().usuario;
        let _pass = documento.data().clave;

        if (state.usuario != "") {
          if(state.clave != ""){
            if (_user === state.usuario && state.clave === _pass) {
              navigation.navigate("INDEX");
            }
            else{
              alert('credenciales incorrectas')
            }
          }
          else{
            alert('contra vacia')
          }
        }
        else{
          alert('Usuario vacio')
        }

        console.log(documento.data().usuario);
        console.log(documento.data().clave);
      });
    } catch (error) {
      console.error(error);
    }
  };

  //console.log(usuario);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/fondo.jpg")}
        style={styles.imageFondo}
      >
        <Text style={styles.titulo}> BIENVENIDO </Text>
        <Image
          style={styles.image}
          source={require("../../../assets/image/login.png")}
        />
        <View style={styles.containerIn}>
          <TextInput
            style={styles.inputGroup}
            placeholder={" Nombre de usuario"}
            onChangeText={(value) => handleChange("usuario", value)}
            value={state.usuario}
          />
          <TextInput
            style={styles.inputGroup}
            placeholder={" Contraseña"}
            secureTextEntry={true}
            onChangeText={(value) => handleChange("clave", value)}
            value={state.clave}
          />
          <Text style={styles.textRecord}>
            ¿Olvidó su usuario o contraseña?
          </Text>
          <View>
            <Pressable style={styles.button} onPress={() => logearse()}>
              <Text style={styles.text}>INGRESAR</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.footer}> BRASAS Y LEÑA RESTAURANT </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerIn: {
    flex: 0.3,
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageFondo: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
    opacity: 0.8,
  },
  titulo: {
    fontSize: 25,
    color: "#800000",
    fontWeight: "bold",
    textShadowColor: "#CDCDCD",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 50,
  },
  inputGroup: {
    width: 250,
    height: 50,
    color: "black",
    borderWidth: 1,
    fontSize: 16,
    padding: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 25,
  },
  textRecord: {
    fontSize: 16,
    alignSelf: "flex-end",
    lineHeight: 21,
    fontWeight: "bold",
    //letterSpacing: 0.25,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    alignSelf: "center",
  },
  footer: {
    fontSize: 15,
    color: "white",
    marginTop: 100,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
  },
});
