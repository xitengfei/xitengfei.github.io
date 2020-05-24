import React from 'react'
import Card from './Card'
import avatar from '../../img/me3.jpg'

const HomeCard = (props) => {
    return (
        <Card
            id="home-card"
            classes="profile-card"
            title=""
        >
            <div className="xui-card-avatar">
                <img className="avatar" alt="tengfei" src={avatar} />
            </div>
            <div className="xui-card-desc">
                <h1 className="main-title">Hi, i'm <i className="accent-color">XiTengfei!</i></h1>
                <h2 className="sub-title">A Frontend Developer</h2>
                <hr />
                <div className="description">
                    <p>I'm not a genius, but I've been working hard.</p>
                </div>
                <div className="contact-info">
                    <p>email:  447360803@qq.com / phone + 156 5220 3404</p>
                </div>
            </div>
            <div className="xui-card-footer">
                <div className="social-btns">
                    <a href="https://www.facebook.com/profile.php?id=100009324970191" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="https://github.com/xitengfei" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://twitter.com/xitengfei" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </Card>
    )
}

export default HomeCard 