import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./productDetails.css";
import { ShopContext } from "../../context/shop-context";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

export const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [reviews, setReviews] = useState(product.reviews || []);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newImage, setNewImage] = useState(null);
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const { user } = useAuth(); // Get current user
  
  


  if (!product) {
    return <div>Product not found</div>;
  }


  const handleCommentSubmit = (e) => {
    // useEffect(() => {
        if (!user) {
            alert("You must be logged in to leave a review.");
            return;
          }
    //   }, [currentUser, navigate]);
    e.preventDefault();
    const comment = {
      id: reviews.length + 1, // generate the ID based on the existing reviews length
      comment: newComment,
      username: user, // Replace with actual user info
      image: newImage ? URL.createObjectURL(newImage) : null,
    };
    
    // Add new review to the current product's reviews
    const updatedReviews = [...reviews, comment];
    setReviews(updatedReviews); // Update state locally

    // Update the product's reviews list (you might need to update the actual product data here)
    // This is where you'd make an API call or update the context/store
    // Example: updateProductReviews(productId, updatedReviews);

    setNewComment("");
    setNewImage(null);
  };

  const handleAddToCart = () => {
    addToCart(product.id);
    console.log(`Added ${product.productName} to cart!`);
    // Add your cart logic here
  };

  return (
    <div className="product-details">
      <Link to="/" className="back-link">Back to Shop</Link>
      <h2>{product.productName}</h2>
      <img src={product.productImage} alt={product.productName} className="product-image" />
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <div style={{ alignItems: 'center', height: '20vh' }}>
        <button className="addToCartBttn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <h3
        style={{ cursor: "pointer" }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Customer Reviews {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </h3>
      <ul className="comments-list" style={{ display: isCollapsed ? "none" : "block" }}>
        {reviews.map((review, index) => (
          <li key={index} className="comment-item">
            <div className="comment-tile">
              {review.image && (
                <img src={review.image} alt="Uploaded" className="comment-avatar" />
              )}
              <div className="comment-content">
                <h3 className="comment-username">{review.username}</h3>
                <p className="comment-text">{review.comment}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h3>Leave a Review</h3>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your review here"
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
