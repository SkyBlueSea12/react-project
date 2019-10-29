import React, { Component } from 'react';
import Son1 from "./Son1"
import Son2 from "./Son2"

export class index extends Component {
    render() {
        return (
            <div className='less'>
                <Son1/>
                <Son2/>
            </div>
        );
    }
}

export default index;
