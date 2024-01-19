import React from "react";
import logo from "./logo.svg";
import "./App.css";

// @ts-ignore
import { DM3 } from "@dm3-org/dm3-messenger-widget";

function App() {
  const props: any = {
    defaultContact: "contact.dm3.eth",
    defaultServiceUrl: process.env.REACT_APP_DEFAULT_SERVICE,
    ethereumProvider: process.env.REACT_APP_MAINNET_PROVIDER_RPC,
    walletConnectProjectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID,
    showAlways: true,
    hideFunction: "attachments", // OPTINAL PARAMETER : 'attachments,edit,delete' or undefined
    showContacts: true, // true for all contacts / false for default contact
    theme: undefined, // OPTINAL PARAMETER : undefined/themeColors
  };
  return <DM3 {...props} />;
}

export default App;
