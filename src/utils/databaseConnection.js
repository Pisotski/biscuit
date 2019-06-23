import express from 'express';
// const { dbConnection } = require('../../database/index');
// for test server
import dbConnection from '../database/index';

const api = express.Router();
api.get('/MainTable', async (req, res) => {
  try {
    const sql = `SELECT * FROM user_info WHERE id=${1}`;
    const response = await dbConnection(sql);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

api.get('/Home', async (req, res) => {
  try {
    const sql = `SELECT * FROM user_info WHERE id=${1}`;
    const response = await dbConnection(sql);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

export default api;
