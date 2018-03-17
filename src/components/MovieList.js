import React from "react";


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieList } = this.props;
        function loadMovieList() {
            return movieList.map((movie, i) => (
                <li key={i}>
                    <img src={movie.media.posterDynamic} />
                    <p>{movie.name}</p>
                </li>
            ))
        }
        return (
            <div className="page-not-found">
                <ul className="movielIst">
                    {loadMovieList()}
                </ul>
            </div>
        );
    }
}
