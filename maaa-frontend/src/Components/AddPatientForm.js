import React from 'react'
import ReactDOM from 'react-dom'
import { StetheeProLargeLogoSVG } from '@m3dicine/icons'
import { form } from 'react-bootstrap'
import axios from 'axios'


//Form for handling the creation of Users
class AddPatientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emailValue: "", passwordValue: "", nameValue:"" }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

        handleEmailChange(event) {
            this.setState({ emailValue: event.target.value });
        }

    handlePasswordChange(event) {
        this.setState({ passwordValue: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ nameValue: event.target.value });
    }

    submitForm() {

        const userObject = {
            name: this.state.nameValue,
            email: this.state.emailValue,
            password: this.state.passwordValue
        };

        console.log(userObject)
       
        axios.post('http://localhost:3000/users', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div class="w-full relative justify-center flex flex-wrap justify-center">
                <form class="bg-white max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div class="flex flex-wrap justify-center">
                        <StetheeProLargeLogoSVG />
                    </div>
                    <p class="flex flex-wrap justify-center text-black text-xs font-serif py-3">
                        Please fill out your details.
                </p>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                            </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Name" onChange={this.handleNameChange} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref="loginInput" placeholder="sample@gmail.com" onChange={this.handleEmailChange} />
                    </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={this.handlePasswordChange}/>
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="bg-white hover:bg-blue-100 text-blue-400 border-blue-400 border rounded font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.submitForm()}>
                            Add Patient ++
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Cancel
                            </a>
                        </div>
                </form>
            </div>
        )
    }
}
export default AddPatientForm;