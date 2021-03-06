import React, { useCallback } from 'react';
import { useWeb3 } from '@openzeppelin/network/react';
// import { Color } from 'p5';
import checkEtherConnected from './checkEtherConnected';

export default function Web3ProviderConnectButton() {
  checkEtherConnected();
  const web3Context = useWeb3();
  return (
    <div className="provider">
      <p><strong> Access with Metamask</strong></p>
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
      {/* <div>
      <p><strong>Your address:</strong> {accounts && accounts.length ? accounts[0] : 'Unknown'}</p>
      </div> */}
      <div>
        <p><strong>Provider :</strong> {providerName}</p>
        <p><strong>Network :</strong> {networkName}  (id:{networkId}) </p>
      </div>

      {accounts && accounts.length ? (
        <div>
          {/* {networkName} 이더리움에 연결되었습니다 */}
        </div>
      ) : !!networkId ? (
        <div>
          <button class="btn btn-warning" onClick={requestAccess}>Login with Metamask</button>
        </div>
      ) : (
            <div></div>
          )}
    </div>
  );
}
