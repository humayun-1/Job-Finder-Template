import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Upwork from '../Img/upwork.png';
import Data from './Data';

export default function MainArea() {
    return (
        <>
            <section className="d-flex justify-content-end">
                <button className='btn rounded-pill text-light px-4 mx-1 theme-primary btn-responsive'>My Jobs</button>
                <button className='btn rounded-pill text-light px-4 mx-1 theme-primary btn-responsive'>My Job Profile</button>
                <button className='btn rounded-pill px-4 mx-1 my-btn btn-responsive'>Add Job</button>
            </section>
            <section>
                <h4 className='my-4'>Jobs by Categories</h4>
                <div className="d-flex flex-wrap">
                    <button className="cstm-dropdown border-0 theme-background m-2 fw-bold theme-font-color-light">
                        <span className='cstm-text-light'>Web Development</span> (12)
                    </button>
                    <button className="cstm-dropdown border-0 theme-background m-2 fw-bold theme-font-color-light">
                        <span className='cstm-text-light'>Web Designer</span> (12)
                    </button>
                    <button className="cstm-dropdown border-0 theme-background m-2 fw-bold theme-font-color-light">
                        <span className='cstm-text-light'>Product Manager</span> (12)
                    </button>
                    <button className="cstm-dropdown border-0 theme-background m-2 fw-bold theme-font-color-light">
                        <span className='cstm-text-light'>Web Designer</span> (12)
                    </button>
                    <button className="cstm-dropdown border-0 theme-background m-2 fw-bold theme-font-color-light">
                        <span className='cstm-text-light'>Web Development</span> (12)
                    </button>
                </div>
            </section>

            <section>
                <h4 className='my-4'>Popular Jobs</h4>
                <div className="row">

                    {
                        Data.map((item, i) => {
                            return <div key={i} className="col-lg-4 col-sm-12 col-md-6 my-3">
                                <div className="shadow card-round py-3">
                                    <div className="row m-0 px-2">
                                        <div className="col-3 p-0">
                                            <div className="avatar avatar-sm">
                                                <img src={Upwork} className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-9 py-0 px-2">
                                            <div className='d-flex justify-content-between'>
                                                <div className='fs-12'>
                                                    <h6>{item.head}</h6>
                                                    <span>Upwork </span>
                                                    <span className='text-grey'> &nbsp;&nbsp;&nbsp;Remote only</span>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className='fs-12'>{item.para}</p>
                                                <button className='btn rounded text-light px-4 py-1 mx-1 theme-primary'>Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
            </section>

            <section>
                <h4 className='my-4'>Jobs by Categories</h4>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-6 my-3">
                        <div className="shadow card-round p-3">
                            <div className="avatar mb-2">
                                <img src={Upwork} className="img-fluid" />
                            </div>
                            <div className=''>
                                <h6>Meaning</h6>
                                <p className='fs-12'>To contribute and add value to something or someone</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-3">
                        <div className="shadow card-round p-3">
                            <div className="avatar mb-2">
                                <img src={Upwork} className="img-fluid" />
                            </div>
                            <div className=''>
                                <h6>Meaning</h6>
                                <p className='fs-12'>To contribute and add value to something or someone</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 my-3">
                        <div className="shadow card-round p-3">
                            <div className="avatar mb-2">
                                <img src={Upwork} className="img-fluid" />
                            </div>
                            <div className=''>
                                <h6>Meaning</h6>
                                <p className='fs-12'>To contribute and add value to something or someone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="h-100 border subscribe p-5 text-center">
                    <h3 className='text-light'>Subscribe Now</h3>
                    <h6 className='text-light fs-5 py-2'>Subscribe to get our New Jobs Alerts</h6>
                    <div className="input-group mb-3 w-75 m-auto input-responsive">
                        <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className ="input-group-text btn text-light px-4 rounded-3 theme-primary " id="basic-addon2">Subscribe</span>
                    </div>
                </div>
            </section>
        </>
    )
}
