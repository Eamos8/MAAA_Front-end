import React from 'react'
import Header from '../Components/Header'

class Root extends React.Component {
    //This class appears on all pages
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
export default Root;