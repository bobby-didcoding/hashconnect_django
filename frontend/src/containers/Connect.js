import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { pairHashpack, authenticateUser } from '../actions/hashconnect';

function Connect() {
    const [pairingString, setPairingString] = useState('')
    return (
    
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Welcome to Auth System!</h1>
            <p className='lead'>Lets get your Hedera wallet connected!</p>
            <hr className='my-4' />
            <p id='accountid'></p>
                {
                pairingString &&
                <>
                    <h1>Pairing string</h1>
                    <p>{pairingString}</p>
                </>
                }
                <button onClick={async () => {
                const saveData = await pairHashpack()
                setPairingString(saveData.pairingString)
                }}>Pair wallet
                </button>
        </div>
    </div>
);
}

export default Connect;
