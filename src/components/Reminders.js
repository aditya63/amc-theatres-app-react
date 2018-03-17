import React from "react";
import CreateModal from './CreateModal';
export default class Reminders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            openCreateModalFlag: false
        }
    }
    openCreateModal(){
        this.setState({
            openCreateModalFlag: true
        })
    }
  render() {
      const {openCreateModalFlag} = this.state;
    return (
      <div className="reminders">
      <div className="wrapperConetent">
      <img src="https://cdn.amctheatres.com/static/images/my-amc/logo-amc-stubs-generic.png" />
        <h2>Member exclusive</h2>
        <p>Sign n with AMC stubs account to use this feature. If you don't have one. You can join for free</p>
        <div><button className="reminderBtn">Sign In</button></div>
        <button onClick={() => this.openCreateModal()} className="joinBtn">Join Now</button>
    {openCreateModalFlag && <CreateModal /> }
      </div>
      </div>
    );
  }
}
