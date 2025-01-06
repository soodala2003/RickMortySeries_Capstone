import { create } from "zustand";

export const useReviewStore = create((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
  createReview: async (newReview) => {
    if (!newReview.title || !newReview.user || !newReview.content || !newReview.published) {
      return { success: false, message:"Please provide fields of Title, User, Review, and Published Date." };
    }
    const res = await fetch(`http://localhost:5000/api/season1/episodes/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
    });
    const result = await res.json();
    set((state) => ({ reviews: [...state.reviews, result.data] }));
    return { success: true, message:"Review added successfully." };
  },

  /* fetchReviews: async () => {
    const res = await fetch(`http://localhost:5000/api/season1`);
    const results = await res.json();
    set({ Reviews: results.data });
  } */
}));
