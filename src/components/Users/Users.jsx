import React from "react";
import usersStyles from "./Users.module.css"

const Users = (props) => {
    debugger
    return (
        <div>
            {props.users.map(user => {
                return(
                <div className={usersStyles.container}>
                    <div className={usersStyles.left}>
                        <div className={usersStyles.avatar}>
                            <img src="#s" alt="avatar" />
                        </div>
                        <div className={usersStyles.Button}>
                            {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={usersStyles.info}>
                        <h2>{user.name}</h2>
                        <p>{user.status}</p>
                    </div>
                    <div className={usersStyles.citi}>
                        <p>Страна,<br />Город</p>
                    </div>
                </div>
                )
            }
            )
            }
        </div>
    )
}

export default Users