import React from 'react';
import './Style.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import httpClient from '../../shared/utils/httpClient';
import { HttpMethods } from '../../shared/utils/constants/HttpMethods';
import { Button } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react"

function Modal(props) {
  console.log('Modal:', props.showModal);
  const { setShowModal } = props;
  const toast = useToast()
  return (
    <div
      className='modalContainer'>
      <div
        className='flex flex-col rounded-lg border border-gray-300 shadow-xl w-2/4 bg-white'>
        <div
          className='flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'
        >
          <p className='font-semibold text-gray-800'>Create issue</p>
        </div>

        <Formik
          initialValues={{ title: '', content: '' }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
             }
            if (!values.content) {
              errors.content = 'Required';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const res =  await httpClient(HttpMethods.POST, "/v1/task", values);
            console.log("res is",res);
            toast({
              title: "Issue created",
              description: "Your issue was created",
              status: "success",
              duration: 6000,
              isClosable: true,
            })
            setTimeout(() => {
              // setShowModal(false);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);

            }, 4000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='px-10 mt-4 '>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='username'>Title</label>
                <Field placeholder='Title' type="text" name='title'
                       className='input' />
                <ErrorMessage name='title' component='div' />
              </div>
              {/*Input Text Area*/}
              <div className='flex flex-col px-10 py-5'>
                <p className='mb-2 font-semibold text-gray-700'>Description</p>
                <Field as='textarea' type='text' name='content' className='textArea' />
                <ErrorMessage name='content' component='div' />
              </div>
              <div
                className='flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg'
              >
                <Button colorScheme="red" size="md" onClick={() => setShowModal(false)}>Cancel</Button>
                <Button colorScheme="green" type='submit' disabled={isSubmitting}>
                  Create
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Modal;
