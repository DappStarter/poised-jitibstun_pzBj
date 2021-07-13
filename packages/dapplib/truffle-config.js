require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift release place minor give option bubble tackle'; 
let testAccounts = [
"0xe95bfa21bea1920b0e7b206450a482154bb88dddaa1814eb546a67c2fb543d3b",
"0x48e7ffc4bd4290c2d9b491ad68b95cdcf66f2582596c0c4e1491cc9b60d2a04c",
"0xc62a96765ba9ed7ae3fe705de56bd1e2477e119c489d715ca2ab0180313a6018",
"0xfffc2872035da45e3f37ee491d1b33dc856997e34a99d95981e1c5e12a2a2ac0",
"0x0ee2df5dda8fbe06d681f16a91ca2a05cc0e6683054a4dd8df8557620abae1a3",
"0x5ba69b7bc819f570fe7eab31fdcf0d31a34dec6fcc909c409d66a40de09f0931",
"0x66cffed8b4f11caad1d683c71dafd81fd4fc66e89791f2dd9a950aa2b0b5bd58",
"0x04c2f9d77636a51e8d8e09b1e042785f4121a2240a070f803b7638cdb2ac8d6c",
"0xe80c6770cb0cb5142ff3dd703b1b7851d42e86fb136441db0852c4f766acd6be",
"0x2e647f2a4400a8e508a5b6293ff9a39ce2f23c5394fed82ab0a0343f9aa6c983"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

