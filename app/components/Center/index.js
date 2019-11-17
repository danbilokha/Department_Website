import React from 'react';
import { FormattedMessage } from 'react-intl';
import Centermenu from './centermenu/Centermenu'
import  './index.css';
import ToDoList from './List';





function Center(){
    return(
        <div className = 'center-parent'>
            <Centermenu >
               <div className = 'center-messages'>
                    <FormattedMessage id = "boilerplate.containers.HomePage.h2"/>
                </div>
                <hr className="center-hr"/>
                <ToDoList/>
            </Centermenu>
        </div>
    );
}
export default Center;