import React from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Card that displays patient information and allows user to modify/delete user or add new sample
class PatientCard extends React.Component {
//Still need to implement delete/modify user on click of icons and adding of new file

    constructor(props) {
        super(props);
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
                        <p class="px-2">Add New Sample</p>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                
            </form>
        )
    }
}
export default PatientCard;