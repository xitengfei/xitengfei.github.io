import React from 'react'
import { connect } from 'react-redux'
import { Table, Card } from 'antd'

class ResultPanel extends React.Component{
    constructor(props){
        super(props)

        this.getColumns = this.getColumns.bind(this)
    }
    state = {
        selectedArea:'海淀区',
        selectedStart:'',
        selectedEnd:'',
    }

    getColumns(){
        const {dataItems} = this.props
        let prevRow = null
        return [{
            title: '区域',
            dataIndex: 'area_name',
            render: (value, row, index)=>{
                if(index == 0) prevRow = null
                let rowspan = 0

                if(!prevRow || prevRow.area_name !== row.area_name){
                    rowspan = dataItems.filter(item => item.area_name == row.area_name).length
                }
                prevRow = row
                
                return {
                    children:value,
                    props:{
                        rowSpan: rowspan,
                        style:{verticalAlign:"middle"}
                    }
                }
            }
        },{
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '景区名称',
            dataIndex: 'name',
        }, {
            title: 'A级',
            dataIndex: 'level',
        }, {
            title: '票价(元)',
            dataIndex: 'price',
        }, {
            title: '时间段',
            dataIndex: 'date',
        }];
    }

    render(){
        console.log('RetrievalBox render')
        const {dataItems} = this.props
        console.log(dataItems);
        return(
            <div>
                <Table 
                    rowKey="id"
                    // loading="true"
                    dataSource={dataItems} 
                    columns={this.getColumns()} 
                    bordered
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultPanel)