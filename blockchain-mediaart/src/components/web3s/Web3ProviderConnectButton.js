import React, { useCallback } from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

// const infuraProjectId = 'a016e377bb334720aabe9925e35f4184';

export default function Web3ProviderConnectButton() {
  const web3Context = useWeb3();
  return (
    <div className="provider">
      <h1>Infura React Dapp with Components!</h1>
      <Web3Data title="Web3 Data" web3Context={web3Context} />
    </div>
  );
}

function Web3Data(props) {
  const { web3Context } = props;
  const { networkId, networkName, accounts, providerName } = web3Context;
  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
    } catch (e) {
      console.error(e);
    }
  };

  const requestAccess = useCallback(() => requestAuth(web3Context), []);

  return (
    <div>
      <div>
        Your address: {accounts && accounts.length ? accounts[0] : 'Unknown'}
      </div>
      <div>
        Provider: {providerName} & Network id, name: {networkId}, {networkName}
      </div>

      {accounts && accounts.length ? (
        <div>
          web3 프로바이더에 연결되었습니다
        </div>
      ) : !!networkId ? (
        <div>
          <button onClick={requestAccess}>Request Access</button>
        </div>
      ) : (
            <div></div>
          )}
    </div>
  );
}
