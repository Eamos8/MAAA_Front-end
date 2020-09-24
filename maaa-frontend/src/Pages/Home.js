import React from 'react'
import PatientCard from '../Components/PatientCard'
import AddPatientForm from '../Components/AddPatientForm'
import Popup from 'reactjs-popup';

//Page for handling CRUD of users and files
class Home extends React.Component {

    //Need to implement get all users and put fetch in place of Patients
    //Need to add function to PatientCard buttons
    //Need to add function to Add new Sample button
Patients = [
    {
        "name" : "Marlon G",
        "email" : "www.asd@gmail.com",
        "password" : "password123",
    },
    {
        "name": "Joe A",
        "email": "www.ddd@gmail.com",
        "password": "password123",
    },
    {
        "name": "Jack G",
        "email": "www.rem@gmail.com",
        "password": "password123",
    }
]
    render() {
        return (
            <div>
                <div class="w-1/5  flex-col">
                    <div class="flex flex-wrap bg-gray-300">
                        <Popup trigger={<button class="bg-blue-500 hover:bg-blue-600 text-white border-blue-400 border rounded font-bold mx-4 my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> + Patient </button>} position="right top">
                            <div><AddPatientForm/></div>
                        </Popup>
                        
                    </div>

                    {this.Patients.map((user, index) => (
                        <div key={index}>
                            <PatientCard name={user.name} email={user.email}/>
                        </div>
                    ))}

                </div>

                <div class="flex content-center flex-wrap">
                    <button>View Recent Samples</button>
                </div>
            </div>
        )
    }
}
export default Home;