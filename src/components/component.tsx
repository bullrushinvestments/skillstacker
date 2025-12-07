import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  contentCategory: string; // e.g., blog, news, articles
  targetAudience: string;
  features: string[];
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const BusinessSpecificationForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // API call or business logic here
    console.log(data);
    setTimeout(() => {
      alert('Business specification created successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="businessName">Business Name</label>
      <input type="text" id="businessName" {...register("businessName", { required: true })} />

      <label htmlFor="description">Description</label>
      <textarea id="description" rows={4} {...register("description")} />

      <label htmlFor="contentCategory">Content Category</label>
      <select id="contentCategory" {...register("contentCategory", { required: true })}>
        <option value="">Select a category...</option>
        <option value="blog">Blog</option>
        <option value="news">News</option>
        <option value="articles">Articles</option>
      </select>

      <label htmlFor="targetAudience">Target Audience</label>
      <input type="text" id="targetAudience" {...register("targetAudience")} />

      <label htmlFor="features">Features (comma-separated)</label>
      <textarea id="features" rows={4} placeholder="e.g., search, comments, social sharing" {...register("features", { required: true })} />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>

      {/* Error messages */}
      {errors.businessName && <p>This field is required</p>}
      {errors.contentCategory && <p>This field is required</p>}
      {errors.features && <p>This field is required</p>}
    </StyledForm>
  );
};

export default BusinessSpecificationForm;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  contentCategory: string; // e.g., blog, news, articles
  targetAudience: string;
  features: string[];
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const BusinessSpecificationForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // API call or business logic here
    console.log(data);
    setTimeout(() => {
      alert('Business specification created successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="businessName">Business Name</label>
      <input type="text" id="businessName" {...register("businessName", { required: true })} />

      <label htmlFor="description">Description</label>
      <textarea id="description" rows={4} {...register("description")} />

      <label htmlFor="contentCategory">Content Category</label>
      <select id="contentCategory" {...register("contentCategory", { required: true })}>
        <option value="">Select a category...</option>
        <option value="blog">Blog</option>
        <option value="news">News</option>
        <option value="articles">Articles</option>
      </select>

      <label htmlFor="targetAudience">Target Audience</label>
      <input type="text" id="targetAudience" {...register("targetAudience")} />

      <label htmlFor="features">Features (comma-separated)</label>
      <textarea id="features" rows={4} placeholder="e.g., search, comments, social sharing" {...register("features", { required: true })} />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>

      {/* Error messages */}
      {errors.businessName && <p>This field is required</p>}
      {errors.contentCategory && <p>This field is required</p>}
      {errors.features && <p>This field is required</p>}
    </StyledForm>
  );
};

export default BusinessSpecificationForm;