import { motion } from "framer-motion";
import { Mic, Radio, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";

const features = [
  {
    icon: Mic,
    title: "Professional Tools",
    description: "Access high-quality recording and editing tools designed for podcasters.",
  },
  {
    icon: Radio,
    title: "Global Reach",
    description: "Distribute your podcast to millions of potential listeners worldwide.",
  },
  {
    icon: Share2,
    title: "Community Growth",
    description: "Build and engage with your audience through powerful analytics and insights.",
  },
];

export const Creators = () => {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Start Your Podcast Journey</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Join thousands of creators who are sharing their stories and building their audience with our powerful platform.
          </p>
          <Button size="lg" className="mt-8">
            Get Started Now
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 rounded-lg p-8 text-center"
            >
              <feature.icon className="w-12 h-12 text-pink-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Voice?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start creating your podcast today and join our community of passionate creators.
          </p>
          <Button variant="outline" size="lg">
            Launch Your Podcast
          </Button>
        </motion.div>
      </div>
    </main>
  );
};