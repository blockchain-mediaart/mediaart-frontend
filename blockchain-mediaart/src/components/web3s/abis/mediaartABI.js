export const mediaArtAddress = "0x2c33B758A2b6C7EC2Ece9d28ed3d5d1FEAF65579";

export const mediarArtABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_p5_code",
				"type": "string"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "createMediaart",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "mediaartId",
				"type": "uint256"
			},
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "deleteMediaart",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "code",
				"type": "string"
			}
		],
		"name": "edit",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "parentArtId",
				"type": "uint256"
			},
			{
				"name": "childAddress",
				"type": "address"
			}
		],
		"name": "ReferMediaart",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			}
		],
		"name": "send",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCEO",
				"type": "address"
			}
		],
		"name": "setCEO",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_contractAddress",
				"type": "address"
			}
		],
		"name": "setMetadataAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "mediaartId",
				"type": "uint256"
			}
		],
		"name": "twicelikey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokenid",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "mediaartId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "p5_code",
				"type": "string"
			}
		],
		"name": "Create",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "mediaartId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "p5_code",
				"type": "string"
			}
		],
		"name": "Delete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "parentartId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "mediaartId",
				"type": "uint256"
			}
		],
		"name": "Reference",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "newContract",
				"type": "address"
			}
		],
		"name": "ContractUpgrade",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "erc721Metadata",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "address"
			}
		],
		"name": "get",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "p5_code",
						"type": "string"
					},
					{
						"name": "createTime",
						"type": "uint64"
					},
					{
						"name": "childArtIds",
						"type": "uint256[]"
					},
					{
						"name": "parentArtIds",
						"type": "uint256[]"
					},
					{
						"name": "likey",
						"type": "uint64"
					},
					{
						"name": "selling",
						"type": "bool"
					}
				],
				"name": "result",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAll",
		"outputs": [
			{
				"components": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "p5_code",
						"type": "string"
					},
					{
						"name": "createTime",
						"type": "uint64"
					},
					{
						"name": "childArtIds",
						"type": "uint256[]"
					},
					{
						"name": "parentArtIds",
						"type": "uint256[]"
					},
					{
						"name": "likey",
						"type": "uint64"
					},
					{
						"name": "selling",
						"type": "bool"
					}
				],
				"name": "result",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "p5_code",
				"type": "string"
			},
			{
				"name": "createTime",
				"type": "uint64"
			},
			{
				"name": "childArtIds",
				"type": "uint256[]"
			},
			{
				"name": "parentArtIds",
				"type": "uint256[]"
			},
			{
				"name": "likey",
				"type": "uint64"
			},
			{
				"name": "selling",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_childArtIds",
		"outputs": [
			{
				"name": "childArtIds",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_createTime",
		"outputs": [
			{
				"name": "createTime",
				"type": "uint64"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_likey",
		"outputs": [
			{
				"name": "likey",
				"type": "uint64"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_name",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_p5_code",
		"outputs": [
			{
				"name": "p5_code",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "mediaArtId",
				"type": "uint256"
			}
		],
		"name": "getMediaart_parentArtIds",
		"outputs": [
			{
				"name": "parentArtIds",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "address"
			}
		],
		"name": "getMyId",
		"outputs": [
			{
				"name": "myId",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getreference_code",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mediaartIndexToApproved",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mediaartIndexToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "OwnertomediaartIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"name": "_preferredTransport",
				"type": "string"
			}
		],
		"name": "tokenMetadata",
		"outputs": [
			{
				"name": "infoUrl",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"name": "ownerTokens",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
/*
[
   {
      "constant": false,
      "inputs": [
         {
            "name": "_to",
            "type": "address"
         },
         {
            "name": "_tokenId",
            "type": "uint256"
         }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_name",
            "type": "string"
         },
         {
            "name": "_p5_code",
            "type": "string"
         },
         {
            "name": "_owner",
            "type": "address"
         }
      ],
      "name": "createMediaart",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "mediaartId",
            "type": "uint256"
         },
         {
            "name": "_owner",
            "type": "address"
         }
      ],
      "name": "deleteMediaart",
      "outputs": [
         {
            "name": "",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_owner",
            "type": "address"
         },
         {
            "name": "id",
            "type": "uint256"
         },
         {
            "name": "code",
            "type": "string"
         }
      ],
      "name": "edit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "parentArtId",
            "type": "uint256"
         },
         {
            "name": "childAddress",
            "type": "address"
         }
      ],
      "name": "ReferMediaart",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "to",
            "type": "address"
         }
      ],
      "name": "send",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_newCEO",
            "type": "address"
         }
      ],
      "name": "setCEO",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_contractAddress",
            "type": "address"
         }
      ],
      "name": "setMetadataAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_to",
            "type": "address"
         },
         {
            "name": "_tokenId",
            "type": "uint256"
         }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "_from",
            "type": "address"
         },
         {
            "name": "_to",
            "type": "address"
         },
         {
            "name": "_tokenId",
            "type": "uint256"
         }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "newOwner",
            "type": "address"
         }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [
         {
            "name": "mediaartId",
            "type": "uint256"
         }
      ],
      "name": "twicelikey",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "from",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "to",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "tokenid",
            "type": "uint256"
         }
      ],
      "name": "Transfer",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "owner",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "mediaartId",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "name",
            "type": "string"
         },
         {
            "indexed": false,
            "name": "p5_code",
            "type": "string"
         }
      ],
      "name": "Create",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "owner",
            "type": "address"
         },
         {
            "indexed": false,
            "name": "mediaartId",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "name",
            "type": "string"
         },
         {
            "indexed": false,
            "name": "p5_code",
            "type": "string"
         }
      ],
      "name": "Delete",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "parentartId",
            "type": "uint256"
         },
         {
            "indexed": false,
            "name": "mediaartId",
            "type": "uint256"
         }
      ],
      "name": "Reference",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
         {
            "indexed": false,
            "name": "newContract",
            "type": "address"
         }
      ],
      "name": "ContractUpgrade",
      "type": "event"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_owner",
            "type": "address"
         }
      ],
      "name": "balanceOf",
      "outputs": [
         {
            "name": "count",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "ceoAddress",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "erc721Metadata",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "a",
            "type": "address"
         }
      ],
      "name": "get",
      "outputs": [
         {
            "components": [
               {
                  "name": "name",
                  "type": "string"
               },
               {
                  "name": "p5_code",
                  "type": "string"
               },
               {
                  "name": "createTime",
                  "type": "uint64"
               },
               {
                  "name": "childArtIds",
                  "type": "uint256[]"
               },
               {
                  "name": "parentArtIds",
                  "type": "uint256[]"
               },
               {
                  "name": "likey",
                  "type": "uint64"
               },
               {
                  "name": "selling",
                  "type": "bool"
               }
            ],
            "name": "result",
            "type": "tuple[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "getAll",
      "outputs": [
         {
            "components": [
               {
                  "name": "name",
                  "type": "string"
               },
               {
                  "name": "p5_code",
                  "type": "string"
               },
               {
                  "name": "createTime",
                  "type": "uint64"
               },
               {
                  "name": "childArtIds",
                  "type": "uint256[]"
               },
               {
                  "name": "parentArtIds",
                  "type": "uint256[]"
               },
               {
                  "name": "likey",
                  "type": "uint64"
               },
               {
                  "name": "selling",
                  "type": "bool"
               }
            ],
            "name": "result",
            "type": "tuple[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart",
      "outputs": [
         {
            "name": "name",
            "type": "string"
         },
         {
            "name": "p5_code",
            "type": "string"
         },
         {
            "name": "createTime",
            "type": "uint64"
         },
         {
            "name": "childArtIds",
            "type": "uint256[]"
         },
         {
            "name": "parentArtIds",
            "type": "uint256[]"
         },
         {
            "name": "likey",
            "type": "uint64"
         },
         {
            "name": "selling",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_childArtIds",
      "outputs": [
         {
            "name": "childArtIds",
            "type": "uint256[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_createTime",
      "outputs": [
         {
            "name": "createTime",
            "type": "uint64"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_likey",
      "outputs": [
         {
            "name": "likey",
            "type": "uint64"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_name",
      "outputs": [
         {
            "name": "name",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_p5_code",
      "outputs": [
         {
            "name": "p5_code",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "mediaArtId",
            "type": "uint256"
         }
      ],
      "name": "getMediaart_parentArtIds",
      "outputs": [
         {
            "name": "parentArtIds",
            "type": "uint256[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "a",
            "type": "address"
         }
      ],
      "name": "getMyId",
      "outputs": [
         {
            "name": "myId",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_owner",
            "type": "address"
         },
         {
            "name": "id",
            "type": "uint256"
         }
      ],
      "name": "getreference_code",
      "outputs": [
         {
            "name": "",
            "type": "string[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "name": "mediaartIndexToApproved",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "name": "mediaartIndexToOwner",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
         {
            "name": "",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_tokenId",
            "type": "uint256"
         }
      ],
      "name": "ownerOf",
      "outputs": [
         {
            "name": "_owner",
            "type": "address"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "",
            "type": "address"
         }
      ],
      "name": "OwnertomediaartIndex",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
         {
            "name": "",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_interfaceID",
            "type": "bytes4"
         }
      ],
      "name": "supportsInterface",
      "outputs": [
         {
            "name": "",
            "type": "bool"
         }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
         {
            "name": "",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_tokenId",
            "type": "uint256"
         },
         {
            "name": "_preferredTransport",
            "type": "string"
         }
      ],
      "name": "tokenMetadata",
      "outputs": [
         {
            "name": "infoUrl",
            "type": "string"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [
         {
            "name": "_owner",
            "type": "address"
         }
      ],
      "name": "tokensOfOwner",
      "outputs": [
         {
            "name": "ownerTokens",
            "type": "uint256[]"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   },
   {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
         {
            "name": "",
            "type": "uint256"
         }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
   }
]
*/