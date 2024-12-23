import { Headphones, TrendingUp, Users } from "lucide-react";
import { HeroSection } from "../components/hero/hero-section";
import { StatCard } from "../components/stats/stat-card";
import { FeaturedSection } from "../components/featured/featured-section";

const stats = [
  { label: "Active Users", value: "2M+", icon: Users },
  { label: "Monthly Listens", value: "7M+", icon: Headphones },
  { label: "Trending Episodes", value: "850+", icon: TrendingUp },
];

export const Home = () => {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>
      <FeaturedSection />
    </main>
  );
};