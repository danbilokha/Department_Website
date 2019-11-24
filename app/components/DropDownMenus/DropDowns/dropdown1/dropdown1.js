import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'
import { Link } from 'react-router-dom'




export default function DropDown1(props){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink to={props.to}>
                    <FormattedMessage id={"boilerplate.components.about"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <Link to='/history'>
                    <FormattedMessage id={"boilerplate.components.about.history"}/>
                </Link>
                <Link to='/donators'>
                    <FormattedMessage id ={"boilerplate.components.about.partners"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.about.speciality"}/>
                </Link>
           </div>
        </div>
    )
}