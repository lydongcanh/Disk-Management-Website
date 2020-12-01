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
  ReferenceInput,
  ReferenceField,
  SelectInput,
} from "react-admin";

const statuses = [
    { id: "available", name: "Available" },
    { id: "renting", name: "Selling" },
    { id: "on-hold", name: "On hold" },
];

const DiskFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="diskTitleId" alwaysOn />
  </Filter>
);

export const DiskList = (props) => (
  <List {...props} exporter={false} filters={<DiskFilter />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <TextField source="titleName" />
      </ReferenceField>    
      <TextField source="status" />
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const DiskShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <TextField source="titleName" />
      </ReferenceField> 
      <TextField source="status" />
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
      </SimpleShowLayout>
  </Show>
);

export const DiskCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <ReferenceInput label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <SelectInput optionText="titleName" />
      </ReferenceInput>
      <SelectInput source="status" choices={statuses} />
    </SimpleForm>
  </Create>
);

export const DiskEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <ReferenceInput label="Disk Type" source="diskTitleId" reference="Disk Titles">
        <SelectInput optionText="titleName" />
      </ReferenceInput>
      <SelectInput source="status" choices={statuses} />
    </SimpleForm>
  </Edit>
);