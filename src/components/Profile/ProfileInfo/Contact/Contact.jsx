import React from "react";
import styles from './Contact.module.css'

import vkIcon from './../../../../Icons/SocialNetworksIcons/vk.svg'
import twitterIcon from './../../../../Icons/SocialNetworksIcons/twitter.svg'
import instagramIcon from './../../../../Icons/SocialNetworksIcons/instagram.svg'
import githubIcon from './../../../../Icons/SocialNetworksIcons/github.svg'
import facebookIcon from './../../../../Icons/SocialNetworksIcons/facebook.svg'
import youtubeIcon from './../../../../Icons/SocialNetworksIcons/youtube.svg'
import landingIcon from './../../../../Icons/SocialNetworksIcons/application-outline.svg'
import mainIcon from './../../../../Icons/SocialNetworksIcons/web.svg'

const VK = 'vk'
const TWITTER = 'twitter'
const INSTAGRAM = 'instagram'
const GITHUB = 'github'
const FACEBOOK = 'facebook'
const YOUTUBE = 'youtube'
const LANDING = 'website'
const MAIN = 'mainLink'

const SocialNetworcIconSwitcher = socialNetworkName => {
    switch (socialNetworkName) {
        case VK:
            return vkIcon
        case TWITTER:
            return twitterIcon
        case INSTAGRAM:
            return instagramIcon
        case GITHUB:
            return githubIcon
        case FACEBOOK:
            return facebookIcon
        case YOUTUBE:
            return youtubeIcon
        case LANDING:
            return landingIcon
        case MAIN:
            return mainIcon
        default: return
    }
}


const Contact = ({ socialNetworkName, link }) => {
    return (
        <div className={styles.contact}>
            <a href={link.startsWith('http') ? link : `http://${link}`} target='_blank' rel="noopener noreferrer">
                <img src={SocialNetworcIconSwitcher(socialNetworkName)} alt={socialNetworkName} />
            </a>
        </div>
    )
}

export default Contact