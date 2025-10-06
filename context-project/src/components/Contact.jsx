import { useContact } from '../hooks/useContact';

export default function Contact() {
	const { contactInfo, formData, formStatus, updateFormData, submitForm } = useContact();

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm(formData);
	};

	const handleInputChange = (e) => {
		updateFormData(e.target.name, e.target.value);
	};

	return (
		<section className="contact">
			<div className="container">
				<h2>Get In Touch</h2>
				<div className="contact-content">
					<div className="contact-info">
						<h3>Contact Information</h3>
						<div className="contact-item">
							<strong>Email:</strong>
							<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
						</div>
						<div className="social-links">
							<h4>Follow Me</h4>
							<div className="social-icons">
								<a href={contactInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
									LinkedIn
								</a>
								<a href={contactInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
									GitHub
								</a>
								<a href={contactInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
									Twitter
								</a>
							</div>
						</div>
					</div>
					<div className="contact-form">
						<h3>Send a Message</h3>
						{formStatus.success && (
							<div className="success-message">Message sent successfully!</div>
						)}
						{formStatus.error && (
							<div className="error-message">{formStatus.error}</div>
						)}
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleInputChange}
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="btn-primary"
								disabled={formStatus.loading}
							>
								{formStatus.loading ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}