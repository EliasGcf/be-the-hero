import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// import { Container } from './styles';
import { Input as CInput } from '../../Input'

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, /* error */ } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <CInput ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
}
