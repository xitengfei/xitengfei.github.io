import React from 'react'
import { Table } from 'antd'

import './index.scss'

class ResultPanel extends React.Component{
    pagination = {
        pageSize: 10,
        dataLength: 0,
        currentPageItems: [],
    }

    constructor(props){
        super(props)

        this.getColumns = this.getColumns.bind(this)
        this.setCurrentPageItems = this.setCurrentPageItems.bind(this)
    }

    getColumns(){
        let prevRow = null
        let isOdd = true
        return [{
            title: '区域',
            dataIndex: 'area_name',
            render: (value, row, index)=>{
                // reset for a new page
                if(index === 0) { 
                    prevRow = null
                    isOdd = true
                }

                // show area name
                let rowspan = 0
                let className = ''
                if(!prevRow || prevRow.area_name !== row.area_name){
                    const {currentPageItems} = this.pagination
                    rowspan = currentPageItems.filter(item => item.area_name === row.area_name).length
                    className = 'area_name' + (isOdd?' odd':' even')
                    isOdd = !isOdd
                }

                // set previous row
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
        end = end < this.pagination.dataLength ? end : this.pagination.dataLength
        this.pagination.currentPageItems = this.props.dataItems.slice(start, end)
    }

    render(){
        console.log('RetrievalBox render')

        const {dataItems} = this.props
        this.pagination.dataLength = dataItems.length
        this.setCurrentPageItems(1, this.pagination.pageSize)

        return(
            <div className="result-panel">
                <Table 
                    rowKey="id"
                    // loading="true"
                    dataSource={dataItems} 
                    columns={this.getColumns()}
                    pagination={{
                        pageSize: this.pagination.pageSize,
                        // hideOnSinglePage: true,
                        onChange: (page, pageSize) => {this.setCurrentPageItems(page, pageSize)},
                        showSizeChanger: true,
                        onShowSizeChange: (current, size) =>{this.pagination.pageSize = size}
                    }}
                    bordered
                />
            </div>
        )
    }
}

export default ResultPanel