import React, {
    useContext,
    useEffect,
    useState
} from 'react'
import {
    FlatList,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import UsuarioContext from '../../contexts/UsuarioContext'

import { listarEstacionamentos } from '../../services/EstacionamentoService'
import Chamado from './CadastroEstacionamento'
import Estacionamento from './Estacionamento'

export default function ListagemEstacionamento(props) {

    const [isLoading, setIsLoading] = useState(false)

    const {email, setEmail} = useContext(UsuarioContext)
    const [estacionamentos, setEstacionamentos] = useState([])
    const [userId, setUserId] = useState(0)

    async function buscarEstacionamentos() {
        setIsLoading(true)
        listarEstacionamentos()
            .then((response) => {
                setEstacionamentos(response.data.content)
                setIsLoading(false)
            })
            .catch((error) => {
                alert('Não foi possível listar os estacionamentos!')
                setIsLoading(false)
            })
    }

    useEffect(
        () => { 
            const unsubscribe = props.navigation.addListener('focus', () => {
                buscarEstacionamentos()
            })

            return unsubscribe
        }, 
        []
    )


    const editarEstacionamento = (id, name, address) => {
        return  props.navigation.navigate('Cadastrar Estacionamento', { tipo: 1, estacionamento: { id, name, address, userId: userId } })
    }

    const logout = () => {
        setEmail('')
        return  props.navigation.navigate('Login')
    } 

    const listarVagas = () => props.navigation.navigate('Listagem de Vagas')

    return (
        <SafeAreaView style={{ height : '100%' }}>
            <View style={estilos.header}>
                <Text style={estilos.title}>Easy Parking</Text>
                <Text style={estilos.info}> {email}</Text>
                <TouchableOpacity>
                    <Text style={estilos.info} onPress={logout}>Sair</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 24, marginHorizontal: 18 }}>
                <TouchableOpacity style={estilos.register} onPress={() => props.navigation.navigate('Cadastrar Estacionamento', { tipo: 0, estacionamento: { userId: userId } })}>
                    <Text style={estilos.info}>Cadastrar Estacionamento</Text>
                </TouchableOpacity>
                <FlatList 
                    data={ estacionamentos }
                    renderItem={ ({item}) => {
                        const { id, name, address } = item;
                        const { id:userId, name: nomeUsuario, email: emailUsuario } = item.user
                        setUserId(userId)
                        return <Estacionamento id={id} name={name} address={address} emailUsuario={emailUsuario} nomeUsuario={nomeUsuario} editarEstacionamento={editarEstacionamento} listarVagas={listarVagas} buscarEstacionamentos={buscarEstacionamentos} />
                    }}
                    refreshControl={
                        <RefreshControl 
                            refreshing={ isLoading }
                            onRefresh={ () => buscarEstacionamentos() }/>
                    }/>
            </ScrollView>
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