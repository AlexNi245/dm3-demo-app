# Use your existing or create a new REACT app

```
yarn create react-app dm3-demo-app --template typescript
```

# Include dm3 package

```
yarn add @dm3-org/dm3-messenger-widget react-app-rewired
```

# Add Start script

Go to package.json and replace the start script with

```
   "start": "react-app-rewired start",
```

# Create .config overrides files

create a file called config-overrides.js in the root directory, and paste the code below 

```JavaScript
module.exports = function override(config) {
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.oneOf instanceof Array) {
            rule.oneOf[rule.oneOf.length - 1].exclude = [
                /\.(js|mjs|jsx|cjs|ts|tsx)$/,
                /\.html$/,
                /\.json$/,
            ];
        }
        return rule;
    });

    return config;
};
 
```

# Create .env file

_create this file in the root of the project or use existing_

```JavaScript
REACT_APP_ADDR_ENS_SUBDOMAIN=<ens subdomain for wallets aliasses>
REACT_APP_USER_ENS_SUBDOMAIN=<ens subdomain for local dm3 names>
REACT_APP_BACKEND=<url to dm3 compatible backend>
REACT_APP_DEFAULT_DELIVERY_SERVICE=<ens name of the default delivery service>
REACT_APP_DEFAULT_SERVICE=<url to a dm3 service>
REACT_APP_PROFILE_BASE_URL=<url to a profile service>
REACT_APP_RESOLVER_BACKEND=h<url to the resolver>
REACT_APP_WALLET_CONNECT_PROJECT_ID=27b3e102adae76b4d4902a035da435e7
REACT_APP_MAINNET_PROVIDER_RPC=<rpc for ethereum mainnet>
RESOLVER_ADDR=<address of the resolver>
```

**Example 1: dm3 config:**

```
REACT_APP_ADDR_ENS_SUBDOMAIN=.addr.dm3.eth
REACT_APP_USER_ENS_SUBDOMAIN=.user.dm3.eth
REACT_APP_BACKEND=https://app.dm3.network/api
REACT_APP_DEFAULT_DELIVERY_SERVICE=ds.dm3.eth
REACT_APP_DEFAULT_SERVICE=https://app.dm3.network/api
REACT_APP_PROFILE_BASE_URL=https://app.dm3.network/api
REACT_APP_RESOLVER_BACKEND=https://app.dm3.network/resolver-handler
REACT_APP_WALLET_CONNECT_PROJECT_ID=27b3e102adae76b4d4902a035da435e7
REACT_APP_MAINNET_PROVIDER_RPC=https://eth-mainnet.g.alchemy.com/v2/<apikey>
RESOLVER_ADDR=0xae6646c22D8eE6479eE0a39Bf63B9bD9e57bAD9d
```

**Example 2: dm3 test config (Goerli):**

```
REACT_APP_ADDR_ENS_SUBDOMAIN=.beta-addr.dm3.eth
REACT_APP_USER_ENS_SUBDOMAIN=.beta-user.dm3.eth
REACT_APP_BACKEND=http://134.122.95.165/api
REACT_APP_DEFAULT_DELIVERY_SERVICE=beta-ds.dm3.eth
REACT_APP_DEFAULT_SERVICE=http://134.122.95.165/api
REACT_APP_PROFILE_BASE_URL=http://134.122.95.165/api
REACT_APP_RESOLVER_BACKEND=http://134.122.95.165/resolver-handler
REACT_APP_USER_ENS_SUBDOMAIN=.beta-user.dm3.eth
REACT_APP_WALLET_CONNECT_PROJECT_ID=27b3e102adae76b4d4902a035da435e7
REACT_APP_MAINNET_PROVIDER_RPC=https://eth-goerli.g.alchemy.com/v2/<apikey>
RESOLVER_ADDR=0xae6646c22D8eE6479eE0a39Bf63B9bD9e57bAD9d
```

# Import dm3 pack into app

_open src/App.tsx_

```JavaScript
// @ts-ignore
import { DM3 } from '@dm3-org/dm3-messenger-widget';
```

# Add dm3 widget

```JavaScript
const props: any = {
   defaultContact: 'contact.dm3.eth',
   defaultServiceUrl: process.env.REACT_APP_DEFAULT_SERVICE,
   ethereumProvider: process.env.REACT_APP_MAINNET_PROVIDER_RPC,
   walletConnectProjectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID,
   showAlways: true,
   hideFunction: "attachments", // OPTINAL PARAMETER : 'attachments,edit,delete' or undefined
   showContacts: true, // true for all contacts / false for default contact
   theme: undefined, // OPTINAL PARAMETER : undefined/themeColors
};

...

<DM3 {...props} />
```

\*\*Example: React App

```JavaScript
import React from 'react';
import logo from './logo.svg';
import './App.css';

// @ts-ignore
import { DM3 } from '@dm3-org/dm3-messenger-widget';

  function App() {
    const props: any = {
        defaultContact: 'help.dm3.eth',
        defaultServiceUrl: process.env.REACT_APP_DEFAULT_SERVICE,
        ethereumProvider: process.env.REACT_APP_MAINNET_PROVIDER_RPC,
        walletConnectProjectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID,
        showAlways: true,
        hideFunction: "attachments", // OPTINAL PARAMETER : 'attachments,edit,delete' or undefined
        showContacts: true, // true for all contacts / false for default contact
        theme: undefined, // OPTINAL PARAMETER : undefined/themeColors
    };

    return (
        <div >
              <DM3 {...props} />
        </div>
    );
}

export default App;
```

# Add some resources

_add pictures in public:_

favicon.png

![image](https://user-images.githubusercontent.com/26625404/268010477-81f519df-e0aa-4a2e-b5ff-debcb4fcafa4.png)

dm3_logo.png

![favicon](https://user-images.githubusercontent.com/26625404/268011515-5086fa70-76d2-46af-adc9-383523ed2e23.png)

# Add/Change configurations

```JavaScript
   defaultContact={'<ens_name>'}
   showAlways={true/false}
   showContacts={true/false}
```
