import React from 'react';

const ContactForm: React.FC = () => (
  <form name="contact" method="POST" data-netlify="true" className="space-y-4">
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label htmlFor="name" className="block text-sm font-semibold">
        Name
      </label>
      <input id="name" name="name" className="w-full border p-2" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-semibold">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full border p-2"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="w-full border p-2"
      ></textarea>
    </div>
    <button
      type="submit"
      className="rounded bg-bauhausBlue px-4 py-2 font-semibold text-white"
    >
      Send
    </button>
  </form>
);

export default ContactForm;
