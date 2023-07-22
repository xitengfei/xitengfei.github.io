import React, {useContext} from 'react';
import {DataContext} from '@/pages/Resume/contexts';
import './index.less';

const Head = function(){
    const data = useContext(DataContext);
    const {metaInfo} = data;

    return(
        <header className="resume-header" style={{backgroundColor: '#343A4B'}}>
            <div className="avatar">
                <img src={data.avatar} alt="avatar" />
            </div>
            <div className="name">
                <h1>{data.name}</h1>
                <h2>{data.title}</h2>
                <h3>{data.experience}</h3>
            </div>
            <div className="meta-info">
                <ul>
                    {metaInfo.map(item => {
                        return (
                            <li key={item.title}>
                                <i className={`iconfont ${item.icon}`} title={item.title}></i>
                                <span className="value">{item.value}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Head;