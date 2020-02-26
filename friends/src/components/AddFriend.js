import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        newFriend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                id: Date.now()
            }
        })
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .post('/api/friends', this.state.newFriend)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='age'
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='email'
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                />
                <button>Add Friend</button>
            </form>
        )
    }
}