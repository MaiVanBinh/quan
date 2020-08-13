import React from 'react';
import './Loader.scss'

const Loader = (props) => (
    <div className='WRAP_LOADER' style={props.isAbsolute ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    } : {}}>
        <div className="lds-ellipsis" style={{height: props.size}}>
            <div style={{backgroundColor: props.color, width: props.size, height: props.size}}></div>
            <div style={{backgroundColor: props.color, width: props.size, height: props.size}}></div>
            <div style={{backgroundColor: props.color, width: props.size, height: props.size}}></div>
            <div style={{backgroundColor: props.color, width: props.size, height: props.size}}></div>
        </div>
    </div>
);

export default Loader;
