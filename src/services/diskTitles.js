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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  NumberField,
  NumberInput
} from "react-admin";

const statuses = [
    { id: "selling", name: "Selling" },
    { id: "stop-selling", name: "Stop Selling" }
];

const DiskTitleFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="titleName" alwaysOn />
  </Filter>
);

export const DiskTitleList = (props) => (
  <List {...props} exporter={false} filters={<DiskTitleFilter />} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="titleName" />
      <NumberField source="price" />
      <ReferenceField label="Disk Type" source="diskTypeId" reference="Disk Types">
        <TextField source="typeName" />
      </ReferenceField>
      <TextField source="status" />
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const DiskTitleShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="titleName" />
      <NumberField source="price" />
      <ReferenceField label="Disk Type" source="diskTypeId" reference="Disk Types">
        <TextField source="typeName" />
      </ReferenceField>  
      <TextField source="status" />
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
      </SimpleShowLayout>
  </Show>
);

export const DiskTitleCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="titleName" />
      <NumberInput source="price" />
      <ReferenceInput label="Disk Type" source="diskTypeId" reference="Disk Types">
        <SelectInput optionText="typeName" />
      </ReferenceInput>
      <SelectInput source="status" choices={statuses} />
    </SimpleForm>
  </Create>
);

export const DiskTitleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="titleName" />
      <NumberInput source="price" />
      <ReferenceInput label="Disk Type" source="diskTypeId" reference="Disk Types">
        <SelectInput optionText="typeName" />
      </ReferenceInput>
      <SelectInput source="status" choices={statuses} />
    </SimpleForm>
  </Edit>
);