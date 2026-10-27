import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

import { useEffect, useRef, useState } from "react";

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [contactMethod, setContactMethod] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const successRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = "Please enter your full name."
    } else if (!/^[A-Za-zÀ-ÿ'\-\s]+$/.test(name.trim())) {
      newErrors.name = "Please enter only letters, spaces, hyphens, and apostrophes (e.g., John Doe, O'Connor, Anne-Marie)."
    }
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Please enter a valid email address, e.g., email@example.com"
    }
    if (phone.trim() && !/^[0-9\s\-()+]+$/.test(phone)) {
      newErrors.phone = "Phone number can only contain digits, spaces, hyphens, parentheses, and plus signs."
    }
    if (!contactMethod) {
      newErrors.contactMethod = "Please select a preferred contact method."
    }
    if (!message.trim()) {
      newErrors.message = "Please enter your message."
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)

      setName('')
      setEmail('')
      setPhone('')
      setContactMethod('')
      setMessage('')
    } else {
      setSuccess(false)
    }
  }

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.focus()
    }
  }, [success])

  return (
    <div className="contact-form">
      <h2 className="contact-title">Contact me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus imperdiet erat in efficitur. Cras ex neque, dapibus nec malesuada in, sollicitudin vitae justo. </p>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-div">
          <div className="form-group">
            <label htmlFor="name">Name<span className="required" aria-hidden="true">Required</span></label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            required />
          {errors.name && (
            <span id="name-error"
              className="error-message"
              role="alert">
              <span aria-hidden="true"><FaExclamationCircle /></span>
              {errors.name}
            </span>)}
        </div>
        <div className="form-div">
          <div className="form-group">
            <label htmlFor="email">Email<span className="required" aria-hidden="true">Required</span></label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            required />
          {errors.email && (
            <span id="email-error"
              className="error-message"
              role="alert"><span aria-hidden="true"><FaExclamationCircle /></span>
              {errors.email}
            </span>
          )}
        </div>
        <div className="form-div">
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="123 456 7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone} />
          {errors.phone && (
            <span id="phone-error"
              className="error-message"
              role="alert">
              <span aria-hidden="true"><FaExclamationCircle /></span>
              {errors.phone}
            </span>
          )}
        </div>
        <div className="form-div">
          <fieldset
            aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
            aria-invalid={!!errors.contactMethod}>
            <legend className="form-legend">Preferred contact method<span className="required" aria-hidden="true">Required</span></legend>
            <div className="radio-content">
              <div className="radio-group">
                <input
                  type="radio"
                  id="method-none"
                  name="contact-method"
                  value="method-none"
                  required
                  defaultChecked
                  checked={contactMethod === 'method-none'}
                  onChange={(e) => setContactMethod(e.target.value)}
                  aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
                  aria-invalid={!!errors.contactMethod} />
                <label htmlFor="method-none">No preference</label><br />
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  id="method-email"
                  name="contact-method"
                  value="method-email"
                  checked={contactMethod === 'method-email'}
                  onChange={(e) => setContactMethod(e.target.value)}
                  aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
                  aria-invalid={!!errors.contactMethod} />
                <label htmlFor="method-email">Email</label><br />
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  id="method-phone"
                  name="contact-method"
                  value="method-phone"
                  checked={contactMethod === 'method-phone'}
                  onChange={(e) => setContactMethod(e.target.value)}
                  aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}
                  aria-invalid={!!errors.contactMethod} />
                <label htmlFor="method-phone">Phone</label>
              </div>
            </div>
          </fieldset>
          {errors.contactMethod && (
            <span id="contactMethod-error"
              className="error-message"
              role="alert">
              <span aria-hidden="true"><FaExclamationCircle /></span>
              {errors.contactMethod}
            </span>
          )}
        </div>
        <div className="form-div">
          <div className="form-group">
            <label htmlFor="message">Message<span className="required" aria-hidden="true">Required</span></label>
          </div>
          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            required></textarea>
          {errors.message && (
            <span id="message-error"
              className="error-message"
              role="alert">
              <span aria-hidden="true"><FaExclamationCircle /></span>
              {errors.message}
            </span>
          )}
        </div>
        <button className="submit-button" type="submit">Submit</button>
        <div
          aria-live="polite"
          role="status"
          className="sr-live">
          {success && (<div className="success-message"><FaCheckCircle aria-hidden="true" className="success-icon" />Your message was sent successfully!</div>)}
        </div>
      </form>
    </div>
  )
}

export default ContactForm;