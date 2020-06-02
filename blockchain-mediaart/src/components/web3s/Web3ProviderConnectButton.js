import React, { useCallback } from 'react';
import { useWeb3 } from '@openzeppelin/network/react';

export default function Web3ProviderConnectButton() {
  const web3Context = useWeb3();
  return (
    <div className="provider">
      <p>메타마스크 로그인</p>
      <Web3Data web3Context={web3Context} />
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
        <p>Provider: {providerName}</p>
        <p>Network : {networkName}  (id:{networkId}) </p>
      </div>

      {accounts && accounts.length ? (
        <div>
          {networkName} 이더리움에 연결되었습니다
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
