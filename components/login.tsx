'use client'

import React from 'react'
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {chain, client} from '../utils/constants'

const Login = () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ConnectButton client={client} chain={chain} />

    </div>
  )
}

export default Login