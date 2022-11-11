import React from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'

export default function Vaga({name, floor, status}) {

    return (
            <View style={estilos.card}>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>Nome do Vaga:</Text> {name}
                </Text>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>Andar da Vaga:</Text> {floor}
                </Text>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>Status da Vaga:</Text> {status}
                </Text>
            </View>
    )
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#00BFFF',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        marginBottom: 8,
        marginTop: 8,
        padding: 6,
    },
    contentText: {
        color: '#F8F8FF',
        fontFamily: 'Arial',
        fontSize: 16,
        marginBottom: 4,
    },
    contentIdentifier: {
        fontWeight: 'bold',
    }
})