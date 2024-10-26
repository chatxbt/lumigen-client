import { useRouter } from "next/router";
// import { useRouter} from "next/navigation"
import { useEffect } from "react";
import { services, config } from "@lumigen-core/index";

export const useAppEntry = (props: any) => {

  try {
    const router = useRouter();

    const authService = services.auth(props);
    alert("hi");

    const {
      store: { _hasHydrated, twitterAuth, connected, userInfo },
      action: { getTwitterAccess, handleTwitterAuth },
    } = authService;

    useEffect(() => {

    //   connected && getWallet();

    }, [connected]);

    useEffect(() => {
      const { oauth_verifier, oauth_token }: any = router.query;

      twitterAuth?.why &&
        twitterAuth?.why === "social_auth" &&
        !connected &&
        twitterAuth?.oauth_token_secret &&
        ``;

      oauth_verifier &&
        handleTwitterAuth(
          JSON.stringify({
            oauth_token,
            oauth_token_secret: twitterAuth?.oauth_token_secret,
            oauth_verifier,
          })
        );

      twitterAuth?.why &&
        twitterAuth?.why === "publish-x-post" &&
        connected &&
        twitterAuth?.oauth_token_secret &&
        oauth_verifier &&
        // pubish_x_post(twitterAuth?.entity, {
        //   oauth_token,
        //   oauth_token_secret: twitterAuth?.oauth_token_secret,
        //   oauth_verifier,
        // });

      oauth_verifier && router.replace(`/`);
    }, [router.query]);

    alert('hi')

    return {
      store: {
        connected,
        userInfo,
      },
      action: {
        getTwitterAccess,
      },
    };
  } catch (error) {}
};