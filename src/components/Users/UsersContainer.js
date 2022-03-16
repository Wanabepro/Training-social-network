import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setCurrentPage, getUsers, followUser, unfollowUser } from './../../redux/reduсers/usersReducer';
import Preloader from './../../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count)
    }

    onPageChange(page) {
        this.props.getUsers(page, this.props.count)
        this.props.setCurrentPage(Number(page))
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader />
                : <Users users={this.props.users}
                    count={this.props.count}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange.bind(this)}
                    followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    isLoading={this.props.isLoading}
                    isFollowing={this.props.isFollowing}
                />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps,
    { followUser, unfollowUser, setCurrentPage, getUsers })
    (UsersContainer) 
