import React from 'react'
import MenuItem from './MenuItem'

const Menu = (props) => {
    const {menus, menuItemClick} = props
    return (
        <div className="xui-menu" id="main-menu">
            <ul className="xui-menu-list">
                {menus.map((item, i)=>(
                    <MenuItem 
                        key={i}
                        link={item.link} 
                        title={item.title}
                        openNewTab={item.openNewTab}
                        menuItemClick={menuItemClick}
                    >
                    </MenuItem>
                ))}
            </ul>
        </div>
    )
}

export default Menu 