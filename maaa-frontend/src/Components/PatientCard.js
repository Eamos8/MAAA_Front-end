import React from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'


//Card that displays patient information and allows user to modify/delete user or add new sample
class PatientCard extends React.Component {
//Still need to implement delete/modify user on click of icons and adding of new file

    constructor(props) {
        super(props);
        this.state = { file: '', msg: '', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc1MjRhOWY2ZmIxMjI5YzQzOTk1MDciLCJpYXQiOjE2MDE1MTI2MTd9.epUEgnsc0aGEMrp1P-QVRanI5pU5vKvbOQ-OO6Y6Nn0' };
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

        axios.post('http://localhost:3000/file/upload/single', data, {
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
            <form class="bg-gray-100 shadow-md rounded px-2 pt-2 pb-2">
                <div class="flex flex-wrap justify-center">
                </div>
                <div class="my-2">
                    <label class="block text-gray-700 text-sm font-bold">
                        {this.props.name}
                    </label>
                </div>
                <div class="my-2">
                    <label class="block text-gray-700 text-sm font-bold">
                        {this.props.email}
                    </label>
                    
                </div>
                <div class="flex flex-row-reverse">
                    <div class="px-2 cursor-pointer" onClick={() => console.log('yes')}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                    <div class="px-2 cursor-pointer" onClick={() => console.log('no ')}>
                        <FontAwesomeIcon icon={faWrench} />
                    </div>
                    <div class="pr-10 cursor-pointer flex flex-wrap" onClick={() => console.log('yes')}>
                        <input onChange={this.onFileChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="file" name="UploadAudio" accept=".mp3, .wav"/>
                        <FontAwesomeIcon icon={faPlus} />
                        <button disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
                    </div>
                </div>
                
            </form>
        )
    }
}
export default PatientCard;