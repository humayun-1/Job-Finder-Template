import React from 'react'

export default function SideBar() {
    return (
        <>
            <div>
                <h4 className='p-4 m-0'>Find Your Job</h4>
                <hr className='m-0 hr theme-background-dark' />
            </div>
            <div className='p-4'>
                <h5 className='mb-4'>Location</h5>
                <select className="form-select cstm-search theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Search</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>


                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>All Countries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>All States</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>All Cities</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <h5 className='mb-4'>Location</h5>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Select Skill</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Select Employment type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Select Education</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <h5 className='mb-4'>Location</h5>

                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Select min salary</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select theme-background border-0 cstm-dropdown my-3 theme-font-color-dark" aria-label="Default select example">
                    <option defaultValue>Select max salary</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    )
}
