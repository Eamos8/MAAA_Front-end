import React from 'react'
import ReactDOM from 'react-dom'
import { StetheeProLargeLogoSVG } from '@m3dicine/icons'
import { form } from 'react-bootstrap'
import axios from 'axios'
import Popup from 'reactjs-popup';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ModifyPatientForm from './ModifyPatientForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WidgetBar extends React.Component {
    anchor = null;
    constructor(props) {
        super(props)
        this.state = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc2NDQzYTU5ZTRmZDgzYzBlZDFhMjUiLCJpYXQiOjE2MDE1ODYyMzR9.sxlBmWD3K72chLtE0UVF16pczv8acAIotAO7xSwvzEk'
        }
    }

    deleteReq = async (id) => {
        var _id = id;
        const t = this.state.token;

        try {
            const res = await axios.delete(`http://localhost:3000/patient/${_id}`, {
                headers: {
                    'Authorization': `Bearer ${t}`
                }
            });
            console.log('Returned data:', res);
        }
        catch (e) {
            console.log(`Axios request failed: ${e}`);
        }

    }

    deletePatient(id) {
        this.deleteReq(id)
        this.props.fetchUsers();
    }

    render() {
        return (
            <Popup trigger={
                <div class='absolute right-0 top-0 '>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>}
                position="left top"
                closeOnDocumentClick
                size='small'
            >
                {close => (
                    <div class="bg-gray-300 flex flex-row-reverse">
                        <div class="px-2 cursor-pointer"
                            onClick={(e) => window.confirm("Are you sure you wish to delete this item?") &&
                            this.deletePatient(this.props.userId)
                            }>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                        <ModifyPatientForm
                            firstNameValue={this.props.firstNameValue}
                            lastNameValue={this.props.lastNameValue}
                            emailValue={this.props.emailValue}
                            userId={this.props.userId}
                            phoneValue={this.props.phoneValue}
                            genderValue={this.props.genderValue}
                            dateOfBirthValue={this.props.dateOfBirthValue}
                            addressValue={this.props.addressValue} />
                    </div>
                    )}
                
            </Popup>
        )
    }
}
export default WidgetBar
    