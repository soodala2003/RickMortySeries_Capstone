import React, { useState } from 'react';
import { useReviewStore } from "../../store/reviewStore";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import '../../assets/styles/reviews.css';

const ReviewCreatePage = () => {
  const [newReview, setNewReview] = useState({
    episode: "S01E01",
    id: 1,
    name: "Pilot",
    title: "",
    user: "",
    content: "",
    published: "",
  });

  const { createReview } = useReviewStore();

  const handleAddReview = async () => {
    const {success, message} = await createReview(newReview);

    if (!success) {
      toast.warn("Please provide fields of Title, User, Review, and Published Date.");
    } else {
      toast.success(message);
    }
  };

  return (
    <div className="review_create">
        <div className="review_box">
          <h1><b>Post Review</b></h1>
          <br></br>
          <input
            type="text"
            placeholder=' Review Title'
            value={newReview.title}
            onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
          /><br></br>
         
          <input
            type="text"
            placeholder=' User Name'
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
          /><br></br>

          <textarea
            id="text"
            placeholder=' Enter Review'
            name="review"
            rows="3" 
            cols="50"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}>
          </textarea><br></br>

          <input
            type="text"
            placeholder=' Published Date (MMM DD, YYYY)'
            value={newReview.published}
            onChange={(e) => setNewReview({ ...newReview, published: e.target.value })}
          /><br></br>

          <button onClick={handleAddReview}>
            <Link interval="1000" className="btn_add" to={``}>Add Review</Link>
          </button>
          <ToastContainer position="top-center" autoClose={3000} closeButton={false} theme="dark"/>
        </div>
    </div>
  );
};

export default ReviewCreatePage;