const { expect } = require('chai');

const ZERO_ADDRESS = '0:0000000000000000000000000000000000000000000000000000000000000000';
let RootTokenContractExternalOwner, TONTokenWallet, key1, key2, RootTokenContractResult;
describe('Test Fungible Tokens', async function() {
    before(async function() {
        RootTokenContractExternalOwner = await locklift.factory.getContract('RootTokenContract');
        TONTokenWallet = await locklift.factory.getContract('TONTokenWallet');
        [key1, key2] = await locklift.keys.getKeyPairs();
    });

    describe('Transfer owner', async function() {
        before(async function() {
            RootTokenContractResult = await locklift.giver.deployContract({
                contract: RootTokenContractExternalOwner,
                constructorParams: {
                    root_public_key_: `0x${key1.public}`,
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
                keyPair: key1,
            });
        });

        it('Transfer root owner from external #0 to #1', async function() {
            this.timeout(20000);

            let startRootDetails = await RootTokenContractResult.call({
                method: 'getDetails',
                params: {},
            });

            expect(startRootDetails.root_public_key.toString(16)).equal(key1.public, 'Start root public key must be public key1');
            expect(startRootDetails.root_owner_address).equal(ZERO_ADDRESS, 'Start root owner address must be zero address');

            await RootTokenContractResult.run({
                method: 'transferOwner',
                params: {
                    root_public_key_: `0x${key2.public}`,
                    root_owner_address_: ZERO_ADDRESS,
                },
                keyPair: key1
            });

            let endRootDetails = await RootTokenContractResult.call({
                method: 'getDetails',
                params: {},
            });

            expect(endRootDetails.root_public_key.toString(16)).equal(key2.public, 'Start root public key must be public key2');
            expect(endRootDetails.root_owner_address).equal(ZERO_ADDRESS, 'Start root owner address must be zero address');
        });

        it(`Transfer root owner from external #1 to #0`, async function() {

            let startRootDetails = await RootTokenContractResult.call({
                method: 'getDetails',
                params: {}
            });

            expect(startRootDetails.root_public_key.toString(16)).equal(key2.public, 'Start root public key must be public key2');
            expect(startRootDetails.root_owner_address).equal(ZERO_ADDRESS, 'Start root owner address must be zero address');

            await RootTokenContractResult.run({
                method: 'transferOwner',
                params: {
                    root_public_key_: `0x${key1.public}`,
                    root_owner_address_: ZERO_ADDRESS,
                },
                keyPair: key2
            });

            let endRootDetails = await RootTokenContractResult.call({
                method: 'getDetails',
                params: {},
            });

            expect(endRootDetails.root_public_key.toString(16)).equal(key1.public, 'Start root public key must be public key1');
            expect(endRootDetails.root_owner_address).equal(ZERO_ADDRESS, 'Start root owner address must be zero address');

        });
    });
});