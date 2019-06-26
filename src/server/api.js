import express from 'express';
import colors from 'colors';
import dbConnection from '../database/index';

const api = express.Router();
api.get('/MainTable', async (req, res) => {
  try {
    // `SELECT * FROM time_period WHERE userid=${1}`;
    const sql = `SELECT x.* FROM public.time_period x WHERE userid =${1}`;
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
