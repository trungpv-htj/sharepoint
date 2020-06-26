
var infura_apikey = "5fb4dde221ac4bbc8b02955a43582ac0";
var mnemonic = "method comic symbol interest join wife fringe sea poverty chunk machine medal";
var address = "0x0D4750bE5FDE89d35f2dD53333d31Be5c1143CeC";

module.exports = {
      solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      },
      networks: {
        development: {
          host: "127.0.0.1",
          port: 8545,
          network_id: "*" // Match any network id
        },
        ropsten: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
          },
          network_id: 3,
          from: address,
          gas: 4700388
        } 
      }  
};
