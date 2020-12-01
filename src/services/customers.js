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
  DeleteButton,
  DateTimeInput,
  EmailField,
  NumberField,
  NumberInput
} from "react-admin";

const CustomerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const CustomerList = (props) => (
  <List {...props} filters={<CustomerFilter />}>
    <Datagrid>
      <TextField source="fullname" />
      <NumberField source="phoneNumber" />
      <EmailField source="email" />
      <TextField source="createdAt" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const CustomerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullname" />
      <TextField source="phoneNumber" />
      <EmailField source="email" />
      <TextField source="createdAt" />
    </SimpleShowLayout>
  </Show>
);

export const CustomerCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="fullname" />
      <NumberInput source="phoneNumber" />
      <TextInput source="email" />
      <DateTimeInput source="createdAt" />
    </SimpleForm>
  </Create>
);

export const CustomerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="createdAt" options={{ disabled: true }} />
      <TextInput source="fullname" />
      <NumberInput source="phoneNumber" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);