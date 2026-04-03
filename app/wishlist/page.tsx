import Link from "next/link";
import { Trash2, MapPin, Bed, Bath, Square, HeartCrack } from "lucide-react";

// Dummy saved properties
const savedProperties = [
  {
    id: 1,
    title: "Luxury Villa with Private Pool",
    location: "Koramangala, Bangalore",
    price: "₹4.5 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
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
  }
];

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">My Wishlist</h1>
          <p className="mt-2 text-gray-500">You have {savedProperties.length} saved properties.</p>
        </div>

        {savedProperties.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-24 text-center">
            <HeartCrack className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-bold text-gray-900">Your wishlist is empty</h2>
            <p className="mt-2 text-gray-500 mb-6">Explore properties and tap the heart icon to save them here.</p>
            <Link href="/" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">
              Explore Properties
            </Link>
          </div>
        ) : (
          // Saved Properties Grid
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedProperties.map((property) => (
              <div key={property.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <img src={property.image} alt={property.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Remove from Wishlist Button */}
                  <button className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2.5 text-red-500 shadow-sm backdrop-blur-sm transition-colors hover:bg-red-50 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-bold text-gray-900 shadow-sm backdrop-blur-md">
                    {property.price}
                  </div>
                </div>

                <div className="flex flex-col p-5">
                  <Link href={`/property/${property.id}`}>
                    <h3 className="line-clamp-1 text-lg font-bold text-gray-900 group-hover:text-blue-600">{property.title}</h3>
                  </Link>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{property.location}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5"><Bed className="h-4 w-4" /><span>{property.beds}</span></div>
                      <div className="flex items-center gap-1.5"><Bath className="h-4 w-4" /><span>{property.baths}</span></div>
                      <div className="flex items-center gap-1.5"><Square className="h-4 w-4" /><span>{property.sqft}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}