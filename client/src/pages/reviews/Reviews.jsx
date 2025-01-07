import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ReviewCard from '../../components/ReviewCard';
import { useReviewStore } from '../../store/reviewStore';
import '../../assets/styles/reviews.css';

export default function Reviews () {
  //const [reviews, setReviews] = useState("");
  //const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/season1/episodes/reviews`);
        const results = response.data.data;
        setReviews(results);
      } catch (error) {
        alert(`Error fetching reviews`);
        console.error(`Error fetching reviews`, error);
      } finally {
        setLoading(false);
      }
    };
     getReviews();
  }, []); */

  //if (loading) return <div className="loading">Loading...</div>;
  const { getReviews, reviews } = useReviewStore();

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return (
    <div className="reviews_container">
      <div className="reviews">
        <div className="reviews_title">
          {/* <span>Season 1</span>*/} 
          <h2><b>Reviews</b> </h2>
          {/* <Link to={`/api/reviews/add`} className="add_btn">Add Review</Link> */}
          <Button variant="dark" className="add_btn">
            <Link className="add_btn" to={`/api/reviews/add`}>Add Review</Link></Button>
        </div>
        {/* <div><h4><b>Reviews </b></h4></div> */}
        <div className="review_lists">
          {reviews.map((review) => (  
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </div>

  );

};

