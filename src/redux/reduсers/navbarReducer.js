const initialState = [
    { id: 1, name: 'Profile', link: '/profile', icoLink: '/SidebarIcons/account-details-outline.svg' },
    { id: 2, name: 'Users', link: '/users', icoLink: '/SidebarIcons/account-multiple-outline.svg' },
    { id: 3, name: 'Messages', link: '/messages', icoLink: '/SidebarIcons/message-text-outline.svg' },
    { id: 4, name: 'Images', link: '/images', icoLink: '/SidebarIcons/image-multiple-outline.svg' },
    { id: 5, name: 'Music', link: '/music', icoLink: '/SidebarIcons/playlist-music-outline.svg' },
    { id: 6, name: 'News', link: '/news', icoLink: '/SidebarIcons/newspaper-variant-outline.svg' },
    { id: 7, name: 'Settings', link: '/settings', icoLink: '/SidebarIcons/cog-outline.svg' }
]

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer