import Image from "next/image";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">
        Property Platform Initialized 🚀
      </h1>
    </main>
    </>
  );
}