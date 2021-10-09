import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, TouchableHighlight, Pressable } from 'react-native';

import { collection, getDocs } from 'firebase/firestore'
import db from '../../../database/firebase';

export default function Index({navigation}) {
    useEffect(()=>{
        const obtenerDatos=async()=>{
            const datos = await getDocs(collection(db, "menu"));
            datos.forEach((documento)=>{
                console.log(documento.data());
            });
        }

        obtenerDatos();
    },[]);
    
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/image/fondo.jpg')}
                style={styles.imageFondo}
            >
                <Image
                    style={styles.image}
                    source={require('../../../assets/image/restaurantlogo.png')}
                />
                <Text style={styles.titulo}> NUESTRA CARTA </Text>
                <StatusBar style="auto" />
                <View style={styles.overlayContainer}>
                    <View style={styles.menuContainer}>
                        <View style={styles.menuItems}>
                            <TouchableHighlight style={styles.imageItems} onPress={() => navigation.navigate('CARNES')}>
                                <Image
                                    style={styles.imageItemsInside}
                                    source={require('../../../assets/image/carnes.jpg')}                                                                    
                                />                                
                            </TouchableHighlight>
                            <Text style={styles.tituloMenu}> CARNES </Text>
                        </View>
                        <View style={styles.menuItems}>
                            <TouchableHighlight style={styles.imageItems} onPress={() => navigation.navigate('MARISCOS')}>
                                <Image
                                    style={styles.imageItemsInside}
                                    source={require('../../../assets/image/mariscos.jpg')}
                                />
                            </TouchableHighlight>
                            <Text style={styles.tituloMenu}> MARISCOS </Text>
                        </View>
                        <View style={styles.menuItems}>
                            <TouchableHighlight style={styles.imageItems} onPress={() => navigation.navigate('ENSALADAS')}>
                                <Image
                                    style={styles.imageItemsInside}
                                    source={require('../../../assets/image/ensaladas.jpg')}
                                />
                            </TouchableHighlight>
                            <Text style={styles.tituloMenu}> ENSALADAS </Text>
                        </View>
                        <View style={styles.menuItems}>
                            <TouchableHighlight style={styles.imageItems} onPress={() => navigation.navigate('BEBIDAS')}>
                                <Image
                                    style={styles.imageItemsInside}
                                    source={require('../../../assets/image/bebidas.jpg')}
                                />
                            </TouchableHighlight>
                            <Text style={styles.tituloMenu}> BEBIDAS </Text>
                        </View>
                    </View>
                    <View style={styles.viewButton}>
                        <Pressable style={styles.button}  onPress={() => navigation.navigate('AGREGAR')}>
                            <Text style={styles.text}>AGREGAR</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.footer}>
                        Guillermo Josué Hernández Andrade - 073118 {"\n"}
                        Pedro Alexander Pérez Rosales - 323418 {"\n"}
                        William Alexander Vásquez Hernández - 273815{"\n"}
                        Rodrigo Alfredo Hidalgo García - 332518 
                    </Text>
                    
                </View>
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
    imageFondo: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
    },
    image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: -40,
    },
    titulo: {
        paddingTop: 10,
        fontSize: 25,
        color: '#800000',
        fontWeight: 'bold',
        textShadowColor: '#CDCDCD',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    overlayContainer: {
        marginTop: 20,
    },
    menuContainer: {
        height: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuItems: {
        width: '50%',
        height: '50%',
        padding: 10,
    },
    imageItems: {
        width: '90%',
        height: '80%',
        borderRadius: 10,
        alignSelf: 'center',
        opacity: 1,
    },
    imageItemsInside: {
        width: '106%',
        height: '106%',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
        alignSelf: 'center',
        opacity: 1,
        marginBottom: 20,
        marginTop: 3,
    },
    tituloMenu: {
        fontSize: 20,
        color: '#FFD700',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 13,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        marginBottom: 13,
    },
    menuItems: {
        width: '50%',
        height: '50%',
        padding: 10,
    },
    viewButton: {
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: 'grey',
        marginTop: 20,
        alignSelf: 'center',
        opacity: 0.9,
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    footer: {
        fontSize: 12,
        color: 'white',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        paddingStart: 20,
    },
});
