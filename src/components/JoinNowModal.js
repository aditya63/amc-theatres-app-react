import React from "react";

export default class JoinNowModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCancel: false
        }
    }

    onCancel() {
        this.setState({
            showCancel: true
        })
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        const { showCancel } = this.state;
        return (
            <div className="hoverBoxWrapper" id="hoverBoxWrapper">
            <div className="hoverBox">
                <span className="closeBtn" onClick={() => this.onCancel()}>&times;</span>
                <h2 className="message">Level up to primiers & score a free x-large fountain drink</h2>
                <div><button className="joinNowBtn">Join Now</button></div>
                <a>Learn More</a>

                {showCancel && <div className="showCancelBox">
                   <div className="btnWrapper">
                    <button onClick={() => this.onClose()}>Remind me later</button>
                    <button onClick={() => this.onClose()}>No thanks</button>
                    <button onClick={() => this.onClose()}>Cancel</button>
                </div>
                </div>}
            </div>
            </div>
        );
    }
}
