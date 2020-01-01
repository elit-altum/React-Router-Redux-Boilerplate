import React from 'react';
import { connect } from 'react-redux';
import { startLogIn } from '../actions/auth';

const LogInPage = ({ startLogIn }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1>BiolerPlate</h1>
            <p>Insert Tagline Here!</p>
            <button 
                className="login-button"
                onClick={startLogIn}
            >Login With Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogIn: () => dispatch(startLogIn()),
});

export default connect(undefined, mapDispatchToProps)(LogInPage);