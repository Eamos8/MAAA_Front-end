import React from 'react'
import ReactDOM from 'react-dom'
import { StetheeProLargeLogoSVG } from '@m3dicine/icons'
import { form } from 'react-bootstrap'

//Form for handling login of users
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emailValue: "", passwordValue: "" }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ emailValue: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ passwordValue: event.target.value });
    }

    submitForm() {
        console.log(this.state.emailValue)
    }

    render() {
        return (
            <div class="w-full relative justify-center flex flex-wrap justify-center">
                <form class="bg-white max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="flex flex-wrap justify-center">
                        <StetheeProLargeLogoSVG />
                    </div>
                    <p class="text-center flex flex-wrap justify-center text-black font-semibold font-serif py-3">
                        Welcome to Medicine Audio Annotation Application
                </p>
                    <p class="flex flex-wrap justify-center text-black text-xs font-serif py-3">
                        Please Sign in With Your Email and Password.
                </p>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref="loginInput" placeholder="sample@gmail.com" onChange={this.handleEmailChange} />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                            </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={this.handlePasswordChange} />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-white hover:bg-blue-100 text-blue-400 border-blue-400 border rounded font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.submitForm()}>
                            Login
                            </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                            </a>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginForm;