import React from 'react';

import { useWeb3 } from '@openzeppelin/network/react';

const infuraProjectId = 'a016e377bb334720aabe9925e35f4184';

function Provider() {
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
  const { networkId, networkName, providerName } = web3Context;

  return (
    <div className="provider">
      <div>
        <h1>블록체인 미디어아트</h1>
        <div>
          Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
        </div>
        <div>
          Provider: {providerName}
        </div>
      </div>
    </div>
  );
}

export default Provider;