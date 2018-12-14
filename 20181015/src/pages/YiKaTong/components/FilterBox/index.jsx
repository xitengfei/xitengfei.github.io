import React from 'react'
import {connect} from 'react-redux'
import {DatePicker} from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'

const {RangePicker} = DatePicker

class FilterBox extends React.Component{
    render(){
        return (
            <div className="filter-box">
                <label>请选择一个时间</label>
                <RangePicker 
                    locale={locale}
                    onChange={this.onRangeChange} 
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD"
                    placeholder={['开始', '结束']}
                    onOk={this.onRangeOK}
                />
            </div>
        )
    }
}

const mapStateToProps = function(store, ownProps){
    return {
        scenicSpots: store.yikatongStore.scenic_spots
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)