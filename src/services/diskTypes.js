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

const DiskTypeFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="typeName" alwaysOn />
  </Filter>
);

export const DiskTypeList = (props) => (
  <List {...props} exporter={false} filters={<DiskTypeFilter />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="typeName" />
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const DiskTypeShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="typeName" />
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
    </SimpleShowLayout>
  </Show>
);

export const DiskTypeCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="typeName" />
    </SimpleForm>
  </Create>
);

export const DiskTypeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="typeName" />
    </SimpleForm>
  </Edit>
);