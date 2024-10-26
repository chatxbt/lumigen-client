import { utils, config } from "@lumigen-core/index";


//social auth
export const authWithSocial = async ({ token, provider, referer_code }: any) => {
  try {
    let payload: any = { token, authProvider: provider }
    if(referer_code){ payload = { ...payload, referer_code} }
    const { data } = await utils.privateApiConnect().post('auth/sign-in', { ...payload });
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
    const { data } = await utils.privateApiConnect().post('auth/get-twitter-auth-token');
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