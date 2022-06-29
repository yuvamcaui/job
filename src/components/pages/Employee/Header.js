import React from "react";

const Header = () =>{

    return(<>
      <div className="page_title_section">
                <div className="page_header">
                    <div className="container">
                        <div className="row">                            
                            <div className="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
                                <h1>Candidate Dashboard</h1>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
                                <div className="sub_title_section">
                                    <ul className="sub_title">
                                        <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                        <li>Candidate Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    </>)

}

export default Header