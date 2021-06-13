require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet raise place hospital gloom civil army gift'; 
let testAccounts = [
"0x2e30ba36d1894b424b62e8c080353df69d46a8bd5e93dd96d23b29ca00b64449",
"0x0a7501ab34dac22cee53a40deb3ed976babb0c3889fd905b8da5b0ef20f77d51",
"0xc28a2855fc4842c845ac506ebb6415dca6823f5b25db1313cc2f6ecaf9a87b71",
"0x828be0dc3ed81719e71c09a190ae95f8ea3d8f8f6e2926ed816f1a0221618c6c",
"0x30e4db55f3c916f818d93162a3a2cd83417dc6452db79caaa03de4e3729e7a83",
"0x5c8d506d43d88572f2f7d1fc0f4435040fca450e87903ce42ff14cae080efbac",
"0xcf9f4dd58cf05c04288c4372fcb897794c4739cc70f7ef57ef214f32c94bb6c2",
"0x715c37da0c08262ee67689f049f7536779cbc490443619ae8bc004c85660c7ab",
"0x66c920716b5939146dcf3a98f6ffe7c2cff35011ca2d3f10f0a32e2d9b6bb259",
"0x88bb387f4982f55b78e2dd41a25431d6274a62029a453485c3bf5a6bb73616c2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

