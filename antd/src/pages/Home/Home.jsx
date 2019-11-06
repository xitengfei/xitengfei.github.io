import React from 'react';

import Menu from './components/Menu'
import HomeCard from './components/cards/HomeCard'
import ResumeCard from './components/cards/ResumeCard'
import SkillsCard from './components/cards/SkillsCard'
import CasesCard from './components/cards/CasesCard'
import ContactCard from './components/cards/ContactCard'

import Tools from '@/tools/tools'
import './Home.css';
import './Xui.css';

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            activePageHash: Tools.getUrlHash(window.location.href)
        }

        this.menuItemClick = this.menuItemClick.bind(this)
    }

    menuItemClick(ev) {
        if(ev.target.href.indexOf(window.location.origin) > -1){
            ev.preventDefault();
        }
        
        this.setState({
            activePageHash: Tools.getUrlHash(ev.target.href)
        })
    }

    render() {
        const {menu, profile} = this.props;
        const {activePageHash} = this.state;
        let mainClass = (activePageHash === '' || activePageHash === "home") ? '' : 'wide-view'
        return (
            <div className="page-home">
                <main className={mainClass}>
                    <div className="xui-container">
                        <Menu
                            menus={menu.menus}
                            menuItemClick={this.menuItemClick}
                        ></Menu>
                        <HomeCard isActive={"home-card" === activePageHash ? true : false} />
                        <ResumeCard isActive={"resume-card" === activePageHash ? true : false} />
                        <SkillsCard
                            isActive={"skills-card" === activePageHash ? true : false}
                            skills={profile.skills}
                        />
                        <CasesCard 
                            isActive={"case-card" === activePageHash ? true : false}
                            cases={profile.cases}
                        />
                        <ContactCard isActive={"contact-card" === activePageHash ? true : false} />
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
