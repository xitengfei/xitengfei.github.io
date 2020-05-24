
import React from 'react';
import Data from './data';
import {DataContext} from './contexts';
import {Head} from './components';

import './index.less';

class Resume extends React.Component{
    render(){
        return(
            <DataContext.Provider value={Data}>
                <div className="resume-body">
                    <Head />
                </div>
            </DataContext.Provider>
        )
    }
}

export default Resume;