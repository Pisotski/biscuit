import express from 'express';
import dbConnection from '../database/index';
import formatMainTable from '../utils/formatMainTableData';

const api = express.Router();
// @TODO DRY by creating route generator. only route and query is different;
api.get('/MainTable', async (req, res) => {
  try {
    // `SELECT * FROM time_period WHERE userid=${1}`;
    const sql = `SELECT x.* FROM public.time_period x WHERE userid =${1}`;
    const response = await dbConnection(sql);
    // res.send(formatMainTable(response));
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

api.get('/SubTable', async (req, res) => {
  try {
    const sql = `SELECT x.* FROM public.daily_tracker x WHERE periodid =${1}`;
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
