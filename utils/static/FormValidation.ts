import { isPossiblePhoneNumber } from 'libphonenumber-js';
import { isNotEmpty, isEmail, maxLength } from 'class-validator';

export const acceptedMimeTypes =
  '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

type ValidationFn = (value?: string) => string | true;

export class FormValidator {
  public static all = (...validationFns: ValidationFn[]) => (value?: string) => {
    const errors = validationFns.map(fn => fn(value));

    return errors.find(e => e !== true) || true;
  };

  public static isNotEmpty: ValidationFn = value => (isNotEmpty(value) ? true : 'Required');

  public static isValidEmail = (value?: string) => (isEmail(value) ? true : 'Invalid email address');

  public static isValidPhoneNumber = (value?: string) => {
    if (!value) {
      return 'Invalid phone number';
    }

    return isPossiblePhoneNumber(value, 'HR') ? true : 'Invalid phone number';
  };

  public static maxLength = (length: number) => (value?: string) =>
    maxLength(value, length) ? true : `Exceeds max. length allowed (${length})`;

  public static isValidFile = (file?: File | string) => {
    if (!file || typeof file === 'string') {
      return true;
    }

    if (!acceptedMimeTypes.includes(file.type)) {
      return 'Invalid file type.';
    }

    const maxAllowedSize = 5 * 1024 * 1024;

    if (file.size > maxAllowedSize) {
      return 'File must be smaller than 5MB';
    }

    return true;
  };
}
