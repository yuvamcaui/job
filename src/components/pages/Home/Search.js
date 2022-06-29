import React from "react";
import SearchIcon from '@mui/icons-material/Search';
const Search = () =>{
    return(<>
            <div className="index3_form_wrapper jb_cover">
                <div className="container">
                    <div className="jb_heading_wraper_padding">
                        <h3>Search Beetween<span> 100+</span>Job Vacancies in Your Area.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="index3_form_box jb_cover">
                                <div className="select_box select_box3">
                                    <select className="select-option">
                                        <option>category</option>
                                        <option>real estate</option>
                                        <option>electronics</option>
                                        <option>marketing</option>
                                        <option>education</option>

                                    </select>

                                </div>
                                <div className="select_box select_box3 ">

                                    <select className="select-option">
                                            <option>job title</option>
                                            <option>teacher</option>
                                            <option>marketing</option>
                                            <option>doctor</option>
                                            <option>graphic</option>

                                        </select>

                                </div>
                                <div className="select_box select_box3">

                                <select className="select-option">
                                        <option>location</option>
                                        <option>pune</option>
                                        <option>banglore</option>
                                        <option>indore</option>
                                        <option>bhopal</option>

                                    </select>

                                </div>
                                <div className="contect_form3 contct_form_new3">

                                    <input type="text" name="name" placeholder="Keyword" />
                                </div>
                                <div className="index3_form_search">
                                    <a href="#"><SearchIcon size={50} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default Search