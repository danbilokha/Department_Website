import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'



export default function DropDown4(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink >
                    <FormattedMessage id={"boilerplate.components.scientificWork"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <a>
                    <FormattedMessage id={"boilerplate.components.scientificWork.publications"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.training"}/>
                </a>
                <a>
                    <FormattedMessage id={"boilerplate.components.scientificWork.Participation"}/> 
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.Master_works"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.defendedPresentations"}/>
                </a>
                <a>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.NDCMD"}/>
                </a>
            </div>
        </div>
    )
}