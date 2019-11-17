import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Wrapper/Header.css';
import LocaleToggle from 'containers/LocaleToggle';
import HeaderLink from './HeaderLink';
import Banner from './its_48u.png';
import TodoList from './Lists/List';
import { topBar } from './Lists/TopBar';
import { navBar } from './Lists/NavBar';

function Header() {
  return (
    <div>
      <div className="TopBar">
        <div className="Logo">
          <a href="#">
            <img src={Banner} />
          </a>
          <HeaderLink to="/teachers">
            <FormattedMessage id="boilerplate.components.instituteName" />
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
        <button href="">Вхід</button>
      </div>

      <div className="NavBar">
        <TodoList topics={navBar} selection />
      </div>
    </div>
  );
}

export default Header;
