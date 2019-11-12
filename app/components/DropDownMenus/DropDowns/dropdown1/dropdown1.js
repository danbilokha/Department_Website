import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown1(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.about"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.about.history"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.about.partners"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.about.speciality"}/>
                </a>
            </div>
        </div>
    )
}