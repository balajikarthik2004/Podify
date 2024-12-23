import { motion } from "framer-motion";
import { Headphones, Brain, Briefcase, Heart, Music, Code } from "lucide-react";

const categories = [
  { name: "Technology", icon: Code, count: "324 shows" },
  { name: "Business", icon: Briefcase, count: "218 shows" },
  { name: "Health", icon: Heart, count: "185 shows" },
  { name: "Music", icon: Music, count: "432 shows" },
  { name: "Education", icon: Brain, count: "267 shows" },
  { name: "Entertainment", icon: Headphones, count: "391 shows" },
];

export const Categories = () => {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Browse Categories
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-colors cursor-pointer group"
            >
              <category.icon className="w-8 h-8 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-neutral-400">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};