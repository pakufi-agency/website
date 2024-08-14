import React from 'react';

const PortfolioSidebar = () => {
    return (
        <div className="sidebar__content">
            <div className="sidebar__content-heading">
                <h3>Project Info</h3>
            </div>
            <div className="sidebar__info">
                <h4>Client</h4>
                <span>Nosimon Agency</span>
            </div>
            <div className="sidebar__info">
                <h4>Project Type</h4>
                <span>Website Design</span>
            </div>
            <div className="sidebar__info">
                <h4>Location</h4>
                <span>61 R New Street, NYC</span>
            </div>
            <div className="sidebar__info">
                <h4>Project Date</h4>
                <span>22 March 2022</span>
            </div>
        </div>
    );
};

export default PortfolioSidebar;