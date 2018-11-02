import React from 'react'

function ResumeCard(props){
    return (
        <div className="xui-card" id="resume-card" active-page={props.isActive ? 'true':'false'} >
            <h2 className="card-title">Resume</h2>
            <div className="resume-buttons">
                <a href="/resume/郗腾飞PHPEngineer.doc" download="PHP Engineer Tengfei's Resume" className="xui-btn xui-btn-default"><i className="fa fa-download"></i> Download Resume</a>
                <a href="/#contact-card" className="xui-btn xui-btn-default"><i className="fa fa-at"></i> Get in Touch </a>
            </div>

            <section className="education">
                <h3 className="section-title"><i className="fa fa-university"></i> Education </h3>
                
                <div className="resume-item">
                    <h3 className="title">Digital Media Technology</h3>
                    <h5 className="sub-title">XuChang University ( 4 Years ) <span> - Graduation June 2014</span></h5>
                    <p className="description">This is a subject belong to computer science department. Main Course: Computer Foundation, Operating System Principle, Data Structure, JAVA, Web Page Built, PS, 3Ds MAX etc. </p>
                </div>
            </section>

            <section className="work">
                <h3 className="section-title"><i className="fa fa-tasks"></i> Work Experience </h3>

                <div className="resume-item">
                    <h3 className="title">AragonCS</h3>
                    <h5 className="sub-title">Frontend Engineer<span> - March 2015 - Now</span></h5>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="resume-item">
                    <h3 className="title">Like Tuan</h3>
                    <h5 className="sub-title">PHP Engineer<span> - June 2014 - Feb 2015</span></h5>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="resume-item">
                    <h3 className="title">YouHaoHuDong</h3>
                    <h5 className="sub-title">PHP Engineer<span> - October 2013 - June 2014</span></h5>
                    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>
        </div>
    )
}

export default ResumeCard