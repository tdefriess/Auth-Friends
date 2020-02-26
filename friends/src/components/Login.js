import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading: true})
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                this.setState({...this.state, isLoading: false})
                window.localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log('Could not login', err);
                this.setState({...this.state, isLoading: false})
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                    <p>{this.isLoading ? 'Loading' : ''}</p>
                </form>
            </div>
        )
    }
}

export default Login;