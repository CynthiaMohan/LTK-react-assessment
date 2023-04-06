import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        AddToDo: ''
      }}
      onSubmit={(values) => {
        console.log('Todo values', values.AddToDo);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="AddToDo" placeholder="Add Text Here" />
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}

    </Formik>
  </div>
);

export default BasicForm
