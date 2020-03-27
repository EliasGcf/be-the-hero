import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// import { Container } from './styles';
import { TextArea as CTextArea } from '../../Input'

export default function TextArea({ name, ...rest }) {
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
    <CTextArea ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
}
