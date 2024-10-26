export const env = process.env.NEXT_PUBLIC_ENV;
export const debug = env === 'development' || process.env.NEXT_PUBLIC_DEBUG;
export const chatXbtrpcServerUrl = process.env.NEXT_PUBLIC_CHATXBT_RPC_SERVER_URL