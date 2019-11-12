import React, { Component } from 'react';
import './index.css'
import { FormattedMessage } from 'react-intl';

const topics = [
  { id: 'about', title: 'about', link: '/' },
  { id: 'entrance', title: 'entrance', link: '/' },
  { id: 'studing', title: 'studing', link: '/' },
  { id: 'scientificWork', title: 'scientificWork', link: '/' },
  { id: 'diploma', title: 'diploma', link: '/' },
  { id: 'deansOffice', title: 'deansOffice', link: '/' },
  { id: 'departments', title: 'departments', link: '/' },
  { id: 'usefulLinks', title: 'usefulLinks', link: '/' },
];

export default class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.showMenu} >
            <FormattedMessage id='boilerplate.components.about'/>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> 
                  <FormattedMessage id='boilerplate.components.about'/>
                </button>
                <button> 
                  ПАРТНЕРИ
                </button>
                <button> 
                   КОНТАКТИ
                </button>
                <button> 
                  ДОШКА ПОШАНИ
                </button>
                <button> 
                  ФОТОГАЛЕРЕЯ
                </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}