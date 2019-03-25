import React from 'react';
import './section.css';
import { data } from "../data";

function Item(props) {
    const data = props.data;
    // if link
    const link = data.link
        ? <div className='item-link'>
            <a href={data.link} target='_blank' rel='noopener noreferrer'>
                {data.linkText}
                </a>
        </div>
        : null;

    // if year
    const year = data.year
        ? <div className='item-year'>{ data.year }</div>
        : null;

    // if name1
    const name1 = data.name1
        ? <h4>{data.name1}</h4>
        : null;

    // items
    const items = data.features
        ? data.features.map(i => <div key={i}>{i}</div>)
        : null;


    return (
        <div className='item-wrapper'>
            <h3>{data.name}</h3>
            { name1 }
            { link }
            { year }
            <div>
                { items }
            </div>
        </div>
    )
}
function Section(props) {
    const items = [];
    const dataObj = data[props.sectionDataKey];
    for (let item in dataObj) {
        if (dataObj.hasOwnProperty(item)) {
            items.push(dataObj[item])
        }
    }
    return (
        <div className='section-wrapper'>
            <h2>{ props.sectionTitle }</h2>
            <div>
                { items.map(i =>
                    <Item key={i.name} data={i}/>
                    )
                }
            </div>
        </div>
    )
}

export { Section };