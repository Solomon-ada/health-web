import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function ContactSection() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Wellness Consultation Inquiry');
  const [message, setMessage] = useState('');

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${name || 'Visitor'}\n\n${message}`;
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
            Connect With Our Team
          </h2>
          <p className="mt-3 text-base text-[#4A5750] leading-relaxed">
            Have questions about our wellness consultations, health education resources, or hours? Reach out directly by phone, email, or messaging apps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#1B4332]/10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E8F0EB] text-[#1B4332] shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1B4332]">Phone</h3>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-base font-medium text-[#1F2923] hover:text-[#2D6A4F] transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E8F0EB] text-[#1B4332] shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1B4332]">Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base font-medium text-[#1F2923] hover:text-[#2D6A4F] transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E8F0EB] text-[#1B4332] shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1B4332]">
                    Physical Address
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A5750]">
                    {siteConfig.contact.address}
                  </p>
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-[#2D6A4F] hover:text-[#1B4332] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#E8F0EB] text-[#1B4332] shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1B4332]">
                    Consultation Hours
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A5750]">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-5 border-t border-[#1B4332]/10">
                <h3 className="text-sm font-semibold text-[#1B4332] mb-3">
                  Messaging &amp; Social Channels
                </h3>
                <div className="flex flex-wrap gap-3">
                  {siteConfig.contact.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#1B4332]/15 text-sm font-medium text-[#1B4332] hover:bg-[#E8F0EB] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#2D6A4F]" aria-hidden="true" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Email Inquiry Composer (opens user's mail client) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#F2ECE1] border border-[#1B4332]/10">
            <h3 className="font-serif text-2xl font-semibold text-[#1B4332] mb-2">
              Send an Email Inquiry
            </h3>
            <p className="text-sm text-[#4A5750] mb-6">
              Fill out the fields below to open a pre-addressed message in your email app. No personal data is stored on this static website.
            </p>

            <form onSubmit={handleMailtoSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#1B4332] mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B4332]/20 text-sm text-[#1F2923] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-[#1B4332] mb-1.5"
                >
                  Topic
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B4332]/20 text-sm text-[#1F2923] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                >
                  <option value="Wellness Consultation Inquiry">
                    Wellness Consultation Inquiry
                  </option>
                  <option value="Health Education & Workshops">
                    Health Education &amp; Workshops
                  </option>
                  <option value="Nutrition & Lifestyle Guidance">
                    Nutrition &amp; Lifestyle Guidance
                  </option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#1B4332] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you or your family? (Please avoid sharing sensitive medical records.)"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B4332]/20 text-sm text-[#1F2923] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-[#1B4332] text-[#FAF7F2] font-semibold text-sm hover:bg-[#2D6A4F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B4332]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Compose Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
