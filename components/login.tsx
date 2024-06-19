'use client'

import React from 'react';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { chain, client } from '../utils/constants';
import Counter from './counter';

const Login = () => {
    const account = useActiveAccount();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ marginTop: '20px' }}>
                <ConnectButton
                    client={client}
                    chain={chain}
                    connectModal={{ size: 'compact' }}
                />
                {account ? <Counter /> : null}
            </div>
        </div>
    );
}

export default Login;
