import { domain, clientId, audience, serverUrl} from '../auth_config.json';

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyBmyEoBD2-YBRbRD3iZxcOKTyFFcmpAfuc",
    authDomain: "storification-5a9f7.firebaseapp.com",
    projectId: "storification-5a9f7",
    storageBucket: "storification-5a9f7.appspot.com",
    messagingSenderId: "641692388851",
    appId: "1:641692388851:web:65e0878e8aa25426ae9686",
    measurementId: "G-89JCN2H82Q"
  },
  auth: {
    domain: "dev-3c83cuvr.us.auth0.com",
    clientId: "NqgdwEXKV6Dr03Dz9GUcCVcGLD0jDBOZ",
    redirectUri: window.location.origin,
    audience: "dev-3c83cuvr.us.auth0.com"
  },
  dev: {
    serverUrl:"https://infinite-refuge-54136.herokuapp.com"
  }
};
