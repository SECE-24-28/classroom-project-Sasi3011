const FeedbackList = ({ post }) => {
  return (
    <div className="feedbackGrid">
      {post.length > 0 ? (
        post.map((item) => (
          <div className="feedbackCard" key={item.id}>
            <h3 className="feedbackTitle">{item.title}</h3>
            <small className="feedbackDate">{item.datatime}</small>
            <p className="feedbackBody">{item.body}</p>
          </div>
        ))
      ) : (
        <p className="noResult">No feedback found.</p>
      )}
    </div>
  );
};

export default FeedbackList;
