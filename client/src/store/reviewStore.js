import { create } from "zustand";
import axios from 'axios';
//import { useState } from 'react';
//const [loading, setLoading] = useState(true);
//if (loading) return <div className="loading">Loading...</div>;

export const useReviewStore = create((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
  createReview: async (newReview) => {
    if (!newReview.title || !newReview.user || !newReview.content || !newReview.published) {
      return { success: false, message:"Please provide fields of Title, User, Review, and Published Date." };
    }
    // http://localhost:5000 
    const res = await fetch(`https://capstone-back-end-ft5y.onrender.com/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
    });
    const result = await res.json();
    set((state) => ({ reviews: [...state.reviews, result.data] }));
    return { success: true, message: "Review added successfully." };
    
  },

  getReviews: async () => {
    //const res = await fetch(`http://localhost:5000/api/reviews`);
    //const results = await res.json();
    //set({ reviews: results.data });
    
    try {
      const response = await axios.get(`https://capstone-back-end-ft5y.onrender.com/api/reviews`);
      const results = response.data.data;
      set({ reviews: results });
    } catch (error) {
      alert(`Error fetching reviews`);
      console.error(`Error fetching reviews`, error);
    }
  },

  updateReview: async (reviewId, updatedReview) => {
    const res = await fetch(`https://capstone-back-end-ft5y.onrender.com/api/reviews/${reviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });
    const result = await res.json();
    if (!result.success) return { sucess: false, message: result.message };

    //Update the UI immediately, without needing a refresh
    set((state) => ({ 
      reviews: state.reviews.map((review) => (review._id === reviewId ? result.data : review)),
    }));
    return { success: true, message: "Review updated successfully." };
  },

  deleteReview: async (reviewId) => {
    const res = await fetch(`https://capstone-back-end-ft5y.onrender.com/api/reviews/${reviewId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (!result.success) return { success: false, message: result.message };
  
    //Update the UI immediately, without needing a refresh
    set((state) => ({ reviews: state.reviews.filter(review => review._id !== reviewId) }));
    return { success: true, message: "Review deleted successfully." };
  }
}));
