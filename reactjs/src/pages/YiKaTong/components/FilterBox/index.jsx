import React from 'react'
import { connect } from 'react-redux'
import { DatePicker, Button, Checkbox } from 'antd'
import locale from 'antd/lib/date-picker/locale/zh_CN'

import './index.scss'

const {RangePicker} = DatePicker
const CheckboxGroup = Checkbox.Group
const ButtonGroup = Button.Group;

class FilterBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checkedAreas: props.defaultFilters.checkedAreas,
        }
    }

    onRangeChange = (date, dateString) => {
        console.log(date, dateString);
    }

    onRangeOK = (val) => {
        console.log('ok', val)
    }

    onAreaChange = (areas) => {
        console.log('onAreaChange', areas)
        this.setState({
            checkedAreas: areas
        })
        this.filtersChanged({checkedAreas: areas})
    }

    filtersChanged = (updatedFilter) => {
        let filters = {
            checkedAreas: this.state.checkedAreas
        }
        this.props.onFiltersChange(Object.assign(filters, updatedFilter))
    }

    render(){
        return (
            <div className="filter-box">
                <div className="filter-box-body">
                    <div className="filter-group">
                        <h3 className="filter-group-title">选择一个时间段</h3>
                        <div className="filter-group-content">
                            <RangePicker 
                                locale={locale}
                                onChange={this.onRangeChange} 
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD"
                                placeholder={['开始', '结束']}
                                onOk={this.onRangeOK}
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-group-title">选择区域</h3>
                        <div className="filter-group-content">
                            <CheckboxGroup
                                options={this.props.areas}
                                value={this.state.checkedAreas}
                                onChange={this.onAreaChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="filter-box-footer">
                    <ButtonGroup>
                        <Button 
                            type="primary"
                            onClick={this.props.onConfirm}
                        >确定</Button>
                        <Button 
                            type="default"
                            onClick={this.props.onCancle}
                        >取消</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store, ownProps){
    return {
        areas: store.yikatongStore.areas,
    }
}

export default connect(mapStateToProps)(FilterBox)