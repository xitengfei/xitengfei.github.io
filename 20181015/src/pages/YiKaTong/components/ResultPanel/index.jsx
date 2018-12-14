import React from 'react'
import { Table } from 'antd'

import './index.scss'

class ResultPanel extends React.Component{
    dataLength = 0;
    currentPageItems = [];
    state = {
        pageSize: 10
    }

    constructor(props){
        super(props)

        this.getColumns = this.getColumns.bind(this)
        this.setCurrentPageItems = this.setCurrentPageItems.bind(this)
    }

    getColumns(){
        let prevRow = null
        let isOld = true
        return [{
            title: '区域',
            dataIndex: 'area_name',
            render: (value, row, index)=>{
                if(index === 0) prevRow = null

                let rowspan = 0
                let className = ''
                if(!prevRow || prevRow.area_name !== row.area_name){
                    rowspan = this.currentPageItems.filter(item => item.area_name === row.area_name).length
                    isOld = !isOld
                    className = 'area_name' + (isOld?' old':'')
                }
                prevRow = row

                return {
                    children:value,
                    props:{
                        rowSpan: rowspan,
                        className: className,
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

    setCurrentPageItems(page, pageSize){
        let start = pageSize * (page -1)
        let end = start + pageSize
        end = end < this.dataLength ? end : this.dataLength
        this.currentPageItems = this.props.dataItems.slice(start, end)
    }

    render(){
        console.log('RetrievalBox render')

        const {dataItems} = this.props
        this.dataLength = dataItems.length
        this.setCurrentPageItems(1, this.state.length)

        return(
            <div className="result-panel">
                <Table 
                    rowKey="id"
                    // loading="true"
                    dataSource={dataItems} 
                    columns={this.getColumns()}
                    pagination={{
                        pageSize: this.state.pageSize,
                        // hideOnSinglePage: true,
                        onChange: (page, pageSize) => {this.setCurrentPageItems(page, pageSize)},
                        showSizeChanger: true,
                        onShowSizeChange: (current, size) =>{this.setState({pageSize: size})}
                    }}
                    bordered
                />
            </div>
        )
    }
}

export default ResultPanel