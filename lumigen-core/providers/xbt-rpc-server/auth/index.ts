import { utils, config } from "@lumigen-core/index";

//social auth
export const authWithSocial = async ({ token, provider }: any) => {
  try {
    let payload: any = { token, authProvider: provider }
    const data = await utils.rpcCall("socialAuth", {
        ...payload
    })
    return {
      status: true,
      data: data,
      message: data
    }
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
      error: true,
    }
  }
}

//get twitter access token
export const getTwitterAccessToken = async () => {
  try {
    const data = await utils.rpcCall("getTwitterAuthToken", {})
    return {
      status: true,
      data: data,
      message: data
    }
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
      error: true,
    }
  }
}