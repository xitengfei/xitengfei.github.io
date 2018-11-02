import React from 'react'

const Menu = (props) => {
    const {link, title, openNewTab} = props
    return (
        <li className="xui-menu-item">
            <a 
                href={link}
                onClick={props.menuItemClick}
            >{title}</a>
        </li>
    )
}

export default Menu 