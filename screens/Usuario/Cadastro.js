import React, { useState } from 'react'

import 
{
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StyleSheet
} 
from 'react-native'
import FormButton from '../../components/FormButton'
import FormInput from '../../components/FormInput'
import { cadastrarUsuario } from '../../services/UsuarioService'

export default function Cadastro(props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    const cadastrar = () => {
        if (nome === '' || email === '' || senha === '' || confirmacaoSenha === '') {
            return alert('Todos os campos do formulário são obrigatórios!')
        }

        if(senha !== confirmacaoSenha) {
            return alert('Os campos de senha não conferem!')
        }

        const regextEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if ( ! regextEmail.test( email ) ) {
            return alert('Informe um e-mail válido!') 
        }

        cadastrarUsuario(nome, email, senha)
            .then((response) => {
                alert('Cadastro realizado com sucesso!')
                props.navigation.navigate('Login')
            })
          .catch((error) => {
            alert('Erro ao realizar o cadastro!')
            console.error(error)
          })
    }

    return (
        <SafeAreaView style={{ marginTop : 8 , padding : 16 }}>
            <ScrollView>
                <Text style={estilos.title}>Criar Conta</Text>
                <FormInput text='Nome' placeholder='Ex: Paulo' setState={setNome} state={nome}/>
                <FormInput text='E-mail' placeholder='Ex: paulo@email.com' setState={setEmail} state={email}/>
                <FormInput text='Senha' placeholder='Ex: ******' setState={setSenha} state={senha} password={true}/>
                <FormInput text='Confirmar Senha' placeholder='Ex: ******' setState={setConfirmacaoSenha} state={confirmacaoSenha} password={true}/>
                <FormButton text='Salvar' onClick={cadastrar}/>
                <FormButton text='Voltar' onClick={()=> props.navigation.navigate('Login')}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    title : {
      textAlign : 'center',
      fontFamily : 'Arial',
      fontWeight : 'bold',
      color : '#667080',
      marginVertical : 24,
      fontSize : 30,
    }
  })
