import React from 'react'

import {Row, Col, Input, Icon} from 'antd'

const Search = Input.Search;

const HeaderBox = (props) => {
    return (
        <Row gutter={10}>
            <Col span={6}>
                <h1>京津冀一卡通一览表</h1>
            </Col>
            <Col className="search-box" xs={18} sm={12}>
                <Search
                    placeholder="请输入景区名称"
                    onSearch={value => console.log(value)}
                    size="large"
                    enterButton
                />
            </Col>
            <Col span={6} >
                <div className="filter-btn" onClick={props.onClickFilterBtn}>
                    筛选 <Icon type="filter" />
                </div>
            </Col>
        </Row>
    )
}

export default HeaderBox