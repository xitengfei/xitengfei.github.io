import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import './Xui.css';
import data from './data/data'
import Menu from './components/Menu'
import Tools from './components/tools/Tools'

import HomeCard from './components/cards/HomeCard'
import ResumeCard from './components/cards/ResumeCard'
import SkillsCard from './components/cards/SkillsCard'
import CasesCard from './components/cards/CasesCard'
import ContactCard from './components/cards/ContactCard'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      activePageHash: Tools.getUrlHash(window.location.href)
    }

    this.menuItemClick = this.menuItemClick.bind(this)
  }

  menuItemClick(ev){
    this.setState({
      activePageHash: Tools.getUrlHash(ev.target.href)
    })
  }

  render() {
    let bodyClass = this.state.activePageHash === '' || this.state.activePageHash === "home" ? '':'wide-view'
    return (
      <section id="body" className={bodyClass} >
        <div className="xui-container">
          <Menu 
            menus={data.menus}
            menuItemClick={this.menuItemClick}
          ></Menu>
          <HomeCard isActive={ "home-card" === this.state.activePageHash ? true : false } />
          <ResumeCard isActive={ "resume-card" === this.state.activePageHash ? true : false } />
          <SkillsCard isActive={ "skills-card" === this.state.activePageHash ? true : false } />
          <CasesCard isActive={ "case-card" === this.state.activePageHash ? true : false } />
          <ContactCard isActive={ "contact-card" === this.state.activePageHash ? true : false } />
        </div>
      </section>
    );
  }
}

export default App;
