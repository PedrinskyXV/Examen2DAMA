import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, Pressable, ImageBackground, StyleSheet, TextInput, View } from 'react-native';

import { collection, addDoc } from 'firebase/firestore';
import db from '../../../database/firebase';

import RNPickerSelect from "react-native-picker-select";

export default function Agregar({ navigation }) {
    const initialState = {
        nombrePlatillo: "",
        descripcion: "",
        precio: "",
        categoria: "",
    }

    const [state, setState] = useState(initialState);

    const handleChange = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const saveEmployed = async () => {
        await addDoc(collection(db, "menu"), {
            nombrePlatillo: state.nombrePlatillo,
            descripcion: state.descripcion,
            precio: state.precio,
            categoria: state.categoria,
        });
        navigation.navigate('INDEX');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/image/fondo.jpg')}
                style={styles.imageFondo}
            >
                <View style={styles.containerIn}>
                    {<Text style={styles.titulo}> AGREGAR PLATILLO </Text>}
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder=" Nombre del Platillo"
                            onChangeText={(value) => handleChange("nombrePlatillo", value)}
                            value={state.nombrePlatillo}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            placeholder=" Descripcion"
                            onChangeText={(value) => handleChange("descripcion", value)}
                            value={state.descripcion}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder=" Precio"
                            onChangeText={(value) => handleChange("precio", value)}
                            value={state.precio}
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        {<RNPickerSelect
                            placeholder={{ label: "Seleccione la categoria", value: null }}
                            onValueChange={(value) => handleChange("categoria", value)}
                            items={[
                                { label: "Bebidas", value: "Bebidas" },
                                { label: "Carnes", value: "Carnes" },
                                { label: "Ensaladas", value: "Ensaladas" },
                                { label: "Mariscos", value: "Mariscos" },
                            ]}
                            value={state.categoria}
                        />}
                        {/*<TextInput
                            placeholder=" Categoria"
                            onChangeText={(value) => handleChange("categoria", value)}
                            value={state.categoria}
                        />*/}
                    </View>
                    <View>
                        <Pressable style={styles.button} onPress={() => saveEmployed()}>
                            <Text style={styles.text}>AGREGAR</Text>
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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIn: {
        flex: 0.5,
        width: '80%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageFondo: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },
    titulo: {
        fontSize: 25,
        color: '#800000',
        fontWeight: 'bold',
        textShadowColor: '#CDCDCD',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginBottom: 50,
    },
    inputGroup: {
        padding: 2,
        marginBottom: 25,
        borderRadius: 4,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 25,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    footer: {
        fontSize: 15,
        color: 'white',
        marginTop: 90,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
    },
});
