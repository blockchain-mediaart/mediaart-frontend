import React, { useCallback } from 'react';

import { cryptoKittiesAddress, cryptokittiesABI } from './abis/cryptokittiesABI';

export default function Web3Data(props) {

  const { web3Context } = props;

  const { networkId, networkName, accounts, providerName, lib } = web3Context;

  const requestAuth = async web3Context => {
    try {
      await web3Context.requestAuth();
    } catch (e) {
      console.error(e);
    }
  };

  const getMediaArt = useCallback(() => {
    const cryptoKitties = new lib.eth.Contract(cryptokittiesABI, cryptoKittiesAddress);
    console.log("cryptoKitties : " + cryptoKitties);
  })

  const requestAccess = useCallback(() => requestAuth(web3Context), []);

  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        Network: {networkId ? `${networkId} – ${networkName}` : 'No connection'}
      </div>
      <div>
        Your address: {accounts && accounts.length ? accounts[0] : 'Unknown'}
      </div>
      <div>
        Provider: {providerName}
      </div>

      {accounts && accounts.length ? (
        <div>
          Accounts & Signing Status: Access Granted
          {/* {getKitty(lib)} */}
          
        </div>
      ) : (
          <div>
            <button onClick={getMediaArt} >Request Access</button>
          </div>
        )
      }


    </div>
  );
}




// export async function GetMyMediaArt(props) {
//   const web3 = props.web3;
//   const cryptoKitties = new web3.eth.Contract(cryptokittiesABI, cryptoKittiesAddress);

//   // cryptoKitties.methods.getKitty(20)
//   // console.log(kitty)
//   // return kitty
//   cryptoKitties.methods.getKitty(1).call()
//     .then(function (result) {
//       console.log(result['genes'])

//       return result
//     })

// };
