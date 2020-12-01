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
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const HoldDiskFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
  </Filter>
);

export const HoldDiskList = (props) => (
  <List {...props} exporter={false} filters={<HoldDiskFilter />}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Customer" source="customerId" reference="Customers">
        <TextField source="id" />
      </ReferenceField>      
      <ReferenceField label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <TextField source="titleName" />
      </ReferenceField>         
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const HoldDiskShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField label="Customer" source="customerId" reference="Customers">
        <TextField source="id" />
      </ReferenceField>      
      <ReferenceField label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <TextField source="titleName" />
      </ReferenceField>  
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
      </SimpleShowLayout>
  </Show>
);

export const HoldDiskCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <ReferenceInput label="Customer" source="customerId" reference="Customers">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <SelectInput optionText="titleName" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const HoldDiskEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Customer" source="customerId" reference="Customers">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput label="Disk Title" source="diskTitleId" reference="Disk Titles">
        <SelectInput optionText="titleName" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);