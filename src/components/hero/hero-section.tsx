import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <h1 className="text-5xl font-bold mb-6">
      Share Your Voice With The World
    </h1>
    <p className="text-neutral-400 text-xl mb-8 max-w-2xl mx-auto">
      Create, share, and discover amazing podcasts. Join our community of creators
      and listeners today.
    </p>
    <Button size="lg">Start Your Podcast</Button>
  </motion.div>
);