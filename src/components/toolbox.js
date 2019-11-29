import React from 'react';
import './toolbox.css';
import { data } from "../data";

function Toolbox(props) {
    return (
        <div>
            <h2>Toolbox</h2>
            <div className='toolbox-wrapper'>
                { data.toolbox.map((array, arrayIndex) => {
                    const row =  array.map((item, index) => {
                        return item === 'LaTeX'
                            ? <div key={item} className='toolbox-item'><span className='latex'>L<sup>a</sup>T<sub>e</sub>X,</span></div>
                            : index === array.length - 1
                                ? <div key={item} className='toolbox-item'>{item}</div>
                                : <div key={item} className='toolbox-item'>{item + ','}</div>
                    });

                    return (
                        <div key={arrayIndex} className='toolbox-row'>
                            { row }
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export { Toolbox }