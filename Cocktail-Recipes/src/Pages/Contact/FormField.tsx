// FormField.tsx
import React from 'react';

interface FormFieldProps {
  text: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ text, name, type, value, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} value={value} onChange={onChange} required></textarea>
      ) : (
        <input type={type} id={name} name={name} value={value} onChange={onChange} required />
      )}
    </>
  );
};

export default FormField;
