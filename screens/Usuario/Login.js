import React, {
  useContext,
  useState
} from 'react'

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView
} from 'react-native'
import FormButton from '../../components/FormButton'
import FormInput from '../../components/FormInput'
import UsuarioContext from '../../contexts/UsuarioContext'

import AtendenteContext from '../../contexts/UsuarioContext'
import { loginUsuario } from '../../services/UsuarioService'

export default function Login(props) {

  const {setId, setName} = useContext(AtendenteContext)

  const [emailFormulario, setEmailFormulario] = useState('')
  const [senha, setSenha] = useState('')
  const { setEmail } = useContext(UsuarioContext)

  const clickLogin = () => {
    if ( emailFormulario === '' ) {
      alert('Informe seu e-mail!')
      return
    }

    if ( senha === '' ) {
      alert('Informe sua senha!')
      return
    }

    const regextEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if ( ! regextEmail.test( emailFormulario ) ) {
      alert('Informe um e-mail válido!')
      return 
    }
    
    loginUsuario(emailFormulario, senha)
      .then((response) => {
        setEmail(emailFormulario)
        return props.navigation.navigate('Listagem de Estacionamentos')
      })
      .catch((error) => {
        return alert('Os dados inseridos não conferem')
      })

  }

  return (
    <SafeAreaView>
      <ScrollView style={{ marginVertical : 32 , padding : 32 }}>
      <Text style={estilos.title}>Easy Parking!</Text>
      <Text style={estilos.text}>Faça login abaixo ou  
        <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro')}>
          <Text style={estilos.link}> crie uma conta</Text>
        </TouchableOpacity>
      </Text>
      <FormInput text='Digite seu E-mail: ' placeholder='Ex: email@email.com' setState={setEmailFormulario} state={emailFormulario}/>
      <FormInput text='Digite sua Senha: ' placeholder='Ex: ******' setState={setSenha} state={senha} password={true}/>

      <FormButton text='Login' onClick={clickLogin} />

      </ScrollView>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  input : {
    borderColor : '#CCC',
    borderRadius : 6,
    borderWidth : 1,
    height : 40,
    lineHeight : 20,
    marginBottom : 12, 
    paddingHorizontal : 10
  },
  button : {
    backgroundColor : '#667080',
    borderRadius : 6,
    height : 40,
    lineHeight : 40,
    marginTop : 16,
    marginBottom : 16,
  },
  buttonText : {
    color : '#FFF',
    lineHeight : 40 ,
    textAlign : 'center' ,
    textTransform : 'uppercase' ,
    fontWeight : 'bold' ,
    fontSize : 12
  },
  title : {
    textAlign : 'center',
    fontFamily : 'Arial',
    fontWeight : 'bold',
    color : '#00BFFF',
    marginVertical : 24,
    fontSize : 48,
  },
  text : {
    color : "#667080",
    fontSize : 14, 
    paddingVertical : 3,
  },
  link : {
    textDecorationLine : "underline",
    color : "#667080",
    fontWeight : "bold",
    marginBottom : -4
  }
})