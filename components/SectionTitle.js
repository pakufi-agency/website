import React from 'react';

const SectionTitle = ({subTitle, titleFirst, titleSecond}) => {
    return (
        <>
            <h4 className="section__sub-title">
                {subTitle}
            </h4>
            <h2 className="section__title">
                <span>{titleFirst}</span>
                {titleSecond}
            </h2>  
        </>
    );
};

export default SectionTitle;