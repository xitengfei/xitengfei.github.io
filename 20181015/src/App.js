import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css';
import './App.css';
import './Xui.css';
import data from './data/data'
import Menu from './components/Menu'

import HomeCard from './components/cards/HomeCard'
import ResumeCard from './components/cards/ResumeCard'
import SkillsCard from './components/cards/SkillsCard'
import CasesCard from './components/cards/CasesCard'
import ContactCard from './components/cards/ContactCard'

class App extends Component {
  constructor(){
    super()

    this.state = {
      activePageHash:''
    }

    this.menuItemClick = this.menuItemClick.bind(this)
  }

  menuItemClick(ev){
    let link = ev.target.href
    let hash = link.indexOf('#') > -1 ? link.slice(link.indexOf('#')+1) : "";
    this.setState({
      activePageHash: hash
    })
    console.log(hash)
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
