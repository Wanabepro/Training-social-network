import React from "react";
import NavbbarStyles from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = () => {
    return (
        <nav className={NavbbarStyles.sidebar}>
            <ul>
                <NavbarItem name='Profile' link='/profile' icoLink='/SidebarIcons/account-details-outline.svg' />
                <NavbarItem name='Messages' link='/messages' icoLink='SidebarIcons/message-text-outline.svg' />
                <NavbarItem name='Images' link='/images' icoLink='SidebarIcons/image-multiple-outline.svg' />
                <NavbarItem name='Music' link='/music' icoLink='SidebarIcons/playlist-music-outline.svg' />
                <NavbarItem name='News' link='/news' icoLink='SidebarIcons/newspaper-variant-outline.svg' />
                <NavbarItem name='Settings' link='/settings' icoLink='SidebarIcons/cog-outline.svg' />
            </ul>
        </nav>)
}

export default Navbar