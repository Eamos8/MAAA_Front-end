import React from 'react'
import { StetheeProHeaderLightSVG } from '@m3dicine/icons'
import { Link } from 'react-router';


//Header banner with Stethee Icon
class Header extends React.Component {

    render() {
        return (
            <div class="flex items-center flex-wrap bg-black px-6 h-16 w-100">
                <div class = "items-center">
                    <StetheeProHeaderLightSVG class="h-16"/>
                </div>

                <Link to="/home">
                    <button class='text-white mx-2' type="button">
                        Home!
                    </button>
                </Link>

                <Link to="/login">
                    <button class='text-white mx-2' type="button">
                        Login!
                    </button>
                </Link>

                <Link to="/annotate">
                    <button class='text-white mx-2' type="button">
                        Annotate!
                    </button>
                </Link>
            </div>
        )
    }
}
export default Header;