import React, { useEffect, useState } from 'react'

import 
{
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} 
from 'react-native'
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import { cadastrarEstacionamento, editarEstacionamento } from '../../services/EstacionamentoService';

export default function CadastroEstacionamento(props) {

    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')

    const tipo = props.route.params.tipo;
    const { userId } = props.route.params.estacionamento;

    useEffect(
        () => { 
            if (tipo === 1) {
                const { name, address } = props.route.params.estacionamento;
                setNome(name)
                setEndereco(address)
            }
        }, 
        []
    )
    
    const cadastrar = () => {
        if (nome === '') return alert('O nome é obrigatório')
        if (endereco === '') return alert('O endereço é obrigatório')

        if(nome.length <= 2) return alert('O nome deve conter entre 2 e 50 caracteres')
        if(endereco.length <= 10) return alert('O nome deve conter entre 10 e 60 caracteres')

        cadastrarEstacionamento(nome, endereco, userId)
            .then((response) => {
                alert('Estacionamento cadastrado com sucesso')
                return props.navigation.navigate('Listagem de Estacionamentos');
            })
            .catch((error) => {
                alert('Erro ao cadastrar o estacionamento')
                return props.navigation.navigate('Listagem de Estacionamentos');
            })
    }

    const editar = () => {
        if (nome === '') return alert('O nome é obrigatório')
        if (endereco === '') return alert('O endereço é obrigatório')

        if(nome.length <= 2) return alert('O nome deve conter entre 2 e 50 caracteres')
        if(endereco.length <= 10) return alert('O nome deve conter entre 10 e 60 caracteres')

        const { id, userId } = props.route.params.estacionamento;

        editarEstacionamento(id, nome, endereco, userId)
            .then((response) => {
                alert('Estacionamento Alterado com Sucesso')
                return props.navigation.navigate('Listagem de Estacionamentos');
            })
            .catch((error) => {
                alert('Erro ao alterar o estacionamento')
                return props.navigation.navigate('Listagem de Estacionamentos');
            });
    }

    return (
        <SafeAreaView>
            <View style={estilos.formulario}>
                <FormInput text='Nome' placeholder='Insira o nome do estacionamento' setState={setNome} state={nome} />
                <FormInput text='Endereço' placeholder='Insira o nome do endereço' setState={setEndereco} state={endereco} />
                {tipo === 0 && (
                    <FormButton text='Cadastrar' onClick={cadastrar} />
                )}

                {tipo === 1 && (
                    <FormButton text='Salvar Alterações' onClick={editar} />
                )}
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    formulario: {
        margin: 8
    },
})
