import React from 'react';
import "h8k-components";
import '../App.css'
import '../index.css'

function Error(props) {
	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{props.error}</div>
}

export default Error;
