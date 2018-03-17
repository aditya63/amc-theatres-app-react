import React from "react";
import { connect } from "react-redux";
import JoinNowModal from './JoinNowModal';
import MovieList from './MovieList';
// ShowingNow page component
export class ShowingNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_NOW_SHOWING'
    });
  }

  onClose() {
    this.setState({
      showModal: false
    })
  }

  render() {    
    const { showModal } = this.state;
    const { movieList } = this.props;
    if(movieList.length > 0){
     let id =  document.getElementById('hoverBoxWrapper');
     if(id){
       id.style.backgroundImage = 'url('+movieList[0].media.heroDesktopDynamic+')';
     }
    }
    return (
      <div className="page-ShowingNow">
        {showModal && <JoinNowModal onClose={this.onClose.bind(this)} />}
        <MovieList {...this.props} />
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieList: state.amcTheatres.currentlyShowing
  };
}
export default connect(mapStateToProps)(ShowingNow);