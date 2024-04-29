// https://docs.chain.link/resources/link-token-contracts
export const TOKEN_SUPPORTED: Record<any, any> = {
  // Scroll sepolia
  '534351': {
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE': {
      name: 'ETH',
      image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
      dataFeed: '0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41',
      dataFeedName: 'ETH / USD',
    },
    '0x231d45b53C905c3d6201318156BDC725c9c3B9B1': {
      name: 'LINK',
      image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1975.png',
      dataFeed: '0xaC3E04999aEfE44D508cB3f9B972b0Ecd07c1efb',
      dataFeedName: 'LINK / USD',
    },
  },
}
