import React, { Component } from 'react'

import './homepage.style.scss'
import Directory from '../../components/directory/directory.component'

class Homepage extends Component
{
    render()
    {
        return(
            <div className="homepage">
               <Directory></Directory>
            </div>
        )
    }
}
    export default Homepage