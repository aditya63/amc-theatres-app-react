import React from "react";
import { connect } from "react-redux";
import MovieList from './MovieList';

export  class ComingSoon extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch({
          type: 'FETCH_COMING_SOON'
        });
      }
    

    render() {
        return (
            <div>
               <MovieList {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movieList: state.amcTheatres.comingSoon
    };
  }
  export default connect(mapStateToProps)(ComingSoon);
