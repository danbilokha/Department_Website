import React from 'react'
import '../../index.css'
import { FormattedMessage } from 'react-intl'
import HeaderLink from '../../../Header/HeaderLink'
import { Link } from 'react-router-dom';



export default function DropDown2(props){
    return(
        <div class="abc">
            <button class="dropbtn">
                <HeaderLink to = {props.to}>
                    <FormattedMessage id={"boilerplate.components.entrance"}/>
                    <div className ="drptringledown"/>
                </HeaderLink>
            </button>
            <div class="dropdown-content">
                <Link to='/enter'>
                    <FormattedMessage id={"boilerplate.components.entrance.newForEnterer"} />
                </Link>
                <Link to='/educational_program'>
                    <FormattedMessage id ={"boilerplate.components.entrance.learningProgram"}/>
                </Link>
                <Link to='/entry_for_first_course'>
                    <FormattedMessage id ={"boilerplate.components.entrance.entryFor1"}/>
                </Link>
                <Link to='/entry_for_fifth_course'>
                    <FormattedMessage id ={"boilerplate.components.entrance.entryFor5"}/>
                </Link>
               <Link to='/doctor_of_philosophy'>
                    <FormattedMessage id ={"boilerplate.components.entrance.doctorPhilosophii"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.officialDocuments"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.contactsOfcomisii"}/>
                </Link>
                <Link to='/'>
                    <FormattedMessage id ={"boilerplate.components.entrance.listOfToEnter"}/>
                </Link>
                
            </div>
        </div>
    )
}