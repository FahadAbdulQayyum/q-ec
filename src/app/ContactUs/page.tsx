import ContactUsComponent from "@/components/ContactUs"
import React from "react"

const ContactUs = () => {
  return (
    <div data-testid="contact-us-page">
      <h1 data-testid="contact-us-heading">Contact Uss</h1>
      <ContactUsComponent />
    </div>
  )
}

export default ContactUs
