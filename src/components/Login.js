import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const {push} = useHistory();

    const [state, setState] = useState({});

    const handleChange = (event)=>{
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log(state);
        axios.post('http://localhost:9000/api/login', state)
            .then(resp => {
                // console.log(resp);
                const token = resp.data.token;
                const username = resp.data.username;
                const role = resp.data.role
                localStorage.setItem("token", token)
                localStorage.setItem("username", username)
                localStorage.setItem("role", role)
                window.location.href='/friendlist';
                // push('/friendlist');
            })
            .catch(err => {
                console.log(err);
            })
    }

    // console.log(state);

    return(
        <div className='login-card'>
            <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username &nbsp;</label>
                    <input 
                    type='text'
                    name='username'
                    onChange={handleChange}
                    value={state.username}
                    
                    />
                    <label>Password &nbsp;</label>
                    <input 
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={state.password}
                    />
                    <button>Submit</button>
                </form>
        </div>
    );
}

export default Login;