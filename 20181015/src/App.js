import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import './Xui.css';
import data from './data/data'
import Menu from './components/Menu'
import HomeCard from './components/cards/HomeCard'
import ResumeCard from './components/cards/ResumeCard'
import SkillsCard from './components/cards/SkillsCard'

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
    let hash = link.slice(link.indexOf('#')+1);
    this.setState({
      activePageHash: hash
    })
  }

  render() {
    return (
      <section id="body" className={this.state.activePageHash == '' ? '':'wide-view'} >
        <div className="xui-container">
          <Menu 
            menus={data.menus}
            menuItemClick={this.menuItemClick}
          ></Menu>
          <HomeCard
            id="home-card"
            classes="profile-card"
            isActive={ "home-card" == this.state.activePageHash ? true : false }
          ></HomeCard>
          <ResumeCard
            isActive={ "resume-card" == this.state.activePageHash ? true : false }
          ></ResumeCard>
          <SkillsCard
            isActive={ "skills-card" == this.state.activePageHash ? true : false }
          ></SkillsCard>
        </div>
      </section>
    );
  }
}

export default App;
