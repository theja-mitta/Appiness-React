import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    renderResult() {
        if(this.props.isValidated) {
            return this.props.dashBoard.user.map((currentUser, index) => <tr key={currentUser.id}><td>{currentUser.id}</td><td>{currentUser.name}</td><td>{currentUser.age}</td><td>{currentUser.gender}</td><td>{currentUser.email}</td></tr>);
        } else {
            return 'Authentication is failed';
        }
    }

    renderTableHeader() {
        var keyNames = Object.keys(this.props.dashBoard.user[0]);
        if(this.props.isValidated) {
            return (<tr>
                <th>{keyNames[0]}</th>
                <th>{keyNames[1]}</th>
                <th>{keyNames[2]}</th>
                <th>{keyNames[3]}</th>
                <th>{keyNames[4]}</th>
            </tr>);
        }
    }

    render() {
        return (
            <div>
                <h2 className="ui teal image header">
                    <div className="content">
                        My Dashboard
                    </div>
                </h2>
                <table className="ui celled table">
                    <thead>
                        {this.renderTableHeader()}
                        {this.renderResult()}
                    </thead>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isValidated: state.isValidated,
        dashBoard: state.dashboard
    };
};

export default connect(mapStateToProps, null)(Dashboard);