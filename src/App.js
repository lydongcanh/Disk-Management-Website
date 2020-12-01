import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';
import CustomerIcon from '@material-ui/icons/Group';
import DiskIcon from '@material-ui/icons/Album';
import DiskTitleIcon from '@material-ui/icons/LibraryBooks';
import DiskTypeIcon from '@material-ui/icons/Web';
import RentReceiptIcon from '@material-ui/icons/Payment';
import HoldDiskIcon from '@material-ui/icons/Bookmark';

import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import { CustomerList, CustomerShow, CustomerCreate, CustomerEdit } from './services/customers';
import { DiskTypeList, DiskTypeShow, DiskTypeCreate, DiskTypeEdit } from './services/diskTypes';
import { DiskTitleList, DiskTitleShow, DiskTitleCreate, DiskTitleEdit } from './services/diskTitles';
import { DiskList, DiskShow, DiskCreate, DiskEdit } from './services/disks';
import { RentReceiptList, RentReceiptShow, RentReceiptCreate, RentReceiptEdit } from './services/rentReceipts';
import { HoldDiskList, HoldDiskShow, HoldDiskCreate, HoldDiskEdit } from './services/holdDisks';

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

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export default function App () {
  return (
    <Admin 
      theme={theme}
      dataProvider={dataProvider}         
      authProvider={authProvider}
    >
      <Resource 
        name="Hold Disks" 
        icon={HoldDiskIcon} 
        list={HoldDiskList} 
        show={HoldDiskShow} 
        create={HoldDiskCreate} 
        edit={HoldDiskEdit} 
      />

      <Resource 
        name="Rent Receipts" 
        icon={RentReceiptIcon} 
        list={RentReceiptList} 
        show={RentReceiptShow} 
        create={RentReceiptCreate} 
        edit={RentReceiptEdit} 
      />

      <Resource 
        name="Customers" 
        icon={CustomerIcon} 
        list={CustomerList} 
        show={CustomerShow} 
        create={CustomerCreate} 
        edit={CustomerEdit} 
      />

      <Resource 
        name="Disks" 
        icon={DiskIcon} 
        list={DiskList} 
        show={DiskShow} 
        create={DiskCreate} 
        edit={DiskEdit} 
      />

      <Resource 
        name="Disk Titles" 
        icon={DiskTitleIcon} 
        list={DiskTitleList} 
        show={DiskTitleShow} 
        create={DiskTitleCreate} 
        edit={DiskTitleEdit} 
      />

      <Resource 
        name="Disk Types" 
        icon={DiskTypeIcon} 
        list={DiskTypeList} 
        show={DiskTypeShow} 
        create={DiskTypeCreate} 
        edit={DiskTypeEdit} 
      />
    </Admin>
  );
}