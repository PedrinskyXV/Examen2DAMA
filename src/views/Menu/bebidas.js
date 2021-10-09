import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

export default function Bebidas({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/image/fondo.jpg')}
                style={styles.imageFondo} 
            >
                <Image
                    style={styles.image}
                    source={require('../../../assets/image/bebidas.jpg')}
                />
                <Text style={styles.titulo}> BEBIDAS </Text>
                <View style={styles.overlayContainer}>
                    <View style={styles.menuContainer}>
                        <View style={styles.menuItems}>
                            <Text style={styles.tituloMenu}> Sex on the beach </Text>
                            <Image
                                    style={styles.imageItems}
                                    source={require('../../../assets/image/sexBeach.jpg')}
                                />
                        </View>
                        <View style={styles.menuItems}>
                            <Text style={styles.textoMenu}>1 medida de Vodka, Ron Blanco, Gin, Tequila, Jugo de Naranja y Jugo de Lima con 3 de Cola.</Text>                                                       
                            <Text style={styles.precioMenu}> $7.00  </Text>
                        </View>
                        <View style={styles.menuItems}>
                            <Text style={styles.tituloMenu}> Cosmopolitan </Text>
                            <Image
                                    style={styles.imageItems}
                                    source={require('../../../assets/image/cosmopolitan.jpg')}
                                />
                        </View>
                        <View style={styles.menuItems}>
                            <Text style={styles.textoMenu}>2 medidas de Vodka de cítricos, 1 medida de Triple Sec, Jugo de limón fresco y Jugo de arándanos.</Text>                                                       
                            <Text style={styles.precioMenu}> $8.00  </Text>
                        </View>
                    </View>
                    <Text style={styles.footer}> BRASAS Y LEÑA RESTAURANT </Text>
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
        opacity: 0.85,
    },
    image: {
        width: '90%',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 5,
    },
    titulo: {
        fontSize: 20,
        color: '#800000',
        fontWeight: 'bold',
        textShadowColor: '#CDCDCD',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    overlayContainer: {
        marginTop: 2,
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
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
        alignSelf: 'center',
        opacity: 1,
        marginTop: 3,
    },
    tituloMenu: {
        fontSize: 15,
        color: '#063000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
    },
    textoMenu: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginTop: 37,
        margin: 4,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        opacity: 1,
    },
    precioMenu: {
        fontSize: 20,
        color: '#063000',
        fontWeight: 'bold',
        textAlign: 'right',
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        padding: 5,
        marginTop: 2,
    },
    footer: {
        fontSize: 10,
        color: 'white',
        marginTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
    },
});
