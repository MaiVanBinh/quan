import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Home = (props) => {
    return (
        <div>
            <p>Hello, This is Home!</p>
            <NavLink to='/profile'>Go to Profile</NavLink>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);