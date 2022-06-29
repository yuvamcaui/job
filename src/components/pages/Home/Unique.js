import React from 'react';
const c1 = require("../../../assets/images/unique/c1.png");
const c2 = require("../../../assets/images/unique/c2.png");
const c3 = require("../../../assets/images/unique/c3.png");
const c4 = require("../../../assets/images/unique/c4.png");
const c5 = require("../../../assets/images/unique/c5.png");
const c6 = require("../../../assets/images/unique/c6.png");
const c7 = require("../../../assets/images/unique/c7.png");
const c8 = require("../../../assets/images/unique/c8.png");
const c9 = require("../../../assets/images/unique/c9.png");
const Screen = require("../../../assets/images/unique/screens.png")

const Unique = () =>{

    return(<>
    <div className="services_wrapper control_wrapper jb_cover">
        <div className="container maximum-height" >
            <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                    <div className="jb_heading_wraper">
                        <h3>Our Unique Features</h3>
                        <p>What Taak Offers to Employers  Employees</p>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className="services_content jb_cover">
                                <img src={ c4 } alt="img" />
                                <h3><a href="#">Compliance Reporting</a></h3>
                                <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>
                        </div>

                        <div className="services_content jb_cover">
                                <img src={ c4 } alt="img" />
                                <h3><a href="#">Compliance Reporting</a></h3>
                                <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>
                        </div>

                        <div className="services_content jb_cover">
                                    <img src={ c9 } alt="img" />
                                    <h3><a href="#">customer portal</a></h3>
                                    <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>            
                        </div>

                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <img src={ Screen } alt="img" height="40%" />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className="services_content jb_cover">
                            <img src={ c3 } alt="img" />
                            <h3><a href="#">customer portal</a></h3>
                            <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>            
                        </div>
                        <div className="services_content jb_cover">
                            <img src={ c6 } alt="img" />
                            <h3><a href="#">customer portal</a></h3>
                            <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>            
                        </div>
                        <div className="services_content jb_cover">
                            <img src={ c9 } alt="img" />
                            <h3><a href="#">customer portal</a></h3>
                            <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>            
                        </div>
                </div>               
            </div>
        </div>
    </div>
    </>)


}

export default Unique