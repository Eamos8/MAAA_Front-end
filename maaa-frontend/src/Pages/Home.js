import React from 'react'
import PatientCard from '../Components/PatientCard'
import AddPatientForm from '../Components/AddPatientForm'
import Popup from 'reactjs-popup';
import Axios from 'axios';

//Page for handling CRUD of users and files
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], 
            isOpen: false,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc2NDQzYTU5ZTRmZDgzYzBlZDFhMjUiLCJpYXQiOjE2MDE1ODYyMzR9.sxlBmWD3K72chLtE0UVF16pczv8acAIotAO7xSwvzEk"
        }
        this.fetchUsers = this.fetchUsers.bind(this);
    }
    //Need to implement get all users and put fetch in place of Patients
    //Need to add function to PatientCard buttons
    //Need to add function to Add new Sample button

    fetchUsers() {
        const t = this.state.token;

        Axios.get('http://localhost:3000/patient/all', {
            headers: {
                'Authorization': `Bearer ${t}`
            }
        })
            .then((res) => {
                const users = res.data;
                this.setState({ users })
            })
    }

    componentDidMount() {
            this.fetchUsers();
    }


    render() {
        const users = this.state.users;
        return (
            <div>
                <div class="w-1/5  flex-col">
                    <div class="flex flex-wrap bg-gray-300">
                        <AddPatientForm
                            fetchUsers={this.fetchUsers} />
                    </div>

                    {users.map((user, index) => (
                        <div key={index}>
                            <PatientCard
                                fetchUsers={this.fetchUsers}
                                firstNameValue={user.firstName}
                                lastNameValue={user.lastName}
                                emailValue={user.email}
                                userId={user._id}
                                phoneValue={user.phoneNumber}
                                genderValue={user.gender}
                                dateOfBirthValue={user.dateOfBirth}
                                addressValue={user.address} />
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
export default Home;