import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown2(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.entrance"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.entrance.bakalavrat"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.entrance.magistratura"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.entrance.aspirantura"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.entrance.documents"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.entrance.institute_contacts"}/>
                </a>
            </div>
        </div>
    )
}