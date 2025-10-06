import React, { useState } from 'react';
import ContactContext from '../contexts/ContactContext';

export default function ContactProvider({ children }) {
	const [contactInfo] = useState({
		name: "Youcef Madadi",
		title: "React JS Trainer & Freelancer",
		email: "youcef.madadi@email.com",
		socialLinks: {
			linkedin: "https://linkedin.com/in/youcef-madadi",
			github: "https://github.com/youcef-madadi",
			twitter: "https://twitter.com/youcef_madadi"
		}
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [formStatus, setFormStatus] = useState({
		loading: false,
		success: false,
		error: null
	});

	const updateFormData = (field, value) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}));
	};

	const resetForm = () => {
		setFormData({
			name: '',
			email: '',
			message: ''
		});
		setFormStatus({
			loading: false,
			success: false,
			error: null
		});
	};

	const submitForm = async (formData) => {
		setFormStatus({ loading: true, success: false, error: null });

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));

			// In a real app, you would send the form data to your backend
			console.log('Form submitted:', formData);

			setFormStatus({ loading: false, success: true, error: null });
			resetForm();
		} catch (error) {
			setFormStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
		}
	};

	const value = {
		contactInfo,
		formData,
		formStatus,
		updateFormData,
		resetForm,
		submitForm
	};

	return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}