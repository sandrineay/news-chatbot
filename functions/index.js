// @flow

const http = require('http');
const functions = require('firebase-functions');

const host = 'newsapi.org';
const newsApiKey = 'YOUR_API_KEY';

function callNewsApi(subject) {
  return new Promise((resolve, reject) => {
    const path = `/v2/everything?format=json&q=${subject}&apiKey=${newsApiKey}`;

    http.get({ host, path }, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        const response = JSON.parse(body);
        const topThreeNews = response.articles.slice(0, 3).map(article => article.title);
        const output = `The top three news are: ${topThreeNews.join(' // ')}`;
        resolve(output);
      });
      res.on('error', (error) => {
        reject(new Error('There was an error while calling the news API.'));
      });
    });
  });
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
  let subject = '';
  if (req.body.queryResult.parameters.NewsSubject) {
    subject = req.body.queryResult.parameters.NewsSubject;
  }
  callNewsApi(subject).then(output => res.json({ fulfillmentText: output })).catch(() => {
    res.json({ fulfillmentText: 'I could not find the news!' });
  });
});
