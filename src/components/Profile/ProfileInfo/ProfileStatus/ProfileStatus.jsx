import React, { useEffect, useState } from "react";
import ProfileStatusStyles from './ProfileStatus.module.css'

const ProfileStatus = props => {
    let [isEdit, toggleIsEdit] = useState(false)
    let [status, changeStatus] = useState(props.status)
    useEffect(() => changeStatus(props.status), [props.status])

    return (
        <>
            {isEdit
                ? <input
                    autoFocus={true}
                    onBlur={() => {
                        toggleIsEdit(false)
                        props.updateStatus(status)
                    }}
                    onChange={(e) => changeStatus(e.currentTarget.value)}
                    value={status}
                />
                : <span className={props.authorizedUserProfile ? ProfileStatusStyles.authorized : undefined} 
                        onClick={props.authorizedUserProfile ? () => toggleIsEdit(true) : undefined}>
                    {props.status || 'Добавьте статус'}
                </span>
            }
        </>
    )
}

export default ProfileStatus