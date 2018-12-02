import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from "@/pages/home/HomeContainer"
import YiKaTong from "@/pages/yikatong/YiKaTongContainer"

export default class RouteConfig extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/yikatong" component={YiKaTong} />
                </Switch>
            </BrowserRouter>
        )
    }
}