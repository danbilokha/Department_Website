import React from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink'
import './Wrapper/Header.css';
import LocaleToggle from 'containers/LocaleToggle';
import Banner from './images/ITM_logo.gif';
import TodoList from './Lists/List';
import { topBar } from './Lists/TopBar';
import { navBar } from './Lists/NavBar';

import DropDown3 from '../DropDownMenus/DropDowns/dropdown3/dropdown3'
import DropDown4 from '../DropDownMenus/DropDowns/dropdown4/dropdown4'



function Header() {
  return (
    <div>
      <div className="TopBar">
        <div className="Logo">
          <a href="/kafedra_ITM">
            <img alt="" src={Banner} id="ITM_logo"/>
          </a>
          <HeaderLink to="/">
            <FormattedMessage id="boilerplate.components.kafedraName" /> 
          </HeaderLink>
        </div>

        <div className ="Header-list">
          <TodoList topics={topBar} />
        </div>

        <div>
          <input
            type="search"
            id="articleSearch"
            name="q"
            placeholder="article search"
          />
        </div>
        <div className="locale">
          <LocaleToggle />
        </div>
        <button href="#" className='header_button_enter'>Вхід</button>
      </div>

      <div className="NavBar">
        {/* <TodoList topics={navBar} selection /> */}
          <HeaderLink>
            <DropDown3/>
          </HeaderLink>
          <HeaderLink>
            <DropDown4/>
          </HeaderLink>
          <HeaderLink to='/'>
            <FormattedMessage id={"boilerplate.components.about"}/>
            <div className='invisiblespace'/>
          </HeaderLink>
          <HeaderLink to='/enter'>
            <FormattedMessage id={"boilerplate.components.entrance"}/> 
            <div className='invisiblespace'/>
          </HeaderLink>
          <HeaderLink to = "/teachers">
            <FormattedMessage id = "boilerplate.components.teachers"/>
            <div className='invisiblespace'/>
          </HeaderLink>
          <HeaderLink to = '/contacts'>
            <FormattedMessage id ="boilerplate.components.contacts"/>
            <div className='invisiblespace'/>
          </HeaderLink>
          
        
      </div>
    </div>
  );
}

export default Header;
