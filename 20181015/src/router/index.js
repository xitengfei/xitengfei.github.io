import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


import Home from "@/pages/home/Home"
import YiKaTong from "@/pages/yikatong/YiKaTong"

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