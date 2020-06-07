
import React from 'react';
import Data from './data';
import {DataContext} from './contexts';
import {Head, Section, Experience} from './components';

import './index.less';

class Resume extends React.Component{
    render(){
        return(
            <DataContext.Provider value={Data}>
                <div className="resume-body">
                    <Head />
                    <Section 
                        icon={<img src={require('./images/001.png')} alt="person" />}
                        title={'自我简介'}
                        className="breif-desc"
                    >
                        <p>
                        {Data.breifDesc}
                        </p>
                    </Section>
                    <Section
                        icon={<img src={require('./images/002.png')} alt="experience" />}
                        title={'工作经历'}
                    >
                        <Experience dataSource={Data.workExperience} mode={'complex'} />
                    </Section>
                    <Section
                        icon={<img src={require('./images/003.png')} alt="experience" />}
                        title={'教育背景'}
                        className='education'
                    >
                        <Experience dataSource={Data.education} mode={'simple'} />
                    </Section>
                    <Section
                        icon={<img src={require('./images/004.png')} alt="experience" />}
                        title={'项目经验'}
                    >
                        <Experience dataSource={Data.projectExperience} />
                    </Section>
                    <Section
                        icon={<img src={require('./images/005.png')} alt="experience" />}
                        title={'⾃我评价'}
                        className='icomments'
                    >
                        <ol>
                            {
                                Data.icomments.map((item, index)=>{
                                    return (
                                        <li key={index}>{index + 1}. {item}</li>
                                    )
                                })
                            }
                        </ol>
                    </Section>
                </div>
            </DataContext.Provider>
        )
    }
}

export default Resume;