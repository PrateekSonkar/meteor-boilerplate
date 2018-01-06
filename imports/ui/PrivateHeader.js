import React from 'react';
import {Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    
    return (
        <div>
            <h1>{props.title ? props.title : 'Your Links'}</h1>
            <button onClick={()=>{Accounts.logout()}}>Logout</button>
        </div>
    )
}

export default PrivateHeader;

// PropType