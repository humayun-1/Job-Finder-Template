import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Img/YouOnline.svg';
export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-between-responsive">
                        <div className='logo'>
                            <img src={Logo} alt="Logo" className='img-fluid' />
                        </div>

                        <div className="input-group mx-4 rounded-pill p-1 theme-background responsive-margin">
                            <span className="input-group-text border-0 bg-transparent" id="addon-wrapping">
                                <FontAwesomeIcon icon={faSearch} className='theme-font-color' />
                            </span>
                            <input type="text" className="form-control bg-transparent border-0 shadow-none ps-0" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="avatar avatar-sm d-none avatar-responsive">
                            <img src='https://www.w3schools.com/howto/img_avatar2.png' className="img-fluid" />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 py-3 d-flex align-items-center justify-content-between cstm-nav-icons pe-4">
                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faHome} className='theme-font-dark-color' />
                        </div>

                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faComment} className='theme-font-dark-color' />
                        </div>
                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faBell} className='theme-font-dark-color' />
                        </div>
                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faUserFriends} className='theme-font-dark-color' />
                        </div>
                        <button className='btn border theme-font-dark-color fw-bold border-dark rounded-pill px-4'>Create</button>
                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faBars} className='theme-font-dark-color' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 border-start border-2 cstm-nav d-flex align-items-center justify-content-evenly ps-0">
                        <div className='avatar'>
                            <img className='img-fluid' src='https://www.w3schools.com/howto/img_avatar2.png' alt="" />
                        </div>
                        <h4 className="fw-bold theme-font-dark-color fs-4">Jessica</h4>
                        <div className='rounded-pill theme-background py-1 px-2'>
                            <FontAwesomeIcon icon={faChevronDown} className='theme-font-dark-color' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
