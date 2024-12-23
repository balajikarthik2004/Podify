import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { AuthDialog } from "../auth/auth-dialog";

export const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-pink-600"
            >
              <Link to="/">Podify</Link>
            </motion.div>
            <div className="hidden md:flex space-x-6">
              <NavLink href="/" isActive={isActive("/")}>Home</NavLink>
              <NavLink href="/explore" isActive={isActive("/explore")}>Explore</NavLink>
              <NavLink href="/categories" isActive={isActive("/categories")}>Categories</NavLink>
              <NavLink href="/creators" isActive={isActive("/creators")}>For Creators</NavLink>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setIsAuthOpen(true)}>
                Sign In
              </Button>
              <Button onClick={() => setIsAuthOpen(true)}>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>
      <AuthDialog isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link to={href}>
    <motion.span
      className={`text-${isActive ? 'white' : 'neutral-400'} hover:text-white transition-colors relative`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-pink-600"
          initial={false}
        />
      )}
    </motion.span>
  </Link>
);