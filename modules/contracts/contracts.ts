import { SupportedChainId } from 'modules/web3/constants/chainID';
import { arbitrum, mainnet } from 'wagmi/chains';

const TENDERLY_CHAIN_ID = SupportedChainId.TENDERLY as const;
const ARBITRUM_TENDERLY_CHAIN_ID = SupportedChainId.ARBITRUMTESTNET as const;

type ChainId = typeof mainnet.id | typeof TENDERLY_CHAIN_ID;
type ArbitrumChainId = typeof arbitrum.id | typeof ARBITRUM_TENDERLY_CHAIN_ID;

export const contracts: { name: string; address: Record<ChainId, `0x${string}`> }[] = [
  {
    name: 'chief',
    address: {
      [mainnet.id]: '0x929d9A1435662357F54AdcF64DcEE4d6b867a6f9',
      [TENDERLY_CHAIN_ID]: '0x81a5186946ce055a5ceeC93cd97C7e7EDe7Da922'
    }
  },
  {
    name: 'dssSpell',
    address: {
      // This is an arbitrary spell address that must be changed with each implementation
      [mainnet.id]: '0x6f076E9eB81828fa83d9c3E0aa3E088AD24Ee20B',
      [TENDERLY_CHAIN_ID]: '0x6f076E9eB81828fa83d9c3E0aa3E088AD24Ee20B'
    }
  },
  {
    name: 'mkr',
    address: {
      [mainnet.id]: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      [TENDERLY_CHAIN_ID]: '0x56072C95FAA701256059aa122697B133aDEd9279' //SKY address
    }
  },
  {
    name: 'sky',
    address: {
      [mainnet.id]: '0x56072c95faa701256059aa122697b133aded9279',
      [TENDERLY_CHAIN_ID]: '0x56072c95faa701256059aa122697b133aded9279'
    }
  },
  {
    name: 'pause',
    address: {
      [mainnet.id]: '0xbe286431454714f511008713973d3b053a2d38f3',
      [TENDERLY_CHAIN_ID]: '0xbe286431454714f511008713973d3b053a2d38f3'
    }
  },
  {
    name: 'polling',
    address: {
      [mainnet.id]: '0xD3A9FE267852281a1e6307a1C37CDfD76d39b133',
      [TENDERLY_CHAIN_ID]: '0xD3A9FE267852281a1e6307a1C37CDfD76d39b133'
    }
  },
  {
    name: 'pot',
    address: {
      [mainnet.id]: '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7',
      [TENDERLY_CHAIN_ID]: '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7'
    }
  },
  {
    name: 'vat',
    address: {
      [mainnet.id]: '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B',
      [TENDERLY_CHAIN_ID]: '0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B'
    }
  },
  {
    name: 'voteDelegateFactory',
    address: {
      [mainnet.id]: '0x4Cf3DaeFA2683Cd18df00f7AFF5169C00a9EccD5',
      [TENDERLY_CHAIN_ID]: '0x98F74b7C96497070ba5052E02832EF9892962e62'
    }
  },
  {
    name: 'vow',
    address: {
      [mainnet.id]: '0xA950524441892A31ebddF91d3cEEFa04Bf454466',
      [TENDERLY_CHAIN_ID]: '0xA950524441892A31ebddF91d3cEEFa04Bf454466'
    }
  }
];

export const arbitrumContracts: { name: string; address: Record<ArbitrumChainId, `0x${string}`> }[] = [
  {
    name: 'pollingArbitrum',
    address: {
      [arbitrum.id]: '0x4f4e551b4920a5417F8d4e7f8f099660dAdadcEC',
      [ARBITRUM_TENDERLY_CHAIN_ID]: '0xE63329692fA90B3efd5eB675c601abeDB2DF715a'
    }
  }
];
