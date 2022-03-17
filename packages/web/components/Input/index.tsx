import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// import styles from './styles.module.scss';

interface InputProps {
	name: string;
	label: string;
	placeholder: string;
	icon: string;
	type: string;
}

export function Input({
	name,
	label,
	placeholder,
	icon,
	type,
	...rest
}: InputProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const { fieldName, defaultValue = '', registerField, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value'
		});
	}, [fieldName, registerField]);

	return (
		<>
			{/* <img src={icon} /> */}

			{!!label && <label htmlFor={fieldName}>{label}</label>}

			<input
				id={fieldName}
				name={fieldName}
				ref={inputRef}
				defaultValue={defaultValue}
				placeholder={placeholder}
				type={type}
				{...rest}
			/>

			{error && <span style={{ color: '#f00' }}>{error}</span>}
		</>
	);
}
