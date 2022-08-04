/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../../contracts/optional/GovernanceTokenWrapper.sol/MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "wrappedToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040523480156200001257600080fd5b506040516200256038038062002560833981016040819052620000359162000228565b806040518060400160405280600781526020016626bcaa37b5b2b760c91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b8152508160039080519060200190620000c592919062000182565b508051620000db90600490602084019062000182565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c0948501909152815191909601209052929092526101205250506001600160a01b0316610140525062000297565b82805462000190906200025a565b90600052602060002090601f016020900481019282620001b45760008555620001ff565b82601f10620001cf57805160ff1916838001178555620001ff565b82800160010185558215620001ff579182015b82811115620001ff578251825591602001919060010190620001e2565b506200020d92915062000211565b5090565b5b808211156200020d576000815560010162000212565b6000602082840312156200023b57600080fd5b81516001600160a01b03811681146200025357600080fd5b9392505050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516101405161225962000307600039600081816102aa015281816104b5015281816105110152610f4501526000611065015260006110b40152600061108f01526000610fe8015260006110120152600061103c01526122596000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80636f307dc3116100de5780639ab24eb011610097578063c3cda52011610071578063c3cda52014610384578063d505accf14610397578063dd62ed3e146103aa578063f1127ed8146103bd57600080fd5b80639ab24eb01461034b578063a457c2d71461035e578063a9059cbb1461037157600080fd5b80636f307dc3146102a55780636fcfff45146102cc57806370a08231146102f45780637ecebe001461031d5780638e539e8c1461033057806395d89b411461034357600080fd5b8063313ce56711610130578063313ce567146102045780633644e5151461021e57806339509351146102265780633a46b1a814610239578063587cde1e1461024c5780635c19a95c1461029057600080fd5b806306fdde0314610178578063095ea7b31461019657806318160ddd146101b9578063205c2878146101cb57806323b872dd146101de5780632f4f21e2146101f1575b600080fd5b6101806103fa565b60405161018d9190611ed3565b60405180910390f35b6101a96101a4366004611f1d565b61048c565b604051901515815260200161018d565b6002545b60405190815260200161018d565b6101a96101d9366004611f1d565b6104a4565b6101a96101ec366004611f47565b6104e4565b6101a96101ff366004611f1d565b61050a565b61020c610542565b60405160ff909116815260200161018d565b6101bd610551565b6101a9610234366004611f1d565b61055b565b6101bd610247366004611f1d565b61057d565b61027861025a366004611f83565b6001600160a01b039081166000908152600760205260409020541690565b6040516001600160a01b03909116815260200161018d565b6102a361029e366004611f83565b6105f5565b005b6102787f000000000000000000000000000000000000000000000000000000000000000081565b6102df6102da366004611f83565b610602565b60405163ffffffff909116815260200161018d565b6101bd610302366004611f83565b6001600160a01b031660009081526020819052604090205490565b6101bd61032b366004611f83565b61062a565b6101bd61033e366004611f9e565b610648565b6101806106a4565b6101bd610359366004611f83565b6106b3565b6101a961036c366004611f1d565b61073a565b6101a961037f366004611f1d565b6107c0565b6102a3610392366004611fc6565b6107ce565b6102a36103a5366004612020565b610904565b6101bd6103b836600461208d565b610a68565b6103d06103cb3660046120c0565b610a93565b60408051825163ffffffff1681526020928301516001600160e01b0316928101929092520161018d565b60606003805461040990612100565b80601f016020809104026020016040519081016040528092919081815260200182805461043590612100565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b5050505050905090565b60003361049a818585610b17565b5060019392505050565b60006104b03383610c3b565b6104db7f00000000000000000000000000000000000000000000000000000000000000008484610c49565b50600192915050565b6000336104f2858285610cb1565b6104fd858585610d2b565b60019150505b9392505050565b60006105387f0000000000000000000000000000000000000000000000000000000000000000333085610eff565b6104db8383610f37565b600061054c610f41565b905090565b600061054c610fdb565b60003361049a81858561056e8383610a68565b610578919061214b565b610b17565b60004382106105d35760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b03831660009081526008602052604090206105039083611102565b6105ff33826111bf565b50565b6001600160a01b03811660009081526008602052604081205461062490611238565b92915050565b6001600160a01b038116600090815260056020526040812054610624565b60004382106106995760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016105ca565b610624600983611102565b60606004805461040990612100565b6001600160a01b0381166000908152600860205260408120548015610727576001600160a01b03831660009081526008602052604090206106f5600183612163565b815481106107055761070561217a565b60009182526020909120015464010000000090046001600160e01b031661072a565b60005b6001600160e01b03169392505050565b600033816107488286610a68565b9050838110156107a85760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105ca565b6107b58286868403610b17565b506001949350505050565b60003361049a818585610d2b565b8342111561081e5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016105ca565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610898906108909060a001604051602081830303815290604052805190602001206112a1565b8585856112ef565b90506108a381611317565b86146108f15760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016105ca565b6108fb81886111bf565b50505050505050565b834211156109545760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105ca565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109838c611317565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006109de826112a1565b905060006109ee828787876112ef565b9050896001600160a01b0316816001600160a01b031614610a515760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105ca565b610a5c8a8a8a610b17565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600860205260409020805463ffffffff8416908110610ad757610ad761217a565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6001600160a01b038316610b795760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105ca565b6001600160a01b038216610bda5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105ca565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b610c45828261133f565b5050565b6040516001600160a01b038316602482015260448101829052610cac90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611357565b505050565b6000610cbd8484610a68565b90506000198114610d255781811015610d185760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105ca565b610d258484848403610b17565b50505050565b6001600160a01b038316610d8f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105ca565b6001600160a01b038216610df15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105ca565b6001600160a01b03831660009081526020819052604090205481811015610e695760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105ca565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610ea090849061214b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610eec91815260200190565b60405180910390a3610d25848484611429565b6040516001600160a01b0380851660248301528316604482015260648101829052610d259085906323b872dd60e01b90608401610c75565b610c458282611434565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610f9c57600080fd5b505afa925050508015610fcc575060408051601f3d908101601f19168201909252610fc991810190612190565b60015b610fd65750601290565b919050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561103457507f000000000000000000000000000000000000000000000000000000000000000046145b1561105e57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b8181101561116657600061111d82846114be565b9050848682815481106111325761113261217a565b60009182526020909120015463ffffffff16111561115257809250611160565b61115d81600161214b565b91505b50611109565b81156111aa5784611178600184612163565b815481106111885761118861217a565b60009182526020909120015464010000000090046001600160e01b03166111ad565b60005b6001600160e01b031695945050505050565b6001600160a01b038281166000818152600760208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610d258284836114d9565b600063ffffffff82111561129d5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016105ca565b5090565b60006106246112ae610fdb565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061130087878787611616565b9150915061130d81611703565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b61134982826118be565b610d256009611a1383611a1f565b60006113ac826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b989092919063ffffffff16565b805190915015610cac57808060200190518101906113ca91906121ad565b610cac5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105ca565b610cac838383611baf565b61143e8282611be1565b6002546001600160e01b0310156114b05760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016105ca565b610d256009611cc883611a1f565b60006114cd60028484186121cf565b6105039084841661214b565b816001600160a01b0316836001600160a01b0316141580156114fb5750600081115b15610cac576001600160a01b03831615611589576001600160a01b0383166000908152600860205260408120819061153690611a1385611a1f565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161157e929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610cac576001600160a01b038216600090815260086020526040812081906115bf90611cc885611a1f565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611607929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561164d57506000905060036116fa565b8460ff16601b1415801561166557508460ff16601c14155b1561167657506000905060046116fa565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156116ca573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116f3576000600192509250506116fa565b9150600090505b94509492505050565b6000816004811115611717576117176121f1565b14156117205750565b6001816004811115611734576117346121f1565b14156117825760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105ca565b6002816004811115611796576117966121f1565b14156117e45760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105ca565b60038160048111156117f8576117f86121f1565b14156118515760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105ca565b6004816004811115611865576118656121f1565b14156105ff5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105ca565b6001600160a01b03821661191e5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105ca565b6001600160a01b038216600090815260208190526040902054818110156119925760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016105ca565b6001600160a01b03831660009081526020819052604081208383039055600280548492906119c1908490612163565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610cac83600084611429565b60006105038284612163565b825460009081908015611a6a5785611a38600183612163565b81548110611a4857611a4861217a565b60009182526020909120015464010000000090046001600160e01b0316611a6d565b60005b6001600160e01b03169250611a8683858763ffffffff16565b9150600081118015611ac457504386611aa0600184612163565b81548110611ab057611ab061217a565b60009182526020909120015463ffffffff16145b15611b2457611ad282611cd4565b86611ade600184612163565b81548110611aee57611aee61217a565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611b8f565b856040518060400160405280611b3943611238565b63ffffffff168152602001611b4d85611cd4565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b6060611ba78484600085611d3d565b949350505050565b6001600160a01b03838116600090815260076020526040808220548584168352912054610cac929182169116836114d9565b6001600160a01b038216611c375760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105ca565b8060026000828254611c49919061214b565b90915550506001600160a01b03821660009081526020819052604081208054839290611c7690849061214b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610c4560008383611429565b6000610503828461214b565b60006001600160e01b0382111561129d5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016105ca565b606082471015611d9e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105ca565b6001600160a01b0385163b611df55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105ca565b600080866001600160a01b03168587604051611e119190612207565b60006040518083038185875af1925050503d8060008114611e4e576040519150601f19603f3d011682016040523d82523d6000602084013e611e53565b606091505b5091509150611e63828286611e6e565b979650505050505050565b60608315611e7d575081610503565b825115611e8d5782518084602001fd5b8160405162461bcd60e51b81526004016105ca9190611ed3565b60005b83811015611ec2578181015183820152602001611eaa565b83811115610d255750506000910152565b6020815260008251806020840152611ef2816040850160208701611ea7565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610fd657600080fd5b60008060408385031215611f3057600080fd5b611f3983611f06565b946020939093013593505050565b600080600060608486031215611f5c57600080fd5b611f6584611f06565b9250611f7360208501611f06565b9150604084013590509250925092565b600060208284031215611f9557600080fd5b61050382611f06565b600060208284031215611fb057600080fd5b5035919050565b60ff811681146105ff57600080fd5b60008060008060008060c08789031215611fdf57600080fd5b611fe887611f06565b95506020870135945060408701359350606087013561200681611fb7565b9598949750929560808101359460a0909101359350915050565b600080600080600080600060e0888a03121561203b57600080fd5b61204488611f06565b965061205260208901611f06565b95506040880135945060608801359350608088013561207081611fb7565b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156120a057600080fd5b6120a983611f06565b91506120b760208401611f06565b90509250929050565b600080604083850312156120d357600080fd5b6120dc83611f06565b9150602083013563ffffffff811681146120f557600080fd5b809150509250929050565b600181811c9082168061211457607f821691505b6020821081141561133957634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561215e5761215e612135565b500190565b60008282101561217557612175612135565b500390565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156121a257600080fd5b815161050381611fb7565b6000602082840312156121bf57600080fd5b8151801515811461050357600080fd5b6000826121ec57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008251612219818460208701611ea7565b919091019291505056fea26469706673582212202d54a4f004c6da540e9a3a611b041a203c1b97d97a6f2dcbf643684f2c0a61b064736f6c63430008090033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    wrappedToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(wrappedToken, overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    wrappedToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(wrappedToken, overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}
