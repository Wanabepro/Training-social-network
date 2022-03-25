import React from "react";
import User from './User/User';
import Paginator from '../../Common/Paginator/Paginator';

const Users = props => {
    return (
        <div>
            <Paginator totalCount={props.totalCount} count={props.count} currentPage={props.currentPage} onPageChange={props.onPageChange} />

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