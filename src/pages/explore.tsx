import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PodcastCard } from "../components/podcast-card";

const trendingPodcasts = [
  {
    title: "Mind & Meditation",
    author: "Dr. Emma Wilson",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
    duration: "35 min",
  },
  {
    title: "Tech Today",
    author: "James Smith",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
    duration: "45 min",
  },
  {
    title: "Business Insights",
    author: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60",
    duration: "30 min",
  },
];

export const Explore = () => {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Explore Podcasts</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search podcasts..."
              className="w-full px-4 py-3 bg-neutral-900 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          </div>
        </motion.div>

        <section>
          <h2 className="text-2xl font-bold mb-8">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PodcastCard {...podcast} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};