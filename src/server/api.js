import express from 'express';
import dbConnection from '../utils/databaseConnection';

const apis = express.Router();
apis.get('/MainTable', async (req, res) => {
  try {
    const sql = `SELECT * FROM user_info WHERE id=${1}`;
    const response = await dbConnection(sql);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

apis.get('/Home', async (req, res) => {
  try {
    const sql = `SELECT * FROM user_info WHERE id=${1}`;
    const response = await dbConnection(sql);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

export default apis;
