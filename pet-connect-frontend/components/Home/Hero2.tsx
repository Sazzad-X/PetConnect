import Image from "next/image";
import { Button } from "@/components/ui/button";
import SearchBar from "./Search";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  dark:from-blue-900 dark:to-green-900 py-20">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        {/* Headline */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Find Your Perfect Companion Today!
        </h1>

        {/* Subtext */}
        <p className="mb-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Browse thousands of pets, track adoption rates, and access pet care
          insights to make informed decisions.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-lg">
          <SearchBar />
        </div>

        {/* Optional Call-to-Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Button >
            View All Pets
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
