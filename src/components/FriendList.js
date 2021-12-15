import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosWithAuth from './../utils/axiosWithAuth';
import Friend from './Friend';

const FriendList = ()=>{

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        axiosWithAuth()
        .get('/friends')
        .then(resp => {
            setFriends(resp.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return(
        <div> 
            <h2>Here are my freakin' awesome friends!</h2>
            {
                friends.map(friend => (
                    <Friend friend={friend} key={friend.id}/>
                ))
            }
        </div>
    )
}

export default FriendList;
