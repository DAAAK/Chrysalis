import React from 'react';

const SvgIcon = ({
  type,
  icon,
  category,
  info,
  svg,
}: {
  type: string;
  icon: string;
  category: string;
  info: string;
  svg: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center w-12 h-12 mr-2">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon={icon}
          className="w-6 h-6 md:mb-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path fill="currentColor" d={svg} />
        </svg>
      </div>
      {type === 'contact' && (
        <div className="flex-row flex">
          <p className="text-center font-bold">{category}:</p>
          <p className="text-center ml-1">{info}</p>
        </div>
      )}
    </div>
  );
};

export default SvgIcon;
