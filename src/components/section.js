import React from 'react';
import './section.css';
import { data } from "../data";

function Item(props) {
    const data = props.data;
    // if title
    const title = data.name
        ? <h3>{data.name}</h3>
        : null;
    // if description
    const description = data.description
        ? <div className='item-link'> { data.description } </div>
        : null;
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
        ? <ul> { data.features.map(i => <li key={i}>{i}</li>) } </ul>
        : null;


    return (
        <div className='item-wrapper'>
            { title }
            { description }
            { name1 }
            { link }
            { year }
            { items }
        </div>
    )
}
function Section(props) {
    const items = [];
    const dataObj = data[props.sectionDataKey];
    for (let key in dataObj) {
        if (dataObj.hasOwnProperty(key)) {
            const value = dataObj[key];
            if (props.isFinTech) {
                items.push(value)
            } else {
                if (!value.isFinTech || value.isFinTech === undefined) items.push(value)
            }
        }
    }
    return (
        <div className='section-wrapper'>
            <h2>{ props.sectionTitle }</h2>
            <div className='items-wrapper'>
                { items.map(i =>
                    <Item key={i.name} data={i}/>
                    )
                }
            </div>
        </div>
    )
}

export { Section };