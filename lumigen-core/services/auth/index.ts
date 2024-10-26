//@ts-ignore
import {
  dataProvider,
  store,
  utils,
} from "../..";
// import { useRouter } from "next/router";
import { useRouter, useSearchParams } from "next/navigation"

export const auth = (props: any) => {
  const router = useRouter()
  try {
    

    // data provider modules
    const { xbtRpcServer, xbtV1Server } = dataProvider;

    // store module
    const { useConnectionStore } =
      store.zustandStore;

    // connection store
    const {
      connected,
      twitterAuth,
      twitterAuth2,
      _hasHydrated,
      setTwitterAuth,
      setTwitterAuth2,
      connect,
      disconnect,
      userInfo,
    } = useConnectionStore((state: any) => ({
      connected: state.connected,
      twitterAuth: state.twitterAuth,
      twitterAuth2: state.twitterAuth2,
      _hasHydrated: state._hasHydrated,
      setTwitterAuth: state.setTwitterAuth,
      setTwitterAuth2: state.setTwitterAuth2,
      connect: state.connect,
      disconnect: state.disconnect,
      userInfo: state.userInfo,
    }));

    // const sendFormValid = !email?.length;

    // twitter auth
    const getTwitterAccess = async (
      why: string = "social_auth",
      entity: any = null
    ) => {
      try {
        const { data } = await xbtV1Server.getTwitterAccessToken();
        const twitter_auth = data?.data;
        setTwitterAuth({ ...twitter_auth, why, entity });
        // console.log(data.data);

        router.push(
          `https://api.twitter.com/oauth/authenticate?oauth_token=${twitter_auth?.oauth_token}`
        );
      } catch (error: any) {
        console.log(error);
      }
    };

    // twitter auth
    const handleTwitterAuth = async (token: any) => {
      try {

        const response = await xbtV1Server.authWithSocial({
          token,
          provider: "twitter",
        });
        const jwt =  response?.data?.data.token;
        const user = response?.data?.data;

        if (jwt) {
          connect(user, jwt);
          setTwitterAuth2(JSON.parse(token));
        }

      } catch (error: any) {
        console.log(error);
      }
    };

    /**
     * sign out account
     */
    const signOut = (message: string) => {
        // alert(message)
        disconnect();
      };

    return {
      store: {
        _hasHydrated,
        connected,
        twitterAuth,
        userInfo,
      },
      action: {
        getTwitterAccess,
        handleTwitterAuth,
        connect,
        signOut
      },
      ...props,
    };
  } catch (error: any) {
    if (error?.response?.status === 500 || error?.response?.status === 403){
        // TODO: move to logger
        //   utils.toolkit.slackNotify({
        //     message: JSON.stringify(error?.response?.message),
        //   });
    }
  }
};