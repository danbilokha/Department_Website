import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown4(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.deansOffice"}/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.deansOffice.information"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.deansOffice.structure"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.deansOffice.academic_groups"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.deansOffice.questions"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.deansOffice.Student_achievements"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.deansOffice.DayLearningInformation"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.deansOffice.NightLearningInformation"}/>
                </a>
                
            </div>
        </div>
    )
}