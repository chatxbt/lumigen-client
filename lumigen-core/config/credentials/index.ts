export default {
    /**
     * app credentials
     */
    app: {
      name: "LumiGen",
    },

    rpcServer: {
        auth: {
            username: process.env.NEXT_PUBLIC_CHATXBT_RPC_SERVER_BASIC_AUTH_USERNAME || '',
            password: process.env.NEXT_PUBLIC_CHATXBT_RPC_SERVER_BASIC_AUTH_PASSWORD || '',
        }
    },
  
    /**
     * google credentials
     */
    google: {
      oauth: {
        clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
        clientIdAuth: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      },
      captchaPublicKey: process.env.NEXT_PUBLIC_CAPTCHA_PUBLIC_KEY,
      googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
      googleTagManager: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
    },
  
    /**
     * Slack
     */
    slackWebhooks: {
      defaultLog: process.env.SLACK_WEBHOOK_URL,
      donations:
        "https://hooks.slack.com/services/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",
      errors: process.env.SLACK_WEBHOOK_URL,
      campaign:
        "https://hooks.slack.com/services/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",
    },
  };