import React, {useState} from 'react';

import axiosWithAuth from './../utils/axiosWithAuth';

const FriendList = ()=>{

    const initialValues = {
        name: '',
        age: '',
        email: ''
    }

    const [values, setValues] = useState(initialValues);

    const handleChange = (event)=>{
        
        setValues({...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        axiosWithAuth()
        .post('/friends', values)
        .then(resp =>{
            window.location.href='/friendlist';
        })
        .catch(err=> {
            console.log(err);
        })
    }

    return(
        <div className='newFriend-card'>
            <form onSubmit={handleSubmit}>
                <label>Friend Name: </label>
                <input 
                type='text'
                value={values.name}
                name='name'
                onChange={handleChange}
                />
                <label>Friend Email</label>
                <input 
                type='text'
                value={values.email}
                name='email'
                onChange={handleChange}
                />
                <label>Age</label>
                <input 
                type='text'
                value={values.age}
                name='age'
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default FriendList;