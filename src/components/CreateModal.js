CreateModal
import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class CreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            currentStep: 1,
            user: {
                email: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                valid: true
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        let { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({
            user
        })
    }

    onNextClick() {
        let { currentStep, user } = this.state;
        if (currentStep == 1) {
            let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (pattern.test(user.email) && user.firstName !== '' && user.lastName !== '') {
                currentStep++;
            } else {
                user.valid = false;
            }
        } else if (currentStep == 2) {

        }
        this.setState({
            currentStep, user
        })
    }
    // render
    render() {
        const { user, currentStep } = this.state;
        function loadFirstPage(onInputChange, self) {
            const {user} = self.state;
            return (
                <div className="letsStayInTouch">
                <div className="glyphicon glyphicon-envelope" aria-hidden="true"> </div>
                    <h3>Lets Stay in touch</h3>
                    <p className="stayIntouchDesc">Emails are not just for order confirmations by entering your Email,you will get access to news and more</p>
                    <div className="emailInput"><input type="email" name="email" value={user.email} onChange={(e) => onInputChange(e)} placeholder="Email" required /></div>
                    <input type="text" name="firstName" value={user.firstName} onChange={(e) => onInputChange(e)} placeholder="FirstName" required />
                    <input type="text" name="lastName" value={user.lastName} onChange={(e) => onInputChange(e)} placeholder="LastName" required />
                    {user.valid ? '' : <p className="invalidField">Form Invalid</p>}
                </div>
            )
        }

        function loadSecondPage() {
            return (
                <div className="celebrateWrapper">
                    <div><img src="/images/celebrate_image.png"/></div>
                    <h2>Celebrate with us</h2>
                    <p>At AMC we like to celebrate your birthdate as mucjh as you do let us know when your birthdate is</p>
                    <input type="date" name="dateOfBirth" />
                </div>
            )
        }
        function loadCurrentStep(onInputChange, self) {          
            switch (currentStep) {
                case 1:
                    return loadFirstPage(onInputChange, self);
                case 2:
                    return loadSecondPage();
            }
        }
        return (
            <div className={currentStep == 1 ? 'firstPage': 'secondPage'}>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                    <p>Amc stubs reminder</p>
                </Modal.Header>
                <Modal.Body>
                    <div className="steps">
                        {loadCurrentStep(this.onInputChange, this)}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.onNextClick()} className="nextBtn">Next</Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

