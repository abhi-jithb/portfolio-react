const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Construct the row data to be written to Google Sheets
    const rowData = [name, email, subject, message];

    try {
        const response = await axios.post('https://sheet.best/api/sheets/1h6gxjTvRACBHgxtWnDiJ6Nrle-Eol2F0Q0hr4Rfcbew', rowData);
        console.log('Data added to Google Sheets:', response.data);
        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error writing data to Google Sheets:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
