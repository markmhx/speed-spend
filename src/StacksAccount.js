import {
  createStacksPrivateKey,
  getPublicKey,
  addressFromPublicKeys,
  AddressVersion,
  AddressHashMode,
} from '@blockstack/stacks-transactions';

export const STACK_API_URL =
  'https://crashy-stacky.zone117x.com/v2/transactions';
export const STACKS_API_ACCOUNTS_URL =
  'https://crashy-stacky.zone117x.com/v2/accounts';
export const STACKS_API_ACCOUNTS_BROWSER_URL =
  'http://neon.blockstack.org:20443/v2/accounts';

export function getStacksAccount(appPrivateKey) {
  const privateKey = createStacksPrivateKey(appPrivateKey);
  const publicKey = getPublicKey(privateKey);
  const address = addressFromPublicKeys(
    AddressVersion.TestnetSingleSig,
    AddressHashMode.SerializeP2PKH,
    1,
    [publicKey]
  );
  return { privateKey, address };
}