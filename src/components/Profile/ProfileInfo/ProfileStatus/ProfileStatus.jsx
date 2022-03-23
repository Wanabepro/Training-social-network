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
                : <span onClick={() => toggleIsEdit(true)}>
                    {props.status || 'Добавьте статус'}
                </span>
            }
        </>
    )
}

export default ProfileStatus