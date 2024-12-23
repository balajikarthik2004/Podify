import { motion } from "framer-motion";
import { PodcastCard } from "../podcast-card";

const featuredPodcasts = [
  {
    title: "The Creative Mind",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=60",
    duration: "45 min",
  },
  {
    title: "Tech Insights Daily",
    author: "Mike Chen",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&auto=format&fit=crop&q=60",
    duration: "30 min",
  },
  {
    title: "Future Forward",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
    duration: "60 min",
  },
];

export const FeaturedSection = () => (
  <section className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Podcasts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredPodcasts.map((podcast, index) => (
          <motion.div
            key={podcast.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <PodcastCard {...podcast} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);