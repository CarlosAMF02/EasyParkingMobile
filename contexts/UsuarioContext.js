import React, {
    createContext,
    useState
} from 'react'

const UsuarioContext = createContext({})

function UsuarioProvider(props) {
    const [email, setEmail] = useState('')

    return (
        <UsuarioContext.Provider value={{ email, setEmail }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext

export { UsuarioProvider }