import React from "react";
import usersStyles from "./Users.module.css"
import User from './User/User';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(`${i} `)
    }

    return (
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === Number(page) && usersStyles.selected} onClick={() => { props.onPageChange(page) }} key={page}>{page}</span>
            })}

            {props.users.map(user => {
                return <User user={user}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            })}
        </div>
    )
}

export default Users