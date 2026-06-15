import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Meeting Management', href: '/features/meeting-management' },
      { label: 'Documents Management', href: '/features/document-management' },
      { label: 'AI', href: '/features/ai-minutes' },
      { label: 'Security', href: '/security' },
      { label: 'Integrations', href: '/features/integrations' },
    ],
    solutions: [
      { label: 'Education', href: '/solutions/education' },
      { label: 'Government', href: '/solutions/government' },
      { label: 'NGOs', href: '/solutions/ngos' },
      { label: 'Enterprise', href: '/solutions/enterprise' },
    ],
    resources: [
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Help Center', href: '/resources/help' },
      { label: 'Contact', href: '/contact' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
  };

  return (
    <footer className="bg-gray-700 text-gray-400">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold text-white">Board</span>
            </Link>
            <p className="text-sm mb-3">Modern governance platform for boards and committees.</p>
            <div className="flex space-x-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://X.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <p className="text-sm mb-3 md:mb-0">
            © {currentYear} Kikao360 Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
