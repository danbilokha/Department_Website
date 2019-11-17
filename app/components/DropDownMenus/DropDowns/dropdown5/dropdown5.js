import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown4(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.diploma"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.work_on_diploma"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.studing.archieve"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.double_diploma"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.studing.learn_after_diploma"}/>
                </a>
                
            </div>
        </div>
    )
}