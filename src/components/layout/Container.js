import React from 'react';
import PageRouters from './../../router/PageRouter';

const Container = (props) => {
    return (
        <div className='container'>
            <p>Your layout is here!</p>
            <br/>
            <PageRouters />
        </div>
    )
}

export default Container;
