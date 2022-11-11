import axios from 'axios'

const URL_BASE = 'https://easyparkingapi.azurewebsites.net/api'

function loginUsuario(email, password) {
    return axios({
        url : URL_BASE + '/auth',
        method: 'post',
        data : {
            email,
            password
        }
    })
}

function cadastrarUsuario(name, email, password) {
    return axios({
        url : URL_BASE + '/user',
        method: 'post',
        data : {
            name, 
            email, 
            password
        }
    })
}

export { loginUsuario, cadastrarUsuario }