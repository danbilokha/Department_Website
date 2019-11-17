import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Wrapper/Header.css';
import LocaleToggle from 'containers/LocaleToggle';
import HeaderLink from './HeaderLink';
import Banner from './images/ITM_logo.gif';
import TodoList from './Lists/List';
import { topBar } from './Lists/TopBar';
import { navBar } from './Lists/NavBar';

function Header() {
  return (
    <div>
      <div className="TopBar">
        <div className="Logo">
          <a href="/kafedra_ITM">
            <img alt="" src={Banner} id="ITM_logo"/>
          </a>
          <HeaderLink to="/kafedra_ITM">
            <FormattedMessage id="boilerplate.components.kafedraName" /> 
          </HeaderLink>
        </div>

        <div>
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
        <button href="#">Вхід</button>
      </div>

      <div className="NavBar">
        <TodoList topics={navBar} selection />
      </div>
    </div>
  );
}

export default Header;
