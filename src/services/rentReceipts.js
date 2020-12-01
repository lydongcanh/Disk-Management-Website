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
  DateField,
  DateInput,
  ArrayField,
  ArrayInput, 
  SimpleFormIterator,
} from "react-admin";

const RentReceiptFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="id" alwaysOn />
  </Filter>
);

export const RentReceiptList = (props) => (
  <List {...props} exporter={false} filters={<RentReceiptFilter />} bulkActionButtons={false}>
    <Datagrid>
    <TextField source="id" />
      <ReferenceField label="Customer" source="customerId" reference="Customers">
        <TextField source="id" />
      </ReferenceField>
      <ArrayField source="details">
        <Datagrid>
          <ReferenceField label="Disk" source="disk" reference="Disks">
            <TextField source="id" />
          </ReferenceField>
          <DateField source="returnDate" />
        </Datagrid>
      </ArrayField>
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
);

export const RentReceiptShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField label="Customer" source="customerId" reference="Customers">
        <TextField source="id" />
      </ReferenceField>
      <ArrayField source="details">
        <Datagrid>
          <ReferenceField label="Disk" source="disk" reference="Disks">
            <TextField source="id" />
          </ReferenceField>
          <DateField source="returnDate" />
        </Datagrid>
      </ArrayField>
      <TextField source="status" />
      <TextField source="createdate" />
      <TextField source="createdby" />
      <TextField source="lastupdate" />
      <TextField source="updatedby" />
      </SimpleShowLayout>
  </Show>
);

export const RentReceiptCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <ReferenceInput label="Customer" source="customerId" reference="Customers">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ArrayInput source="details">
        <SimpleFormIterator>
          <ReferenceInput label="Disk" source="disk" reference="Disks">
            <SelectInput optionText="id" />
          </ReferenceInput>
          <DateInput label="Return Date"  source="returnDate" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const RentReceiptEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <ReferenceInput label="Customer" source="customerId" reference="Customers">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ArrayInput source="details">
        <SimpleFormIterator>
          <ReferenceInput label="Disk" source="disk" reference="Disks">
            <SelectInput optionText="id" />
          </ReferenceInput>
          <DateInput label="Return Date" source="returnDate"/>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);