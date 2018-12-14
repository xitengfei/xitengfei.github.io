import React from 'react'
import {connect} from 'react-redux'
import {DatePicker, Checkbox, Card} from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'

import './index.scss'

const {RangePicker} = DatePicker
const CheckboxGroup = Checkbox.Group

class FilterBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checkedItems: props.checkedItems
        }

        this.onAreaChange = this.onAreaChange.bind(this)
    }

    onRangeChange(date, dateString){
        console.log(date, dateString);
    }

    onRangeOK(val){
        console.log('ok', val)
    }

    onAreaChange(checkedItems){
        console.log('checkedItems', checkedItems)
        this.setState({
            checkedItems
        })
        this.props.onCheckAreas(checkedItems)
    }

    render(){
        const {options} = this.props
        const {checkedItems} = this.state
        return (
            <div className="filter-box">
                <Card>
                    <label>请选择一个时间</label>
                    <RangePicker 
                        locale={locale}
                        onChange={this.onRangeChange} 
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD"
                        placeholder={['开始', '结束']}
                        onOk={this.onRangeOK}
                    />

                    <lable>选择区域</lable>
                    <CheckboxGroup
                        options={options}
                        value={checkedItems}
                        onChange={this.onAreaChange}
                    />
                </Card>
            </div>
        )
    }
}

const mapStateToProps = function(store, ownProps){
    return {}
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBox)