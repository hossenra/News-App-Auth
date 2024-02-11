import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-16 ">
      <figure>
        <img src={image_url} alt="thumbnail_url" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <div>
            <p>{details.slice(0, 200)}</p>
            <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>
              Read More...
            </Link>
          </div>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
