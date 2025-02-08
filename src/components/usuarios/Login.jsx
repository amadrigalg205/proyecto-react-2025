import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    //email -> eve.holt@reqres.in
    //password -> cityslicka

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const[loading, setLoading] = useState(false)

    const[error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        console.log(user)
        axios.post(`https://reqres.in/api/login`, user)
        .then(data =>{
            setLoading(false)
            console.log(data)
            localStorage.setItem("tokenEDmarket", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setLoading(false)   
            console.error(e)
            setError(e.response.data.error)
        } )
    }

    if( localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" name="email" required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }}/>
                </div>
                <div className="submit">
                    <input type="submit" value={loading ? "cargando..." : "Ingresar"} className="link" />
                </div>
            </form>
            {
                //error && <span className="error">Error: {JSON.stringify(error)}</span>
                error && <span className="error">Error: {error}</span>
            }
            
        </div>        
    )
}

export default Login