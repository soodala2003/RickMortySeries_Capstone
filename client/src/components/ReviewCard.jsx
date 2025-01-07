import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useReviewStore } from '../store/reviewStore';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/styles/reviews.css';
//import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = ({ review }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedReview, setUpdatedReview] = useState(review);
  const { updateReview, deleteReview } = useReviewStore();

  const handleUpdateReview = async (reviewId, updatedReview) => {
    const {success, message} = await updateReview(reviewId, updatedReview);
    setShow(false);

    if (!success) { 
      toast.error("Error in updating review: Review is NOT Updated.");
    } else {
      toast.success(message);
    }   
  };

  const handleDeleteReview = async (reviewId) => {
    const {success} = await deleteReview(reviewId);

    if (!success) {
      toast.error("Error in deleting review: Review is NOT Deleted.");
    } else {
      toast.success("Review deleted successfully.");
    }
  };
  
  return (
    <div className="review_card">
      <h3 className="title">{review.title}</h3>
      <p>by <b>{review.user}</b> on <b>{review.published}</b></p>
      <p>{review.content}</p>
      <div className="icon_btns">
        <button type="button" className="btn btn-primary" 
          onClick={handleShow}>
          <span className="bi bi-pencil-square"></span>
        </button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type='text'
              name='title'
              value={updatedReview.title}
              placeholder=' Review Title'
              onChange={(e) => setUpdatedReview({ ...updatedReview, title: e.target.value })}
            /><br></br>
         
            <input
              type='text'
              name='user'
              value={updatedReview.user}
              placeholder=' User Name'
              onChange={(e) => setUpdatedReview({ ...updatedReview, user: e.target.value })}
            /><br></br>

            <textarea
              id='text'
              name='review'
              value={updatedReview.review}
              placeholder=' Enter Review'
              rows='3' 
              cols='50'
              onChange={(e) => setUpdatedReview({ ...updatedReview, content: e.target.value })}>
            </textarea><br></br>

            <input
              type='text'
              name='published'
              value={updatedReview.published}
              placeholder=' Published Date (MMM DD, YYYY)'
              onChange={(e) => setUpdatedReview({ ...updatedReview, published: e.target.value })}
            /><br></br>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleUpdateReview(review._id, updatedReview)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>

        <button type="button" className="btn btn-danger" onClick={() => handleDeleteReview(review._id)}>
          <span className="bi bi-trash3-fill"></span>
        </button>
        <ToastContainer position="top-center" autoClose={3000} closeButton={false} theme="dark" />
      </div>
    </div>
  );
};
  
export default ReviewCard;