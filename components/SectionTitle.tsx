import React, { FC } from "react";

interface SectionTitleProps {
  subTitle: string;
  titleFirst: string;
  titleSecond: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  subTitle,
  titleFirst,
  titleSecond,
}) => {
  return (
    <>
      <h4 className="section__sub-title">{subTitle}</h4>
      <h2 className="section__title">
        <span>{titleFirst}</span>
        {titleSecond}
      </h2>
    </>
  );
};

export default SectionTitle;
