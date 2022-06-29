import React from "react";

const PostJob = () =>{

    return(<>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="job_filter_category_sidebar pd0 jb_cover">
                                    <div className="job_filter_sidebar_heading jb_cover">
                                        <h1> Post New Jobs</h1>
                                    </div>
                                    <div className="job_overview_header jb_cover">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="select_box_form">
                                                    <label>Job Category</label>
                                                    <select className='select-style-data' id="countryId" name='countryId' >
                                                        <option>Accountant</option>
                                                        <option>Shop Keeper</option>
                                                        <option>Marketing Executive</option>                                                                                     
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="select_box_form">
                                                    <label>Job Type</label>
                                                    <select className='select-style-data' id="countryId" name='countryId' >
                                                        <option>full time</option>
                                                        <option>part time</option>
                                                        <option> temperory</option>
                                                        <option>freelance</option>                                                                                   
                                                    </select>
                                                </div>
                                            </div>     
                                         
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>job title</label>
                                                    <input type="text" name="name"  />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Minimum Salary</label>
                                                    <input type="text" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Maximum Salary</label>
                                                    <input type="text" name="name" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="select_box_form">
                                                    <label>Job Type</label>
                                                    <select className='select-style-data' id="countryId" name='countryId' >
                                                        <option>1 year</option>
                                                        <option>2 years</option>
                                                        <option>3 years</option>
                                                        <option>4 years</option>                                                                              
                                                    </select>
                                                </div>
                                            </div>    

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>No Of Positions</label>
                                                    <input type="text" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Active From</label>
                                                    <input type="date" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Active Upto</label>
                                                    <input type="date" name="name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="job_filter_category_sidebar jb_cover">
                                    <div className="job_filter_sidebar_heading jb_cover">
                                        <h1> about this job</h1>
                                    </div>
                                    <div className="job_overview_header jb_cover">
    
                                        <div className="wrapper jb_cover">
                                            <div className="options">
                                                <button onClick="transform('bold', null)">
                                                    <i className="fas fa-bold"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('italic', null)">
                                                    <i className="fas fa-italic"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('strikeThrough', null)">
                                                    <i className="fas fa-strikethrough"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('underline', null)">
                                                    <i className="fas fa-underline"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <div className="seperator"></div>
                                                <button onClick="transform('justifyLeft', null)">
                                                    <i className="fas fa-align-left"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('justifyCenter', null)">
                                                    <i className="fas fa-align-center"></i>
                                                </button>
                                                <button onClick="transform('justifyRight', null)">
                                                    <i className="fas fa-align-right"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('insertOrderedList', null)">
                                                    <i className="fas fa-list-ol"></i>
                                                </button>
                                                <div className="seperator"></div>
                                                <button onClick="transform('insertUnorderedList', null)">
                                                    <i className="fas fa-list-ul"></i>
                                                </button>
                                                <div className="seperator"></div>
    
                                                <div className="seperator"></div>
                                                <input type="number" onChange="transform('fontSize', this.value)" value="3" max="7" min="1" />
    
                                            </div>
                                        
                                            <select onChange="transform('fontName', this.value)">
                                                <option disabled>Font</option>
                                                <option value="Times New Roman">Times</option>
                                                <option value="Arial">Arial</option>
                                                <option value="Courier New">Courier New</option>
                                                <option value="Tahoma">Tahoma</option>
                                                <option value="Arial">Verdana</option>
                                            </select>
                                            <iframe name="editor" id="editor"></iframe>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="job_filter_category_sidebar jb_cover">
                                    <div className="job_filter_sidebar_heading jb_cover">
                                        <h1>Location  Tags</h1>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Location (Comma Seperated)</label>
                                            <input type="text" name="name"  />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Tags (Comma Seperated)</label>
                                            <input type="text" name="name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
    
    </>)
}
export default PostJob