import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
} from "react-admin";

const CustomerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
  </Filter>
);

export const CustomerList = (props) => (
  <List {...props} exporter={false} filters={<CustomerFilter />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="fullname" />
      <TextField source="phoneNumber" />
      <TextField source="address" />
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const CustomerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullname" />
      <TextField source="phoneNumber" />
      <TextField source="address" />
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
    </SimpleShowLayout>
  </Show>
);

export const CustomerCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="phoneNumber" />
      <TextInput source="address" />
      </SimpleForm>
  </Create>
);

export const CustomerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="fullname" />
      <TextInput source="phoneNumber" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);