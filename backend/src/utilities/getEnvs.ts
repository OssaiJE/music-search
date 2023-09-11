import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV, DEEZER_API } = process.env;

export const isEnvProd = (): boolean => NODE_ENV === 'production';
export const isEnvDev = (): boolean => NODE_ENV === 'development';

export const getDeezerApi = (): string | undefined => DEEZER_API;
