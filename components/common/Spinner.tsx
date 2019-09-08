import * as React from 'react';

interface IProps {
  options?: {
    fullSize?: boolean;
  };
}

const Spinner = ({ options }: IProps) => {
  const fullSize = options && options.fullSize;

  const getSpinner = () => {
    return (
      <div className="lds-ring-container">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  };

  return (
    typeof window !== 'undefined' && (
      <>
        {fullSize ? (
          <div className="lds-ring-absolute-container">{getSpinner()}</div>
        ) : (
          <div className="lds-ring-relative-container">{getSpinner()}</div>
        )}
      </>
    )
  );
};

export default Spinner;
