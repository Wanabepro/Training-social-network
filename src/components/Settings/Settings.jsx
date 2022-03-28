import React from "react";
import NavbarItem from './../Navbar/NavbarItem/NavbarItem';
import styles from './Settings.module.css'
import PersonalData from './PersonalData/PersonalData';
import General from "./General/General";
import { Route, useParams, Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const Settings = () => {
    const items = [
        // { id: 'settings1', name: 'General', link: `/settings/general`, icon: null },
        { id: 'settings2', name: 'Personal data', link: `/settings/personalData`, icon: null },
    ]

    if (!useParams().settingName) return <Redirect to={items[0].link} />
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Route path={`/settings/general`} render={() => <General />} />
                <Route path={`/settings/personalData`} render={() => <PersonalData />} />
            </div>
            <nav className={styles.settingsNav}>
                {items.map(navbarItem => {
                    return (
                        <NavbarItem
                            key={navbarItem.id}
                            name={navbarItem.name}
                            link={navbarItem.link}
                            icon={navbarItem.icon}
                        />
                    )
                })}
            </nav>
        </div>
    )
}

export default withAuthRedirect(Settings)