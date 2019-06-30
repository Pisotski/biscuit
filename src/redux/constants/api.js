import { config } from 'dotenv';

config();
const host = process.env.CONNECTION;
export const FETCH_MAIN_TABLE_API = `${host}/api/MainTable`;
export const FETCH_HOME_API = `${host}/api/Home`;
export const FETCH_SUB_TABLE_API = `${host}/api/SubTable`;
