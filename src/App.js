import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import { CustomerList, CustomerShow, CustomerCreate, CustomerEdit } from './services/customers';

const firebaseConfig = {
  apiKey: "AIzaSyDFqVCSiBM6SJThy-Yqy1i5uXSU7FK2glc",
  authDomain: "xdpm-thtri.firebaseapp.com",
  databaseURL: "https://xdpm-thtri.firebaseio.com",
  projectId: "xdpm-thtri",
  storageBucket: "xdpm-thtri.appspot.com",
  messagingSenderId: "194790065519",
  appId: "1:194790065519:web:5eb0dbcc2a5aed5e2cd49a",
  measurementId: "G-NQJ794LHLT"
};
const firebaseOptions = {};
const dataProvider = FirebaseDataProvider(firebaseConfig, firebaseOptions);
const authProvider = FirebaseAuthProvider(firebaseConfig);

export default function App () {
  return (
    <Admin 
      dataProvider={dataProvider}         
      authProvider={authProvider}
    >
      <Resource name="Customers" list={CustomerList} show={CustomerShow} create={CustomerCreate} edit={CustomerEdit} />
    </Admin>
  );
}