import React from "react";
import usersStyles from "./Users.module.css"
import User from './User/User';

const Users = (props) => {
    const portionSize = 25
    const portionsCount = Math.ceil(props.totalCount / props.count / portionSize)
    const currentPortion = Math.ceil(props.currentPage / portionSize)
    const leftPortionLim = (currentPortion - 1) * portionSize + 1
    const rightPortionLim = (currentPortion * portionSize * props.count) > props.totalCount
        ? Math.ceil(props.totalCount / props.count)
        : currentPortion * portionSize

    let pages = []
    for (let i = leftPortionLim; i <= rightPortionLim; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={usersStyles.portionsInfo}>{`${currentPortion}/${portionsCount}`}</div>
            <div className={usersStyles.pagination}>
                <div
                    className={`${usersStyles.left} ${usersStyles.Arrow} ${currentPortion === 1
                        ? usersStyles.inactiveArrow
                        : undefined
                        }`}
                    onClick={currentPortion === 1
                        ? undefined
                        : () => { props.onPageChange((currentPortion - 1) * portionSize) }}
                ></div>

                {pages.map(page => {
                    return <div
                        key={page}
                        className={`${usersStyles.page} ${(props.currentPage === Number(page)) ? usersStyles.selected : undefined}`}
                        onClick={() => { props.onPageChange(page) }}
                    >
                        {page}
                    </div>
                })}

                <div
                    className={`${usersStyles.right} ${usersStyles.Arrow} ${currentPortion === portionsCount
                        ? usersStyles.inactiveArrow
                        : undefined
                        }`}
                    onClick={currentPortion === portionsCount
                        ? undefined
                        : () => { props.onPageChange(currentPortion * portionSize + 1) }}
                ></div>
            </div>

            {props.users.map(user => {
                return <User
                    key={user.id}
                    user={user}
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}
                    isFollowing={props.isFollowing}
                />
            })}
        </div>
    )
}

export default Users