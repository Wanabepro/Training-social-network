import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading, toggleFollowing } from './../../redux/reduсers/usersReducer';
import { usersAPI } from './../../api/api';
import Preloader from './../../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.count).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
        this.props.toggleLoading(false)
    }

    onPageChange(page) {
        this.props.toggleLoading(true)
        usersAPI.getUsers(Number(page), this.props.count).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
        this.props.setCurrentPage(Number(page))
        this.props.toggleLoading(false)
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader />
                : <Users users={this.props.users}
                    count={this.props.count}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange.bind(this)}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isLoading={this.props.isLoading}
                    isFollowing={this.props.isFollowing}
                    toggleFollowing={this.props.toggleFollowing}
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

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleLoading, toggleFollowing })(UsersContainer) 
