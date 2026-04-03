import Link from "next/link";
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import PropertyFilters from "../src/components/PropertyFilters"; // Naya Component Import Kiya

// Dummy data for visualizing the grid
const properties = [
  {
    id: 1,
    title: "Luxury Villa with Private Pool",
    location: "Koramangala, Bangalore",
    price: "₹4.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    shortDesc: "A stunning modern villa featuring a private pool, open-concept living area, and premium finishes throughout.",
  },
  {
    id: 2,
    title: "Modern Seaview Apartment",
    location: "Bandra West, Mumbai",
    price: "₹3.2 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    shortDesc: "High-rise apartment offering panoramic ocean views, smart home features, and exclusive clubhouse access.",
  },
  {
    id: 3,
    title: "Cozy Suburb Duplex",
    location: "Gachibowli, Hyderabad",
    price: "₹1.8 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    shortDesc: "Perfect family home in a quiet neighborhood with a spacious backyard and modern kitchen.",
  },
  {
    id: 4,
    title: "Premium Sky Penthouse",
    location: "Golf Course Road, Gurgaon",
    price: "₹8.5 Cr",
    beds: 5,
    baths: 5,
    sqft: "5,500",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?q=80&w=800&auto=format&fit=crop",
    shortDesc: "Ultra-luxury penthouse with a private terrace garden, dedicated elevator, and 24/7 concierge service.",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find your next <span className="text-blue-600">perfect home.</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-500">
            Browse through thousands of premium properties, from luxury villas to cozy apartments. Your dream home is just a search away.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* 2. Filter Component Installed Here */}
        <PropertyFilters />

        {/* 3. Hero Cards / Property Grid Section */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <div key={property.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <button 
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-gray-400 shadow-sm backdrop-blur-sm transition-colors hover:text-red-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
                
                <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-bold text-gray-900 shadow-sm backdrop-blur-md">
                  {property.price}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-5">
                <Link href={`/property/${property.id}`} className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
                  <h3 className="line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {property.title}
                  </h3>
                </Link>
                
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <span className="truncate">{property.location}</span>
                </div>

                <p className="mt-3 line-clamp-2 text-sm text-gray-600 flex-grow">
                  {property.shortDesc}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-600">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5" title="Bedrooms">
                      <Bed className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Bathrooms">
                      <Bath className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Square Feet">
                      <Square className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{property.sqft}</span>
                    </div>
                  </div>
                  <Link href={`/property/${property.id}`} className="text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                     <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}