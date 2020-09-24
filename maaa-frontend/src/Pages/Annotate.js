import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

//Page for handling annotation and display of files
class Annotate extends React.Component {

    render() {
        return (
            <div>
                <div class="w-1/5 bg-gray-300 flex-col">
                    <div class="flex flex-wrap">
                        <button class="py-5 px-10 h-10 justify-center "> + Patient </button>
                        <button class="py-5 px-10 h-10 justify-center"> Sort </button>
                    </div>
                    <DropdownButton id="dropdown-item-button" title="Patients" class="flex flex-col">
                        <Dropdown.Item as="button">Patient 1</Dropdown.Item>
                        <Dropdown.Item as="button">Patient 2</Dropdown.Item>
                        <Dropdown.Item as="button">Patient 4</Dropdown.Item>
                    </DropdownButton>
                </div>

            </div>
        )
    }
}
export default Annotate;