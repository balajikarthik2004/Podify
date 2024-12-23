import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export const StatCard = ({ icon: Icon, value, label, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
    className="bg-neutral-900 rounded-lg p-6 text-center"
  >
    <Icon className="w-8 h-8 mx-auto mb-4 text-pink-600" />
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-neutral-400">{label}</div>
  </motion.div>
);