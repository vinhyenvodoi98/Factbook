# Factbook
This is Z, a decentralized social network built on Arbitrum, Avail and Morph. We create specific actions on social networks to bring the most meaningful experiences.
## What's new on my social network?
We focus on 2 things. meaningful post and module check

- Currently we provide 3 types of posts: Vote, Fundings and Calls for Investment.
- Check modules are pieces of code contributed and created by the community in the form of nft . Anyone who owns the NFT will be able to use that code to check the information posted. For example, there is a call to invest in token A. I want to know if they actually own that token to make sure this is not a fake call. At this point, the modules contributed by the community will be effective

# How i build it
I build application with hardhat and nextjs.

I use web3.storage to store post information and module metadata.

Posts will be saved in smart contract.

# How to use Module
i reference code from [Metamask document](https://docs.metamask.io/wallet/reference/eth_gasprice/)
```
await window.ethereum.request({
  "method": "eth_gasPrice",
  "params": []
});
```

## Contract Addresses
| Network | Address | Link |
|---|---|---|
| Sepolia Sepolia | 0xbbb0f51Df70311439E78a26779126D67cC53C11d | https://sepolia.scrollscan.dev/address/0xbbb0f51df70311439e78a26779126d67cc53c11d |
