import React from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import ModifyPatientForm from './ModifyPatientForm';
import WidgetBar from './WidgetBar'


//Card that displays patient information and allows user to modify/delete user or add new sample
class PatientCard extends React.Component {
//Still need to implement delete/modify user on click of icons and adding of new file

    constructor(props) {
        super(props);
        this.state = { file: '', msg: '', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc2NDQzYTU5ZTRmZDgzYzBlZDFhMjUiLCJpYXQiOjE2MDE1ODYyMzR9.sxlBmWD3K72chLtE0UVF16pczv8acAIotAO7xSwvzEk' };
    }

    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0]
        });
    }

    uploadFileData = (event) => {
        event.preventDefault();
        this.setState({ msg: '' });

        let data = new FormData();
        data.append('file', this.state.file);

        const t = this.state.token;

        axios.post('http://localhost:3000/file/single', data, {
            headers: {
                'Authorization': `Bearer ${t}`
            }
        })
            .then((res) => {
                console.log('file has uploaded')
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

    }

    

    render() {
        return (
            <div class="bg-gray-100 shadow-md rounded px-2 pt-2 pb-2 border-b-2 hover:bg-gray-500">
                <div class="flex flex-wrap my-2">
                    <label class="flex flex-wrap mx-1 text-gray-700 text-sm font-bold">
                        {this.props.firstNameValue}
                    </label>
                    <label class="flex flex-wrap mx-1 text-gray-700 text-sm font-bold">
                        {this.props.lastNameValue}
                    </label>
                    
                </div>
                <div class='w-full relative justify-center flex flex-wrap justify-center'>
                    <WidgetBar fetchUsers={this.props.fetchUsers} firstNameValue={this.props.firstNameValue} lastNameValue={this.props.lastNameValue} emailValue={this.props.emailValue} userId={this.props.userId} phoneValue={this.props.phoneValue} genderValue={this.props.genderValue} dateOfBirthValue={this.props.dateOfBirthValue} addressValue={this.props.addressValue}/>
                </div> 
                <div class="my-1">
                    <label class="flex flex-wrap right-0 text-gray-700 text-sm font-bold">
                        {this.props.emailValue}
                    </label> 
                </div>                 
                <div class="pr-10 cursor-pointer flex flex-wrap">
                    <input onChange={this.onFileChange} class="my-2 w-full" type="file" name="UploadAudio" accept=".mp3, .wav" />
                    <FontAwesomeIcon icon={faPlus} />
                    <button class='' disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
                </div>
                                
            </div>
        )
    }
}
export default PatientCard;