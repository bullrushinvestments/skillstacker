import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface WriteTestFormValues {
  title: string;
  content: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

export const WriteTestsComponent: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik<WriteTestFormValues>({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/tests'); // Navigate to tests list page after submission
      } catch (err) {
        setError('Failed to submit test');
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border ${
            formik.touched.title && formik.errors.title ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border ${
            formik.touched.content && formik.errors.content ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.content && formik.errors.content ? (
          <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.content}</div>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${
          loading ? 'cursor-not-allowed opacity-70' : ''
        }`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface WriteTestFormValues {
  title: string;
  content: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

export const WriteTestsComponent: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik<WriteTestFormValues>({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/tests'); // Navigate to tests list page after submission
      } catch (err) {
        setError('Failed to submit test');
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border ${
            formik.touched.title && formik.errors.title ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border ${
            formik.touched.content && formik.errors.content ? 'border-red-500' : ''
          }`}
        />
        {formik.touched.content && formik.errors.content ? (
          <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.content}</div>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-500 text-white py-2 px-4 rounded ${
          loading ? 'cursor-not-allowed opacity-70' : ''
        }`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};