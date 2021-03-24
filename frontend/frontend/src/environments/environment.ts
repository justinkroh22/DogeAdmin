// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let baseUrl: string = 'https://localhost:8443/user/';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC0-bDLBHeSIVzq2HblBWhaEjAQM1vj4Tw",
    authDomain: "test-a0bf1.firebaseapp.com",
    projectId: "test-a0bf1",
    storageBucket: "test-a0bf1.appspot.com",
    messagingSenderId: "512874803586",
    appId: "1:512874803586:web:2ead92cb69b4b8345b1f9b",
    measurementId: "G-BEDMWJEGEF"
  },
  apiUrls: {
    setClaims: baseUrl + 'set-claims',
    updateDisplayName: baseUrl + 'update-display-name',
    getAllUsers: baseUrl + 'all',
    getUserById: baseUrl + 'u/',
    deleteUserById: baseUrl + 'd/',
    createUser: baseUrl + 'create-user',
    resetPassword: baseUrl + 'reset-password',
    disableUser: baseUrl + 'disable-user',
    enableUser: baseUrl + 'enable-user',
    getUserLogs: baseUrl +'logs/'

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
