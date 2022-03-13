import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from './../../redux/reduсers/usersReducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChange(page) {
        this.props.setCurrentPage(Number(page))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    render() {
        return <Users users={this.props.users}
            count={this.props.count}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange.bind(this)}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: id => dispatch(followAC(id)),
        unfollow: id => dispatch(unfollowAC(id)),
        setUsers: users => dispatch(setUsersAC(users)),
        setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: totalCount => dispatch(setTotalCountAC(totalCount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) 