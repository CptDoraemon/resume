import React from 'react';
import './resume.css';
import { Name } from "./components/name";
import { Contact } from "./components/contact";
import { Section } from "./components/section";
import {Toolbox} from "./components/toolbox";

class Resume extends React.Component {
    render() {
        return (
            <div className='letter-size'>
                <div className='resume-header'>
                    <Name />
                    <Contact />
                </div>
                <div className='resume-body'>
                    <Section sectionDataKey='projects' sectionTitle='Project Experiences' />
                    <Section sectionDataKey='education' sectionTitle='Educations' />
                    <Section sectionDataKey='workExperience' sectionTitle='Work Experience' />
                    <Toolbox/>
                </div>
            </div>
        )
    }
}

export { Resume };