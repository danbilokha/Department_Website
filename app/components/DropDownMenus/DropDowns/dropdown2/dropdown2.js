import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'
import { Link } from 'react-router-dom';



export default function DropDown2(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.entrance"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <Link to='/enter'>
                    <FormattedMessage id={"boilerplate.components.entrance.bakalavrat"} />
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.magistratura"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.aspirantura"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.documents"}/>
                </Link>
               <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.institute_contacts"}/>
                </Link>
                
            </div>
        </div>
    )
}