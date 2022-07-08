import React,{ useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { getTokenLocalUserStorage , getTokenLocalStorage, Url , userLoginData} from '../../../utils/Common';
import { JobPostUpdate } from "../../../store/action/JobAction";

const PostJob = () =>{

    const dispatch = useDispatch();

    const [ localStorage,setLocalStorage ] = useState(getTokenLocalUserStorage())

    const [formData,setFormData] = useState({
        companyId: localStorage?._id ? localStorage?._id : '1',
        titleKey: 'En',
        titleName: '',
        jobCategoryId: '',
        jobTypeId: '',
        descriptionKey: 'En',
        descriptionName: '',
        noOfPositions: '',
        activeFromDate:'',
        activeToDate:'',
        experienceYear:'',
        genderId: 1,
        salaryFrom: '',
        salaryTo: '',
        location: '',
        countryId: 1,
        stateId: 1,
        cityId: 1,
        pinCode: '',
        status: true,
        expiryDate: '',
        isActive: '',
        insertDateTime: '',
    })

    const { companyId,titleKey,titleName,experienceYear,activeFromDate ,activeToDate,jobCategoryId,jobTypeId,descriptionKey,descriptionName,noOfPositions,genderId,salaryFrom,salaryTo,location,countryId,stateId,cityId,pinCode,status,expiryDate,isActive,insertDateTime } = formData

    const onChange = e =>setFormData({ ...formData,[e.target.name] : e.target.value });

    const onSubmit= async e =>{
        e.preventDefault(); 
        console.log(`Form Data Triggers - ${ JSON.stringify(formData) }`)
         dispatch(JobPostUpdate(formData));    

    }; 

    return(<>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form className="form"  enctype="multipart/form-data" onSubmit={ e=>onSubmit(e) }>
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
                                                    <select className='select-style-data' id="jobCategoryId" name='jobCategoryId' value={jobCategoryId}  onChange={ e=>onChange(e) }>
                                                        <option value={1}>Accountant</option>
                                                        <option value={2}>Shop Keeper</option>
                                                        <option value={3}>Marketing Executive</option>                                                                                     
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="select_box_form">
                                                    <label>Job Type</label>
                                                    <select className='select-style-data' id="jobTypeId" name='jobTypeId' value={jobTypeId}  onChange={ e=>onChange(e) } >
                                                        <option value={1}>full time</option>
                                                        <option value={2}>part time</option>
                                                        <option value={3}> temperory</option>
                                                        <option value={4}>freelance</option>                                                                                   
                                                    </select>
                                                </div>
                                            </div>     
                                         
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>job title</label>
                                                    <input type="text" id="titleName" name='titleName' value={titleName}  onChange={ e=>onChange(e) }  />
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Minimum Salary</label>
                                                    <input type="text" id="salaryFrom" name='salaryFrom' value={salaryFrom}  onChange={ e=>onChange(e) } />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Maximum Salary</label>
                                                    <input type="text" id="salaryTo" name='salaryTo' value={salaryTo}  onChange={ e=>onChange(e) } />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="select_box_form">
                                                    <label>Experience Year</label>
                                                    <select className='select-style-data' id="experienceYear" name='experienceYear' value={experienceYear}  onChange={ e=>onChange(e) } >
                                                        <option value={1}>1 year</option>
                                                        <option value={2}>2 years</option>
                                                        <option value={3}>3 years</option>
                                                        <option value={4}>4 years</option>                                                                              
                                                    </select>
                                                </div>
                                            </div>    

                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>No Of Positions</label>
                                                    <input type="text" id="noOfPositions" name='noOfPositions' value={noOfPositions}  onChange={ e=>onChange(e) } />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Active From</label>
                                                    <input type="date" id="activeFromDate" name='activeFromDate' value={activeFromDate}  onChange={ e=>onChange(e) } />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="contect_form3">
                                                    <label>Active Upto</label>
                                                    <input type="date" id="activeToDate" name='activeToDate' value={activeToDate}  onChange={ e=>onChange(e) } />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
                            </div> */}
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="job_filter_category_sidebar jb_cover">
                                    <div className="job_filter_sidebar_heading jb_cover">
                                        <h1>Location  Tags</h1>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Location (Comma Seperated)</label>
                                            <input type="text" id="location" name='location' value={location}  onChange={ e=>onChange(e) }  />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="contect_form3">
                                            <label>Tags (Comma Seperated)</label>
                                            <input type="text" id="descriptionName" name='descriptionName' value={descriptionName}  onChange={ e=>onChange(e) } />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="login_remember_box jb_cover">
                                                <div class="header_btn search_btn jb_cover">
                                                    <input type="submit" className="btn btn-info" value="Insert" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </form>
                </div>
    
    </>)
}
export default PostJob