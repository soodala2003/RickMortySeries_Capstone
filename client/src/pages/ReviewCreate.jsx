import React, { useState } from 'react';
//import useToast from '@chakra-ui/toast';
//import { useToast } from '@chakra-ui/react';
import { Link } from "react-router-dom";

import { useReviewStore } from "../store/reviewStore";
import '../assets/styles/reviews.css';

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

  //const toast = useToast();
  const { createReview } = useReviewStore();

  const handleAddReview = async () => {
    const {success, message} = await createReview(newReview);
    if (!success) {
      alert("Please provide all fields of Title, User, Review, and Published Date.");
      /* toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      }); */
    } else {
      alert(message);
      /* toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true
      }); */
    }
  };

  return (
    <div className="review_create">
        <div className="review_box">
          <h1><b>Post Review</b></h1>
          <h3>Season 1</h3>
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
        </div>
    </div>

  );

};
export default ReviewCreatePage;