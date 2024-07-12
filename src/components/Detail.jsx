import React from "react";
import "./Detail.css"

function Detail({ selected, closeDetail }) {
	return (
		<section className="detail">
			<div className="content">
				<h2>{selected.Title}</h2>
				<span style={{color:"goldenrod"}}>{selected.Year}</span>
				<p className="rating">
					Rating: {selected.imdbRating}
				</p>

				<div className="about">
					<img src={selected.Poster} alt="" />

					<p id="p">{selected.Plot}</p>
				</div>
				<button
					className="close"
					onClick={closeDetail} style={{backgroundColor:"red",color:"yellowgreen"}}
				>
					Close
				</button>
			</div>
		</section>
	);
}

export default Detail;
