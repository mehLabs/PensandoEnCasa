// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
