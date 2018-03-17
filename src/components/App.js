import React from "react";
import "../stylesheets/main.css";
import { Link } from 'react-router';
// app component
export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  // render
  render() {
    const {location} = this.props;
    return (
      <div className="container wrapper">
        <ul className="header">
          <li className={location.pathname == '/showingNow' ? 'active' : ''}><Link to="/showingNow">In Theatres</Link></li>
          <li className={location.pathname == '/comingSoon' ? 'active' : ''}><Link to="/comingSoon">Coming Soon</Link></li>
          <li className={location.pathname == '/reminders' ? 'active' : ''}><Link to="/reminders">My Reminders</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
