import axios from 'axios'

const URL_BASE = 'https://easyparkingapi.azurewebsites.net/api'

function listarEstacionamentos() {
    return axios({
        url : URL_BASE + '/parkinglot',
        method: 'get',
    })
}

function cadastrarEstacionamento(name, address, userId) {
    return axios({
        url : URL_BASE + '/parkinglot',
        method: 'post',
        data : {
            name: name, 
            address: address, 
            userId: userId
        }
    })
}

function editarEstacionamento(id, name, address, userId) {
    return axios({
        url : URL_BASE + '/parkinglot/'+id,
        method: 'put',
        data : {
            name,
            address,
            userId
        }
    })
}

function deletarEstacionamento(id) {
    return axios({
        url : URL_BASE + '/parkinglot/'+id,
        method: 'delete'
    })
}



export { listarEstacionamentos, editarEstacionamento, cadastrarEstacionamento, deletarEstacionamento }