import React from 'react';

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center ${
        align === 'left' && "md:items-start md:text-left"}`}
    >
      {/* Title Heading */}
      <h2
        className={`text-2xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-snug ${font}`}
      >
        {title}
      </h2>

      {/* Subtitle Text */}
      {subTitle && (
        <p className="text-sm md:text-base text-gray-500 mt-3 leading-relaxed tracking-wide">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;

