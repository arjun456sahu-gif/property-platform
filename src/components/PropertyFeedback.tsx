"use client";

import { useState } from "react";
import { Star, MessageSquare, ThumbsUp, X, Send } from "lucide-react";

interface PropertyFeedbackProps {
  rating: number;
  reviews: number;
}

// Initial Dummy Data
const initialReviews = [
  {
    id: 1,
    name: "Rohan Gupta",
    date: "2 weeks ago",
    rating: 5,
    comment: "Absolutely loved the property. The private pool is well maintained and the location is very peaceful. Highly recommended for families.",
  },
  {
    id: 2,
    name: "Priya Desai",
    date: "1 month ago",
    rating: 4,
    comment: "Spacious rooms and great natural light. The kitchen fittings could be a bit more modern, but overall a great deal in this locality.",
  }
];

export default function PropertyFeedback({ rating, reviews }: PropertyFeedbackProps) {
  // States for handling the reviews and form
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  // Handle Form Submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating === 0 || comment.trim() === "") return;

    const newReview = {
      id: Date.now(),
      name: "Arjun (You)", // Taking current user name
      date: "Just now",
      rating: newRating,
      comment: comment,
    };

    // Add new review to the top of the list
    setReviewsList([newReview, ...reviewsList]);
    
    // Reset and close form
    setNewRating(0);
    setComment("");
    setIsFormOpen(false);
  };

  return (
    <div className="mt-12">
      
      {/* 1. Top Feedback Header Box */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Property Ratings & Reviews</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-1">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-bold text-yellow-700">{rating}</span>
              </div>
              <span className="text-gray-500 font-medium">
                Based on {reviews + (reviewsList.length - initialReviews.length)} reviews
              </span>
            </div>
          </div>

          {!isFormOpen && (
            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <MessageSquare className="h-5 w-5 text-gray-500" />
              Write a Review
            </button>
          )}
        </div>
      </div>

      {/* 2. Interactive "Write a Review" Form */}
      {isFormOpen && (
        <div className="mt-6 animate-in slide-in-from-top-4 fade-in duration-300 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8 shadow-inner">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Share your experience</h3>
            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmitReview} className="space-y-6">
            {/* Interactive Star Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Rate this property</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star 
                      className={`h-8 w-8 transition-colors ${
                        star <= (hoverRating || newRating) 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text Area */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Review</label>
              <textarea
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What did you like or dislike about this property?"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button 
                type="button" 
                onClick={() => setIsFormOpen(false)}
                className="px-5 py-2.5 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={newRating === 0 || comment.trim() === ""}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                Post Review
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 3. Review Text List Below */}
      <div className="mt-8 space-y-6 px-2">
        <h3 className="text-lg font-bold text-gray-900">Recent Reviews</h3>
        
        {reviewsList.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 leading-none">{review.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} 
                  />
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              "{review.comment}"
            </p>
            
            <button className="mt-3 flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">
              <ThumbsUp className="h-4 w-4" /> Helpful
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}