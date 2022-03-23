import React from "react";
import ProfileStatusStyles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        isEdit: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    toggleEdit = (nowEdit) => {
        this.setState({ isEdit: nowEdit })
        if (!nowEdit) { this.props.updateStatus(this.state.status) }
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }

    render() {
        return <>
            {this.state.isEdit
                ? <input autoFocus={true} onBlur={() => this.toggleEdit(false)} onChange={this.onStatusChange} value={this.state.status} />
                : <span onClick={() => this.toggleEdit(true)}>{this.props.status || 'Добавьте статус'}</span>
            }
        </>
    }
}

export default ProfileStatus