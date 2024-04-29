# Factbook
This is Factbook, a decentralized social network built on Scroll. We create specific actions on social networks to bring the most meaningful experiences.

## What's new on my social network?
We focus on 2 things. meaningful post and module check

- Currently we provide 3 types of posts: Vote, Fundings and Calls for Investment.
  - Vote: When a user creates a vote post, it will automatically create a contract with the poster as the owner
  - Fundings: When a user creates a Funding post, it will automatically create a contract with the poster as the owner. Only owner can withdraw fund
  - Calls for Investment: This function is for traders to share investment token. With the help of **chainlink datafeed** we save the roundId at the time of writing. When users view the post, they will see the current price compared to the price at the time the writer wrote the post to evaluate whether the writer's comments are correct.
- Check modules are pieces of code contributed and created by the community in the form of nft . Anyone who owns the NFT will be able to use that code to check the information posted. For example, there is a call to invest in token A. I want to know if they actually own that token to make sure this is not a fake call. At this point, the modules contributed by the community will be effective

# Link DataFeed
- [Document](https://docs.chain.link/data-feeds/price-feeds/addresses?network=scroll&page=1)

Factbook uses chainlink Datafeed to get the price of the token and compare it between the time the article was written and now. Thereby creating trust between influencers and users

# How i build it
I build application with hardhat and nextjs.

I use web3.storage to store post information and module metadata.

Posts cid will be saved in smart contract.

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
