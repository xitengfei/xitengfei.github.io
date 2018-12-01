import React from 'react';
import data from '../../data/menu'
import Menu from '../../components/Menu'
import Tools from '../../components/tools/Tools'

import HomeCard from '../../components/cards/HomeCard'
import ResumeCard from '../../components/cards/ResumeCard'
import SkillsCard from '../../components/cards/SkillsCard'
import CasesCard from '../../components/cards/CasesCard'
import ContactCard from '../../components/cards/ContactCard'

import './Home.css';

class Home extends React.Component {
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
    let mainClass = this.state.activePageHash === '' || this.state.activePageHash === "home" ? '':'wide-view'
    return (
        <main className={mainClass}>
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
        </main>
    );
  }
}

export default Home;
