import { ITokenInfo } from '../../../stores/interfaces';
import { Snip20TokenInfo, validateBech32Address } from '../../../blockchain-bridge';

export type SwapTokenMap = Map<string, SwapToken>;

export type SwapToken = {
  symbol: string;
  logo: string;
  identifier: string;
  decimals?: number;
  address?: string;
  name?: string;
};

export const SwapTokenFromSnip20Params = (address: string, token: Snip20TokenInfo) => {
  const customTokenInfo: SwapToken = {
    symbol: token.symbol,
    address: address,
    decimals: token.decimals,
    logo: '/unknown.png',
    identifier: address,
    name: token.name,
  };

  return customTokenInfo;
};

export const TokenMapfromITokenInfo = (tokens: ITokenInfo[]): SwapTokenMap => {
  let swapTokens: SwapTokenMap = new Map<string, SwapToken>();

  for (const t of tokens) {
    const secretAddress = validateBech32Address(t.dst_address)
      ? t.dst_address
      : validateBech32Address(t.src_address)
      ? t.src_address
      : '';
    let swapToken: SwapToken = {
      identifier: secretAddress,
      symbol: t.display_props.symbol,
      logo: t.display_props.image,
      decimals: Number(t.decimals),
      name: t.name,
      address: secretAddress,
    };

    swapTokens.set(swapToken.identifier, swapToken);
  }

  return swapTokens;
};
