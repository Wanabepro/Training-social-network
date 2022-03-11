import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from './../../redux/reduсers/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: id => dispatch(followAC(id)),
        unfollow: id => dispatch(unfollowAC(id)),
        setUSers: () => dispatch(setUsersAC),
    }    
}
let UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)
export default UsersContainer