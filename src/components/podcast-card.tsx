import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface PodcastCardProps {
  title: string;
  author: string;
  image: string;
  duration: string;
}

export const PodcastCard = ({ title, author, image, duration }: PodcastCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-neutral-900 rounded-xl overflow-hidden"
    >
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Button
          variant="default"
          size="sm"
          className="absolute bottom-4 right-4"
        >
          <Play className="w-4 h-4 mr-2" />
          Play
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-neutral-400 text-sm">{author}</p>
        <p className="text-neutral-500 text-xs mt-1">{duration}</p>
      </div>
    </motion.div>
  );
};