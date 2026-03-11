const reviews = [
  { user: 'John', rating: 5, text: 'Great product! Exactly as described. Very happy with my purchase.' },
  { user: 'Sarah', rating: 4, text: 'Good quality, fast shipping. Would buy again.' },
  { user: 'Mike', rating: 5, text: 'Love it! Best purchase I have made this year.' },
];

function StarRating({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function ReviewRating() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="review-rating">
      <div className="rating-summary">
        <span className="avg-rating">{avgRating}</span>
        <StarRating rating={Math.round(parseFloat(avgRating))} />
        <span className="review-count">{reviews.length} reviews</span>
      </div>
      <ul className="review-list">
        {reviews.map((review, i) => (
          <li key={i} className="review-item">
            <div className="review-header">
              <StarRating rating={review.rating} />
              <span className="review-user">{review.user}</span>
            </div>
            <p className="review-text">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
