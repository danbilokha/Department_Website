import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'
import { Link } from 'react-router-dom';


export default function DropDown3(){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink>
                    <FormattedMessage id={"boilerplate.components.studing"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.entrance.bakalavrat"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.magistratura"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.studing.doctor_of_philosofic"}/> 
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.studing.subjects"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.studing.learn_plans"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.studing.work_on_diploma"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.studing.archieve"}/> 
                </Link>
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.studing.double_diploma"}/> 
                </Link>
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.studing.learn_after_diploma"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.studing.gurtki"}/> 
                </Link>
            </div>
        </div>
    )
}