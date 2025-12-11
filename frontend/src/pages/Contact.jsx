import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Use the full backend URL
      const res = await axios.post(`${apiUrl}/send-email`, formData);
      alert(res.data.msg);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-5 bg-gray-50 flex flex-col items-center px-4 relative">
      <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">Contact Us</h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl text-center">
        Reach out to us for any courier inquiries or support.
      </p>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-4">
            <MapPin size={28} color="#6366F1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
              <p className="text-gray-600">363, Bazar Mohalla, Tughlaqabad Village, Tughlakabad, New Delhi, Delhi 110044</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={28} color="#6366F1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">kolhanglobal@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={28} color="#6366F1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+91 92664 24699</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
