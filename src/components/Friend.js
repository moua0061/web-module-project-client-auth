import React from 'react';

const Friend = (props)=>{

    // console.log(props);

    return(
        <div> 
            <ul>
                <li>
                    <p>{props.friend.name}</p>
                    <p>{props.friend.email}</p>
                </li>
            </ul>
        </div>
    )
}

export default Friend;