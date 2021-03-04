import { isPossiblePhoneNumber } from 'libphonenumber-js';
import { RegisterOptions } from 'react-hook-form';

export const acceptedMimeTypes =
  '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

export const validationSchemas: { [key: string]: RegisterOptions } = {
  email: {
    required: { value: true, message: 'Email is required' },
    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
  },
  name: {
    required: { value: true, message: 'Name is required' },
    maxLength: 100,
  },
  phone: {
    required: { value: true, message: 'Phone is required' },
    validate: (value: string) => isPossiblePhoneNumber(value, 'HR') || 'Phone number is not valid',
  },
};

export const fileValidation = (file: File) => {
  const maxAllowedSize = 5 * 1024 * 1024;
  if (file.size > maxAllowedSize) return 'File must be smaller than 5MB';
  return '';
};
