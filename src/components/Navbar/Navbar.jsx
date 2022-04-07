import React from "react";
import NavbbarStyles from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';
import { connect } from 'react-redux';

import profileIcon from './../../Icons/SidebarIcons/account-details-outline.svg'
import usersIcon from './../../Icons/SidebarIcons/account-multiple-outline.svg'
import messagesIcon from './../../Icons/SidebarIcons/message-text-outline.svg'
import imagesIcon from './../../Icons/SidebarIcons/image-multiple-outline.svg'
import musicIcon from './../../Icons/SidebarIcons/playlist-music-outline.svg'
import newsIcon from './../../Icons/SidebarIcons/newspaper-variant-outline.svg'
import settingsIcon from './../../Icons/SidebarIcons/cog-outline.svg'

const Navbar = props => {
    const items = [
        { id: 'mainNav1', name: 'Profile', link: `/profile/${props.authUserID}`, icon: profileIcon },
        { id: 'mainNav2', name: 'Users', link: '/users', icon: usersIcon },
        { id: 'mainNav3', name: 'Messages', link: '/messages', icon: messagesIcon },
        { id: 'mainNav4', name: 'Images', link: '/images', icon: imagesIcon },
        { id: 'mainNav5', name: 'Music', link: '/music', icon: musicIcon },
        { id: 'mainNav6', name: 'News', link: '/news', icon: newsIcon },
        { id: 'mainNav7', name: 'Settings', link: '/settings', icon: settingsIcon }
    ]

    const NavbarItems = items.map(navbarItem =>
        <NavbarItem key={navbarItem.id} name={navbarItem.name} link={navbarItem.link} icon={navbarItem.icon} />)

    return (
        <nav className={NavbbarStyles.sidebar}>
            <ul>
                {NavbarItems}
            </ul>
        </nav>)
}

const mapStateToProps = state => ({
    authUserID: state.auth.id
})

export default connect(mapStateToProps, {})(Navbar)