'use client';

/**
 * Contact Page Component
 * 
 * This component provides the contact page for the Byte website.
 * Features include:
 * - Contact form with validation
 * - FAQ accordion system
 * - Contact information display
 * - Discord webhook form submission
 * 
 * The component uses React hooks for state management and form handling.
 */

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// FAQ items with questions and answers about Byte's services
const faqItems = [
  {
    question: 'What services does Byte offer?',
    answer: 'We offer comprehensive digital solutions including cybersecurity services, technical documentation and blogs, custom Linux distributions and applications, developer tools and utilities, and custom AI models. Our team specializes in creating secure, innovative solutions using cutting-edge technologies.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our approach to meet your specific needs and budget requirements.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, Flutter, and more. We choose the best technology stack for each project based on requirements and goals.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your digital solutions continue to perform optimally. This includes updates, security patches, and technical support.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain transparent communication throughout the project lifecycle. You\'ll have a dedicated project manager and regular check-ins to keep you updated on progress and address any questions.'
  }
];

export default function Contact() {
  // Form data state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });

  // State for FAQ accordion (which FAQ item is currently open)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with Discord webhook
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Discord webhook URL - replace with your actual webhook URL
      const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || 'YOUR_DISCORD_WEBHOOK_URL_HERE';
      
      // Create beautiful embed message
      const embed = {
        title: "🚀 New Project Request Received",
        description: "A new project submission has been received and requires your attention.",
        color: 0xffffff, // White color
        author: {
          name: "Byte Development Team",
          icon_url: "https://github.com/bytrum.png"
        },
        thumbnail: {
          url: "https://github.com/bytrum.png"
        },
        fields: [
          {
            name: "👤 **CLIENT INFORMATION**",
            value: `**Name:** ${formData.name || "Not provided"}\n\n**Email:** ${formData.email || "Not provided"}`,
            inline: false
          },
          {
            name: "💼 **PROJECT DETAILS**",
            value: `**Company:** ${formData.company || "Not provided"}\n\n**Budget:** ${formData.budget ? getBudgetDisplay(formData.budget) : "Not specified"}\n\n**Timeline:** ${formData.timeline ? getTimelineDisplay(formData.timeline) : "Not specified"}`,
            inline: false
          },
          {
            name: "📝 **PROJECT DESCRIPTION**",
            value: formData.message || "No message provided",
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Byte Bot • Project Submissions",
          icon_url: "https://github.com/bytrum.png"
        }
      };

      const payload = {
        embeds: [embed]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          budget: '',
          timeline: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to format budget display
  const getBudgetDisplay = (budget: string) => {
    const budgetMap: { [key: string]: string } = {
      'under-10k': 'Under $10,000',
      '10k-25k': '$10,000 - $25,000',
      '25k-50k': '$25,000 - $50,000',
      '50k-100k': '$50,000 - $100,000',
      'over-100k': 'Over $100,000'
    };
    return budgetMap[budget] || budget;
  };

  // Helper function to format timeline display
  const getTimelineDisplay = (timeline: string) => {
    const timelineMap: { [key: string]: string } = {
      'asap': 'ASAP',
      '1-2-months': '1-2 months',
      '3-6-months': '3-6 months',
      '6-months-plus': '6+ months'
    };
    return timelineMap[timeline] || timeline;
  };

  // Toggle FAQ accordion items
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">
            Get In Touch with <span className="byte-glow">Byte</span>
          </h1>
          <p className="page-subtitle">
            Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>hello@byte.com</p>
              <p className="contact-note">We&apos;ll respond within 24 hours</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <p className="contact-note">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>123 Innovation St, Tech City</p>
              <p className="contact-note">Schedule a meeting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-section">
              <h2 className="section-subtitle">Send Us a Message</h2>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you for your message! We&apos;ll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Sorry, there was an error sending your message. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Budget</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-glow"></span>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-subtitle">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                </button>
                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
