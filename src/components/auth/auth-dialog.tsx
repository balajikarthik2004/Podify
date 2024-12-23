import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <div className="bg-neutral-900 rounded-xl p-6 w-full max-w-md relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold mb-6">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <form className="space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 bg-neutral-800 rounded-md text-white"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-md text-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-md text-white"
                />
                <Button className="w-full">
                  {isLogin ? "Sign In" : "Sign Up"}
                </Button>
              </form>
              <p className="text-center mt-4 text-neutral-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-pink-600 ml-2 hover:underline"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};