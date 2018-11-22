import React from 'react'

const Menu = (props) => {
    const {link, title, openNewTab} = props
    return (
        <li className="xui-menu-item">
            <a 
                href={link}
                onClick={props.menuItemClick}
                target={openNewTab ? '_blank' : '_self' }
            >{title}</a>
        </li>
    )
}

export default Menu 