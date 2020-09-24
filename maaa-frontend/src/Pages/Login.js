import React from 'react'
import ReactDOM from 'react-dom'
import { StetheeProLargeLogoSVG } from '@m3dicine/icons'
import { form } from 'react-bootstrap'
import LoginForm from '../Components/LoginForm'
import AddPatientForm from '../Components/AddPatientForm'
import PatientCard from '../Components/PatientCard'

//Page for handling login form
class Login extends React.Component {
    
    //Need to set routing to/from login page based on authentication

    render() {
        return (
            <div >
                <LoginForm/>
            </div>
        )
    }
}
export default Login;