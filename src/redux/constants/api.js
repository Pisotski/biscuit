import { config } from 'dotenv';

config();

export const FETCH_MAIN_TABLE_API = `${process.env.CONNECTION}/api/MainTable`;
export const FETCH_HOME_API = `${process.env.CONNECTION}/api/Home`;
