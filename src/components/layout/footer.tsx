import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-600 mb-4">Podify</h3>
            <p className="text-neutral-400">Share your voice with the world through engaging podcasts.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/explore" className="hover:text-pink-600 transition-colors">Explore</a></li>
              <li><a href="/categories" className="hover:text-pink-600 transition-colors">Categories</a></li>
              <li><a href="/creators" className="hover:text-pink-600 transition-colors">For Creators</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/help" className="hover:text-pink-600 transition-colors">Help Center</a></li>
              <li><a href="/contact" className="hover:text-pink-600 transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-400 hover:text-pink-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Podify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};