import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { siteConfig } from '@/config/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Twitter,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube,
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.product.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.product.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.industries.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.industries.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.roles.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.roles.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.resources.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.resources.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.company.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.company.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteContent.footer.legal.title}</h3>
            <ul className="space-y-2">
              {siteContent.footer.legal.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Email</div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Phone</div>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Address</div>
              <p className="text-sm">
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{' '}
                {siteConfig.contact.address.zip}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">{siteContent.footer.copyright}</div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {siteContent.footer.social.map((social) => {
              const Icon = iconMap[social.icon] || Twitter;
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                  aria-label={social.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
