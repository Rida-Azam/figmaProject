import Hero from "./components/hero";
import RecentPost from "./components/recentPost";
import FeaturedWork from "./components/featuredWork";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentPost />
      {/* Featured Work Section */}
      <FeaturedWork />
    </div>
  );
}
