import { ReactNode, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

export function Modal({ children, isOpen = false, ...rest }: ModalProps) {
	return (
		<ReactModal
			isOpen={isOpen}
			style={customStyles}
			contentLabel="Example Modal"
			{...rest}
		>
			{children}
		</ReactModal>
	);
}
