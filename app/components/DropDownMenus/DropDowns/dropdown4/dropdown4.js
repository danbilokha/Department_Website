import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'
import { Link } from 'react-router-dom';


export default function DropDown4(props){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink to={props.to}>
                    <FormattedMessage id={"boilerplate.components.scientificWork"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <Link to='/'>
                    <FormattedMessage id={"boilerplate.components.scientificWork.publications"}/> 
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.training"}/>
                </Link>
                <Link to='/conferences'>
                    <FormattedMessage id={"boilerplate.components.scientificWork.Participation"}/> 
               </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.Master_works"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.defendedPresentations"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.scientificWork.NDCMD"}/>
                </Link>
            </div>
        </div>
    )
}