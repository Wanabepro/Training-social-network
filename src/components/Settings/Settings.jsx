import React, { useState } from "react";
import NavbarItem from './../Navbar/NavbarItem/NavbarItem';
import styles from './Settings.module.css'
import PersonalData from './PersonalData/PersonalData';
// import General from "./General/General";
import { Route, useParams, Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const Settings = () => {
    let [isActive, toggleActive] = useState(false)

    const spoilerOnClick = () => {
        if (isActive) return toggleActive(false)
        return toggleActive(true)
    }

    const activeStyleSetter = isActive => isActive ? ` ${styles.active}` : ''
    const activeArrowStyleSetter = isActive => isActive ? ` ${styles.activeArrow}` : ''

    const items = [
        // { id: 'settings1', name: 'General', link: `/settings/general`, icon: null },
        { id: 'settings2', name: 'Personal data', link: `/settings/personalData`, icon: null },
    ]


    if (!useParams().settingName) return <Redirect to={items[0].link} />
    return (
        <div className={styles.container}>
            <div className={styles.spoiler}>
                <div className={styles.spoilerButton} onClick={spoilerOnClick}>
                    <div className={styles.arrow + activeArrowStyleSetter(isActive)}></div>
                    <div className={styles.buttonText}>Settings</div>
                </div>
                <div className={styles.spoilerSettings + activeStyleSetter(isActive)}>
                    <nav>
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
            </div>

            <div className={styles.content}>
                {/* <Route path={`/settings/general`} render={() => <General />} /> */}
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