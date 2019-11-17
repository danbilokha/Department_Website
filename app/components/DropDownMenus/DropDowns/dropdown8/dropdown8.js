import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown3(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.usefulLinks"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.usefulLinks.news"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.univercity"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.contacts"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.magazine"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.conferences"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.workForStudents"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.graduates"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.usefulLinks.companies"}/> 
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.usefulLinks.Community_Centers"}/> 
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.usefulLinks.hostels"}/> 
                </a>
            </div>
        </div>
    )
}