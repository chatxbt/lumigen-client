
export type ConnectionStore = {
    connected: boolean;
    token: string;
    twitterAuth: any;
    twitterAuth2: any;
    userInfo: any;
    _hasHydrated: boolean;
    setTwitterAuth: (twitterAuth: any) => void;
    setTwitterAuth2: (twitterAuth2: any) => void;
    connect: (userInfo: any, token: string) => void;
    disconnect: () => void;
    setHasHydrated: (state: any) => void;
  }
  