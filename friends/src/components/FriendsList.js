import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get('/api/friends', {
                headers: {
                    authorization: token
                }
            })
            .then (res => {
                console.log(res);
                this.setState({friends: res.data})
            })
            .catch(err => console.log(err));
    }

    render() {        
        return (
            <div>
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <h3>{friend.name}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;