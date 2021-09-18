import React from 'react';
import './Style.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';

function Modal(props) {
  console.log('Modal:', props.showModal);
  const { setShowModal } = props;

  const onCreate = () => {
    console.log('on create called');
  };
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
          initialValues={{ title: '', description: '' }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
              //    TODO: Implement this
            // } else if (
            //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.title)
            // ) {
            //   errors.title = 'Invalid Title';
             }
            if (!values.description) {
              errors.description = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
                <Field as='textarea' type='text' name='description' className='textArea' />
                <ErrorMessage name='description' component='div' />
              </div>
              <div
                className='flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg'
              >
                <button className='px-4 py-2 text-white font-semibold bg-red-500 rounded w-24'
                        onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type='submit' disabled={isSubmitting} className='px-4 py-2 text-white font-semibold bg-blue-700 rounded w-24'>
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Modal;
