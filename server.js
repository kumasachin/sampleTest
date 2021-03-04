const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/initiateApp', function (req, res) {
    res.send({
        balances: [{
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 10000.67,
            currency: 'GBP',
            overDraft: 500,
            pendingBalance: 99.99,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406732',
                    id: '3c6ae924-a750-4cfe-93c4-b2d3c35b8e98'
            }
        },
        {
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 100.00,
            currency: 'EUR',
            overDraft: 100,
            pendingBalance: 0,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406766',
                    id: 'd712b21c-5b1d-4d60-b352-ce8948612677'
            }
        },{
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 10000.67,
            currency: 'GBP',
            overDraft: 500,
            pendingBalance: 99.99,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406732',
                    id: '3c6ae924-a750-4cfe-93c4-b2d3c35b8e98'
            }
        },
        {
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 100.00,
            currency: 'EUR',
            overDraft: 100,
            pendingBalance: 0,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406766',
                    id: 'd712b21c-5b1d-4d60-b352-ce8948612677'
            }
        },{
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 10000.67,
            currency: 'GBP',
            overDraft: 500,
            pendingBalance: 99.99,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406732',
                    id: '3c6ae924-a750-4cfe-93c4-b2d3c35b8e98'
            }
        },
        {
            id: 'e437fcf5-7036-42ee-98a3-f998d7002739',
            fundsHeld: 100.00,
            currency: 'EUR',
            overDraft: 100,
            pendingBalance: 0,
            accountDetails: {
                    sortCode: '11-04-28',
                    accountNumber: '00406766',
                    id: 'd712b21c-5b1d-4d60-b352-ce8948612677'
            }
        }]
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.send({
        status: "success"
    });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
