import React from 'react';
import { connect } from 'react-redux';
import { validate } from './actionCreators';
import history from './history';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '', password: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }

    handlePasswordChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.input && this.state.password !== '') {
            this.props.validate(this.state);
            history.push("/dashboard");
        }
        else {
            alert('Please fill in the fields provided');
        }
    }

    render() {
        return (
            <div className='eight wide column'>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <h2 className="ui teal image header">
                            <div className="content">
                                Log-in to your account
                            </div>
                        </h2>
                        <div className="field">
                            <div className="ui left icon input">
                                <i class="user icon"></i>
                                <input type="email" onChange={this.handleInputChange} placeholder="E-mail address" />
                            </div>
                        </div>
                        <div className="field">
                            <div class="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" onChange={this.handlePasswordChange} placeholder="Enter Password" />
                            </div>
                        </div>
                        <button className="ui button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null, { validate })(Login);