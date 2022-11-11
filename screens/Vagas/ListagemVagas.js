import React, {
    useContext,
} from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import FormButton from '../../components/FormButton'
import UsuarioContext from '../../contexts/UsuarioContext'

import { mockVagas } from './mockVagas'
import Vaga from './Vaga'

export default function ListagemVagas(props) {

    const { email, setEmail} = useContext(UsuarioContext)

    const logout = () => {
        setEmail('')
        return  props.navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{ height : '100%' }}>
            <View style={estilos.header}>
                <Text style={estilos.title}>Easy Parking</Text>
                <Text style={estilos.info}> {email}</Text>
                <TouchableOpacity>
                    <Text style={estilos.info} onPress={logout}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding : 24 }}>
                <FormButton text='Voltar para Home' onClick={() => props.navigation.navigate('Listagem de Estacionamentos')} />
                <FlatList 
                    data={ mockVagas }
                    renderItem={ ({item}) => {
                        const { name, floor, status } = item
                        return <Vaga name={name} floor={floor} status={status} />
                    }}/>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    title: {
        fontFamily : 'Arial',
        fontWeight : 'bold',
        color : '#F8F8FF',
        fontSize : 30,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 8
    },
    info: {
        color : '#F8F8FF',
        fontSize : 16,
        fontWeight: 'bold',
    },
    register: {
        backgroundColor: '#00BFFF',
        padding : 8,
        marginBottom : 16,
        width : '50%',
        borderRadius : 8
    }
})