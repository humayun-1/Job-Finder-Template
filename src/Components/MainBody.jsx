import React from 'react';
import SideBar from './SideBar'
import MainArea from './MainArea';
export default function MainBody() {
    return (
        <div className='theme-background'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 col-lg-3 col-sm-12 bg-white rounded-3 p-0">
                        <SideBar />
                    </div>
                    <div className="col-md-8 ms-3 col-lg-8 col-sm-12 bg-white p-4 rounded-3">
                        <MainArea />
                    </div>
                </div>
            </div>
        </div>
    )
}
