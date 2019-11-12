import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown3(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.studing"}/>
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
                    <FormattedMessage id={"boilerplate.components.studing.doctor_of_philosofic"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.studing.subjects"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.studing.learn_plans"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.studing.work_on_diploma"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.archieve"}/> 
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.double_diploma"}/> 
                </a>
                
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.learn_after_diploma"}/> 
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.studing.gurtki"}/> 
                </a>
            </div>
        </div>
    )
}