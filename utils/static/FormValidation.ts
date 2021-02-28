class FormValidation {
  public acceptedMimeTypes =
    '.pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  public email = () => ({
    required: { value: true, message: 'Email is required' },
    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
  });

  public name = () => ({
    required: { value: true, message: 'Name is required' },
    maxLength: 100,
  });

  public phone = () => ({
    required: { value: true, message: 'Phone is required' },
    minLength: 9,
    maxLength: 13,
    pattern: { value: /^\+[1-9]\d{10,14}$/, message: 'Phone number is not valid' },
  });

  public file = (file?: File) => {
    const maxAllowedSize = 5 * 1024 * 1024;
    if (!file) return '';
    if (file.size > maxAllowedSize) return 'File must be smaller than 5MB';
    return '';
  };
}

export default new FormValidation();
