const assert = require('assert');
const index = require('../index.js');

// describe('path test', () => {
//   it('correctly concatenates the path', () => {
//     const newsApiKey = 'sfmlskf358ljwf90';
//     const subject = 'trump';
//     assert.equal(index.path(), '/v2/everything?format=json&q=trump&apiKey=sfmlskf358ljwf90');
//   });
// });
// describe('topThreeNews test', () => {
//   it('correctly concatenates the top three news', () => {
//     const response = {
//       status: 'ok',
//       totalResults: 4476,
//       articles: [
//         {
//           source: {
//             id: null,
//             name: 'Newsbtc.com',
//           },
//           author: 'Cole Petersen',
//           title: 'JPMorgan Executives Flip Bullish on Crypto After JPM Coin Release',
//           description: 'It’s no secret that the executives sitting at the top of JPMorgan...',
//           url: 'https://www.newsbtc.com/2019/03/20/jpmorgan-executives-flip-bullish-on-crypto-after-jpm-coin-release/',
//           urlToImage: 'https://www.newsbtc.com/wp-content/uploads/2018/05/JPMorgan.jpg',
//           publishedAt: '2019-03-20T22:00:00Z',
//           content: 'Its no secret that the executives sitting...',
//         },
//         {
//           source: {
//             id: null,
//             name: 'Cointelegraph.com',
//           },
//           author: 'Cointelegraph By Rakesh Upadhyay',
//           title: 'Bitcoin, Ethereum, Ripple, Litecoin, EOS, Bitcoin Cash, Stellar...',
//           description: 'Another multi-million dollar token sale that sold out...',
//           url: 'https://cointelegraph.com/news/bitcoin-ethereum-ripple-litecoin-eos-bitcoin-cash-stellar-binance-coin-tron-cardano-price-analysis-march-20',
//           urlToImage: 'https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85N2NjMzM1ZWE5NGUzNTNjYTU5YzhlMTQ0NzRmZTBmNi5qcGc=.jpg',
//           publishedAt: '2019-03-20T21:50:00Z',
//           content: null,
//         },
//         {
//           source: {
//             id: null,
//             name: 'Yahoo.com',
//           },
//           author: null,
//           title: 'Bitcoin, Ethereum, Ripple, Litecoin, EOS, Bitcoin Cash, Stellar...',
//           description: 'Bitcoin (BTC) has been trading in a tight range between ...',
//           url: 'https://finance.yahoo.com/news/bitcoin-ethereum-ripple-litecoin-eos-215000156.html',
//           urlToImage: 'https://s.yimg.com/uu/api/res/1.2/sPaGAGj31MVli2AH2o2oug--~B/aD00OTM7dz03NDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/cointelegraph_667/91cec4ca8af2c8f5a16428e422a90d78',
//           publishedAt: '2019-03-20T21:50:00Z',
//           content: 'The views and opinions expressed here are solely those of the ...',
//         },
//         {
//           source: {
//             id: 'crypto-coins-news',
//             name: 'Crypto Coins News',
//           },
//           author: 'Mark Emem',
//           title: '‘Bitcoin Bank’ Silvergate Says Crypto Client Base Climbed 122% in 2018',
//           description: 'Silvergate Bank,...',
//           url: 'https://www.ccn.com/bitcoin-bank-silvergate-says-crypto-client-base-climbed-122-in-2018',
//           urlToImage: 'https://www.ccn.com/wp-content/uploads/2019/03/bitcoin-bank-silvergate-shutterstock.jpg',
//           publishedAt: '2019-03-20T21:30:27Z',
//           content: 'Silvergate Bank, which bills itself as the ...',
//         },
//       ],
//     };
//     assert.equal(index.topThreeNews(), [
//       'JPMorgan Executives Flip Bullish on Crypto After JPM Coin Release',
//       'Bitcoin, Ethereum, Ripple, Litecoin, EOS, Bitcoin Cash, Stellar...',
//       'Bitcoin, Ethereum, Ripple, Litecoin, EOS, Bitcoin Cash, Stellar...',
//       '‘Bitcoin Bank’ Silvergate Says Crypto Client Base Climbed 122% in 2018']);
//   });
// });
