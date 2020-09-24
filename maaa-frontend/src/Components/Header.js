import React from 'react'
import { StetheeProHeaderLightSVG } from '@m3dicine/icons'

//Header banner with Stethee Icon
class Header extends React.Component {

    render() {
        return (
            <div class="flex items-center flex-wrap bg-black px-6 h-16 w-100">
                <div class = "items-center">
                    <StetheeProHeaderLightSVG class="h-16"/>
                </div>
            </div>
        )
    }
}
export default Header;