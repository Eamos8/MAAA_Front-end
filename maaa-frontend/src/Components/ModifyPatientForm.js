import React from 'react'
import ReactDOM from 'react-dom'
import { StetheeProLargeLogoSVG } from '@m3dicine/icons'
import { form } from 'react-bootstrap'
import axios from 'axios'
import Popup from 'reactjs-popup';
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




//Form for handling the creation of Users
class ModifyPatientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: this.props.emailValue,
            phoneValue: this.props.phoneValue,
            firstNameValue: this.props.firstNameValue,
            lastNameValue: this.props.lastNameValue,
            genderValue: this.props.genderValue,
            dateOfBirthValue: this.props.dateOfBirthValue,
            addressValue: this.props.addressValue,
            userId: this.props.userId,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc2NDQzYTU5ZTRmZDgzYzBlZDFhMjUiLCJpYXQiOjE2MDE1ODYyMzR9.sxlBmWD3K72chLtE0UVF16pczv8acAIotAO7xSwvzEk"
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleDOBChange = this.handleDOBChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);

    }

    handleEmailChange(event) {
        this.setState({ emailValue: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phoneValue: event.target.value });
    }

    handleFirstNameChange(event) {
        this.setState({ firstNameValue: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastNameValue: event.target.value });
    }

    handleGenderChange(event) {
        this.setState({ genderValue: event.target.value });
    }

    handleDOBChange(event) {
        this.setState({ dateOfBirthValue: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ addressValue: event.target.value });
    }

    submitAndExit(close) {
        this.submitForm();
        close();
    }

    cancelAndExit(close) {
        this.setState({
            emailValue: this.props.emailValue,
            phoneValue: this.props.phoneValue,
            firstNameValue: this.props.firstNameValue,
            lastNameValue: this.props.lastNameValue,
            genderValue: this.props.genderValue,
            dateOfBirthValue: this.props.dateOfBirthValue,
            addressValue: this.props.addressValue,
        })
        close();
    }

    submitForm() {

        const patientObject = {
            _id: this.state.userId,
            firstName: this.state.firstNameValue,
            lastName: this.state.lastNameValue,
            gender: this.state.genderValue,
            dateOfBirth: this.state.dateOfBirthValue,
            address: this.state.addressValue,
            email: this.state.emailValue,
            phoneNumber: this.state.phoneValue
        };

        const t = this.state.token;


        axios.patch('http://localhost:3000/patient', patientObject, {
            headers: {
                'Authorization': `Bearer ${t}`
            }
        })
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }

    render() {

        var date = this.state.dateOfBirthValue;
        var newdate = date.split("/").reverse().join("-");

        return (
            <Popup trigger={<div class="px-2 cursor-pointer" >
                <FontAwesomeIcon icon={faWrench} />
            </div>}
                position="right top"
                closeOnDocumentClick
            >
                {close => (
                    <div class="w-full relative justify-center flex flex-wrap justify-center">
                        <form class="bg-white max-w-md shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                            <div class="flex flex-wrap justify-center">
                                <StetheeProLargeLogoSVG />
                            </div>
                            <p class="flex flex-wrap justify-center text-black text-xs font-serif py-3">
                                Please fill out your details.
                    </p>
                            <div class="mb-2">
                                <label class="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                            </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"  value={this.state.emailValue} onChange={this.handleEmailChange} />
                            </div>
                            <div class="flex flex-row">
                                <div class="mb-2">
                                    <label class=" text-gray-700 text-sm font-bold mb-2">
                                        First Name
                                </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" value={this.state.firstNameValue} onChange={this.handleFirstNameChange} />
                                </div>
                                <div class="mb-2">
                                    <label class=" text-gray-700 text-sm font-bold mb-2">
                                        Last Name
                                </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" value={this.state.lastNameValue} onChange={this.handleLastNameChange} />
                                </div>
                            </div>
                            <div class="flex flex-row">
                                <div class="mb-2 w-1/2">
                                    <label class=" text-gray-700 text-sm font-bold mb-2" >
                                        Date of Birth
                                </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="dateOfBirth" type="date" defaultValue={newdate} onChange={this.handleDOBChange} />
                                </div>
                                <div class="mb-2 cursor-pointer">
                                    <label class=" text-gray-700 text-sm font-bold mb-2" >
                                        Gender
                                </label>
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="gender" type="text" value={this.state.genderValue} onChange={this.handleGenderChange} />
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" value={this.state.phoneValue} onChange={this.handlePhoneChange} />
                            </div>
                            <div class="mb-2">
                                <label class="block text-gray-700 text-sm font-bold mb-2">
                                    Address
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Address" value={this.state.addressValue} onChange={this.handleAddressChange} />
                            </div>

                            <div class="flex items-center justify-between">
                                <button class="bg-white hover:bg-blue-100 text-blue-400 border-blue-400 border rounded font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => this.submitAndExit(close)}>
                                    Add Patient ++
                                </button>
                                <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 focus:outline-none" onClick={() => this.cancelAndExit(close)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </Popup>
        )
    }
}
export default ModifyPatientForm;