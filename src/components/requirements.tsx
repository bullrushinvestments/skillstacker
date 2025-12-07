import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IRequirement {
  title: string;
  description?: string;
  isRequired: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IGatherRequirementsForm>();
  const toast = useToast();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Gathering requirements:', data.requirements);
      setLoading(false);
      toast({
        title: 'Success',
        description: 'Requirements gathered successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`requirement-${index}`} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-1">Title</label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`, { required: true })}
            aria-label={`Requirement title ${index + 1}`}
            placeholder={`Requirement Title ${index + 1}`}
            className="w-full p-2 border rounded mb-2"
          />
          <label htmlFor={`description-${index}`} className="block mb-1">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
            placeholder={`Requirement Description ${index + 1}`}
            rows={4}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        aria-label="Gather Requirements Button"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {loading ? 'Loading...' : 'Gather Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IRequirement {
  title: string;
  description?: string;
  isRequired: boolean;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IGatherRequirementsForm>();
  const toast = useToast();

  const onSubmit = (data: IGatherRequirementsForm) => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call
      console.log('Gathering requirements:', data.requirements);
      setLoading(false);
      toast({
        title: 'Success',
        description: 'Requirements gathered successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`requirement-${index}`} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-1">Title</label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`, { required: true })}
            aria-label={`Requirement title ${index + 1}`}
            placeholder={`Requirement Title ${index + 1}`}
            className="w-full p-2 border rounded mb-2"
          />
          <label htmlFor={`description-${index}`} className="block mb-1">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`)}
            aria-label={`Requirement description ${index + 1}`}
            placeholder={`Requirement Description ${index + 1}`}
            rows={4}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
      <button
        type="submit"
        disabled={loading || formState.isSubmitting}
        aria-label="Gather Requirements Button"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {loading ? 'Loading...' : 'Gather Requirements'}
      </button>
    </form>
  );
};

export default GatherRequirements;