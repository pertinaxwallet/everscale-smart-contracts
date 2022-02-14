async function main() {
  const ZERO_ADDRESS = '0:0000000000000000000000000000000000000000000000000000000000000000';
  const RootTokenContractExternalOwner = await locklift.factory.getContract('RootTokenContract');

  let [keyPair] = await locklift.keys.getKeyPairs();
  const TONTokenWallet = await locklift.factory.getContract('TONTokenWallet');

  console.log('keyPair', keyPair);

  const RootTokenContractResult = await locklift.giver.deployContract({
    contract: RootTokenContractExternalOwner,
    constructorParams: {
        root_public_key_: `0x${keyPair.public}`,
        root_owner_address_: ZERO_ADDRESS
    },
    initParams: {
      name: Buffer.from('FooToken').toString('hex'),
      symbol: Buffer.from('Foo').toString('hex'),
      decimals: 0,
      wallet_code: TONTokenWallet.code,
    },
    initialBalance: locklift.utils.convertCrystal(17.654, 'ton'),
    _randomNonce: true,
    alias: 'RootTokenContractExternalOwner',
    keyPair,
  });
  
  console.log(`RootTokenContract deployed at: ${RootTokenContractResult.address}`);

  const TONTokenWalletResult = await locklift.giver.deployContract({
    contract: TONTokenWallet,
    constructorParams: {},
    initParams: {
      root_address: RootTokenContractExternalOwner.address,
      code: TONTokenWallet.code,
      wallet_public_key: `0x${keyPair.public}`,
      owner_address: ZERO_ADDRESS
    },
    _randomNonce: false,
    initialBalance: locklift.utils.convertCrystal(2.001, 'ton'),
    alias: 'SelfDeployedWallet',
    keyPair,
  });
  
  console.log(`TONTokenWallet deployed at: ${TONTokenWalletResult.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });