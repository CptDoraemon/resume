import React from 'react';
import './resume.css';
import { Name } from "./components/name";
import { Contact } from "./components/contact";
import { Section } from "./components/section";
import { Toolbox } from "./components/toolbox";

function BuildInfo(props) {
    const date = new Date();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const dateText = '' + date.getFullYear() + month + day;

    return (
        <div className='info' onClick={props.changeVersionHandler}>
            buildDate: {dateText}, isFinTech: {props.isFinTech ? 'true' : 'false'}
        </div>
    )
}
class Resume extends React.Component {
    render() {
        return (
            <div className='letter-size'>
                <div className='resume-header'>
                    <Name />
                    <Contact />
                </div>
                <div className='resume-body-wrapper'>
                    <div className='resume-body-left'>
                        <Section
                            sectionDataKey='projects'
                            sectionTitle='Project Experiences'
                        />
                    </div>
                    <div className='resume-body-right'>
                        <Section sectionDataKey='education' sectionTitle='Educations' isFinTech={this.props.isFinTech} />
                        <Section sectionDataKey='workExperience' sectionTitle='Work Experience' />
                        <Toolbox/>
                    </div>
                </div>
                <BuildInfo isFinTech={this.props.isFinTech} changeVersionHandler={this.props.changeVersionHandler}/>
            </div>
        )
    }
}

export { Resume };