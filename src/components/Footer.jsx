import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Shopzy logo or name */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-400">Shopzy</h2>
            <p className="mt-2 text-sm">Your one-stop shop for everything!</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 md:space-x-12">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/help" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-2 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f hover:text-gray-400"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter hover:text-gray-400"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram hover:text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shopzy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
