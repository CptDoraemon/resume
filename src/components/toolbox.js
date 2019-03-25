import React from 'react';
import './toolbox.css';
import { data } from "../data";

function Toolbox(props) {
    return (
        <div>
            <h2>Toolbox</h2>
            <div className='toolbox-wrapper'>
                { data.toolbox.map((i, index) => {
                    return i === 'LaTeX'
                        ? <div key={i} className='toolbox-item'><span className='latex'>L<sup>a</sup>T<sub>e</sub>X,</span></div>
                        : index === data.toolbox.length - 1
                        ? <div key={i} className='toolbox-item'>{i}</div>
                        : <div key={i} className='toolbox-item'>{i + ','}</div>
                }) }
            </div>
        </div>
    )
}

export { Toolbox }