export const env = process.env.NEXT_PUBLIC_ENV;
export const debug = env === 'development' || process.env.NEXT_PUBLIC_DEBUG;
export const chatXbtrpcServerUrl = process.env.NEXT_PUBLIC_CHATXBT_RPC_SERVER_URL
export const chatXbtV1ServerUrl = process.env.NEXT_PUBLIC_CHATXBT_V1_SERVER_URL || "https://chatxbt-2y3i3.ondigitalocean.app/api/v1" as string