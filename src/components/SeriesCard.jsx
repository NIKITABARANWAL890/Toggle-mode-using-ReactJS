import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
  const { id, name, img_url, rating, description, cast, genre, watch_url } = props.data;

  const ButtonThapa = styled.button({
    padding: "0.4rem 1.4rem",
    border: "none",
    fontSize: "1rem",
    backgroundColor: rating >= 8.5 ? "#7dcea0" : "#f7dc6f",
    color: "var(--bg-color, #000)",
    cursor:"pointer",
  });

  // Dynamic class assignment based on rating
  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (
    <li className={styles.card}>
      <div className={styles.img_div}>
        <img src={img_url} alt="Series Thumbnail" />
      </div>
      <div className="flex flex-col gap-6 py-6 px-6">
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={styles[ratingClass]}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonThapa>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};
