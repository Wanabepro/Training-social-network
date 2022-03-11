import React from "react";
import NavbbarStyles from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
    let NavbarItems = props.state.map(navbarItem => <NavbarItem key={navbarItem.id} name={navbarItem.name} link={navbarItem.link} icoLink={navbarItem.icoLink} />)
    return (
        <nav className={NavbbarStyles.sidebar}>
            <ul>
                {NavbarItems}
            </ul>
        </nav>)
}

export default Navbar