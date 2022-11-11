import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native'
import { deletarEstacionamento } from '../../services/EstacionamentoService';

export default function Estacionamento({id, name, address, emailUsuario, nomeUsuario, editarEstacionamento, listarVagas, buscarEstacionamentos}) {

    const removerEstacionamento = () => {
        deletarEstacionamento(id)
            .then((response) => {
                alert('Estacionamento removido com sucesso')
                buscarEstacionamentos();
            })
            .catch((error) => {
                alert('Erro ao remover o estacionamento')
            })
            
    }

    const editar = () => {
        editarEstacionamento(id, name, address)
    }

    return (
            <View style={estilos.card}>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>Nome do Estacionamento:</Text> {name}
                </Text>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>Endereço do Estacionamento:</Text> {address}
                </Text>
                <Text style={estilos.contentText}>
                    <Text style={estilos.contentIdentifier}>E-mail do Criador:</Text> {emailUsuario}
                </Text>
                <Text style={estilos.contentText}> 
                    <Text style={estilos.contentIdentifier}>Nome do Criador:</Text> {nomeUsuario}
                </Text>
                <TouchableOpacity onPress={listarVagas}><Text style={estilos.vagas}>Listar Vagas</Text></TouchableOpacity>
                <View style={estilos.actions}>
                    <TouchableOpacity onPress={editar}>
                        <Text style={estilos.edit}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removerEstacionamento}>
                        <Text style={estilos.remove}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const estilos = StyleSheet.create({
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
    },
    edit: {
        backgroundColor: '#F8F8FF',
        borderRadius: 6,
        color: '#808080',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        padding: 4,
        textAlign : 'center',
    },
    remove: {
        backgroundColor: '#F8F8FF',
        borderRadius: 6,
        color: '#8B0000',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        padding: 4,  
        textAlign : 'center',
    },
    vagas: {
        backgroundColor: '#F8F8FF',
        borderRadius: 6,
        color: '#808080',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
        padding: 4,
        textAlign : 'center',
    }
})