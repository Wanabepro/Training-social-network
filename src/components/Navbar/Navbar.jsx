import React from "react";
import NavbbarStyles from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem';
import { connect } from 'react-redux';

const Navbar = props => {
    const items = [
        { id: 1, name: 'Profile', link: `/profile/${props.authUserID}`, icoLink: '/SidebarIcons/account-details-outline.svg' },
        { id: 2, name: 'Users', link: '/users', icoLink: '/SidebarIcons/account-multiple-outline.svg' },
        { id: 3, name: 'Messages', link: '/messages', icoLink: '/SidebarIcons/message-text-outline.svg' },
        { id: 4, name: 'Images', link: '/images', icoLink: '/SidebarIcons/image-multiple-outline.svg' },
        { id: 5, name: 'Music', link: '/music', icoLink: '/SidebarIcons/playlist-music-outline.svg' },
        { id: 6, name: 'News', link: '/news', icoLink: '/SidebarIcons/newspaper-variant-outline.svg' },
        { id: 7, name: 'Settings', link: '/settings', icoLink: '/SidebarIcons/cog-outline.svg' }
    ]

    const NavbarItems = items.map(navbarItem =>
        <NavbarItem
            key={navbarItem.id}
            name={navbarItem.name}
            link={navbarItem.link}
            icoLink={navbarItem.icoLink}
        />)

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