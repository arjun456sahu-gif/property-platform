import Link from "next/link";
import { Heart, MapPin, Bed, Bath, Square, Phone, Map, Share } from "lucide-react";
import PropertyFeedback from "../../../src/components/PropertyFeedback"; // Naya Component

// Dummy fetch function
async function getPropertyDetails(id: string) {
  return {
    id,
    title: "Luxury Villa with Private Pool",
    location: "Koramangala, Bangalore",
    price: "₹4.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description: "Welcome to your dream home. This stunning modern villa features a private pool, an open-concept living area with floor-to-ceiling windows, and premium marble finishes throughout. The chef's kitchen is equipped with top-of-the-line appliances. Located in a secure, gated community with 24/7 security, lush green parks, and close proximity to top international schools.",
    agentPhone: "+91 98765 43210",
    rating: 4.8,
    reviews: 124,
  };
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await getPropertyDetails(params.id);

  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-0"> 
      
      {/* 1. Property Image Header */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] bg-gray-200">
        <img src={property.image} alt={property.title} className="h-full w-full object-cover" />
        
        <button className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 text-gray-400 shadow-lg backdrop-blur-sm transition-all hover:text-red-500 hover:scale-110">
          <Heart className="h-6 w-6" />
        </button>

        <button className="absolute right-4 top-16 z-10 mt-2 rounded-full bg-white/90 p-3 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:text-blue-600 hover:scale-110">
          <Share className="h-5 w-5" />
        </button>
      </div>

      {/* 2. Main Content Container */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Title & Price Row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-center sm:text-left">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{property.title}</h1>
            <div className="mt-2 flex items-center justify-center sm:justify-start gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-lg">{property.location}</span>
            </div>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <p className="text-3xl font-black text-blue-600">{property.price}</p>
            <p className="text-sm font-medium text-gray-500 mt-1">Estimated EMI: ₹1.2L / month</p>
          </div>
        </div>

        {/* Highlight Specs (Centered Cards) */}
        <div className="mt-10 mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 rounded-3xl bg-gray-50 p-6 sm:p-8 border border-gray-100">
          <div className="flex min-w-[100px] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <Bed className="h-8 w-8 text-blue-600" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Bedrooms</p>
            <p className="text-xl font-black text-gray-900">{property.beds}</p>
          </div>
          <div className="flex min-w-[100px] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <Bath className="h-8 w-8 text-blue-600" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Bathrooms</p>
            <p className="text-xl font-black text-gray-900">{property.baths}</p>
          </div>
          <div className="flex min-w-[100px] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <Square className="h-8 w-8 text-blue-600" />
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Area</p>
            <p className="text-xl font-black text-gray-900">{property.sqft}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12 px-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {property.description}
          </p>
        </div>

        {/* Feedback / Rating Section Component */}
        <PropertyFeedback rating={property.rating} reviews={property.reviews} />

      </div>

      {/* 3. Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] sm:relative sm:shadow-none sm:border-none sm:bg-transparent sm:mt-4 sm:pb-12">
        <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
          <Link 
            href={`http://googleusercontent.com/maps.google.com/?q=${property.location}`}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-100 px-4 py-4 font-bold text-gray-900 transition-colors hover:bg-gray-200"
          >
            <Map className="h-5 w-5" />
            <span className="hidden xs:inline">View Map</span>
            <span className="xs:hidden">Map</span>
          </Link>

          <a 
            href={`tel:${property.agentPhone}`}
            className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-4 font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg">Contact Agent</span>
          </a>
        </div>
      </div>

    </main>
  );
}