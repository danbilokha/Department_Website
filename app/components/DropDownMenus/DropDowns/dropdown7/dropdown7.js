import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown7   (){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.departments"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.departments.TK"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.departments.TC"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.departments.ITM"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.academicCouncil"}/>
                </a>
                
            </div>
        </div>
    )
}