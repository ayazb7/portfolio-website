import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import './Contact.css';

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonVariants = {
  initial: { opacity: 1, scale: 1 },
  sending: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  success: { scale: [1, 1.2, 1], backgroundColor: "#28a745", transition: { duration: 0.5, ease: "easeInOut" } },
  error: { scale: [1, 1.2, 1], backgroundColor: "#dc3545", transition: { duration: 0.5, ease: "easeInOut" } }
};

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('initial');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    emailjs.send('service_clpdrg6', 'template_c4avtk6', formData, '271eXbyveBonKVI_K')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setSubmitStatus('initial'), 3000); 
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('initial'), 3000);
      });
  };

  return (
    <div className="contact">
      <motion.h2 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        CONTACT
      </motion.h2>
      
      <motion.div
        className="contact-card"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="NAME"
            className="contact-input"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="EMAIL"
            className="contact-input"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="MESSAGE"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button
            className={`contact-button ${submitStatus}`}
            type="submit"
            disabled={isSubmitting}
            variants={buttonVariants}
            initial="initial"
            animate={submitStatus}
          >
            {submitStatus === 'sending' && 'Sending...'}
            {submitStatus === 'success' && '✔'}
            {submitStatus === 'error' && '✖'}
            {submitStatus === 'initial' && !isSubmitting && 'Submit'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
