import React from 'react';

export function useFormWithValidation() {
  
  const [values, setValues] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  

  function handleChange(evt) {
    const input = evt.target;
    const name = input.name;
    const value = input.value;

    setValues({...values, [name]: value});
    setIsValid(input.closest('form').checkValidity());
    setErrors({...errors, [name]: input.validationMessage});
  }


  const resetForm = React.useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid)
},
    [setValues, setErrors, setIsValid]);

  return {handleChange, setValues, setIsValid, setErrors, resetForm, values, isValid, errors };
};