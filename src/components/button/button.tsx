import React from 'react';

//Css
import './style.scss';

export function PrimaryButton(props : any) {
  const { btnContainerClass, btnClass, click, tooltip, tooltipData, index, ...rest } = props;
  return (
    <div key={index} className={btnContainerClass ? `button-container ${btnContainerClass}` : `button-container`}>
      <button
        className={btnClass ? `btn primary-btn ${btnClass}` : `btn primary-btn`}
        onClick={(e) => click(e)}
        type="button"
        {...rest}
      >
        {props.name}
      </button>
    </div>
  );
}

export function OutlinedPrimaryButton(props : any) {
    const { btnContainerClass, btnClass, click, tooltip, tooltipData, ...rest } = props;
    return (
        <div className={btnContainerClass ? `button-container ${btnContainerClass}` : `button-container`}>
            <button
                className={btnClass ? `btn outline-primary-btn ${btnClass}` : `btn outline-primary-btn`}
                onClick={(e) => click(e)}
                type="button"
                {...rest}
            >
                {props.name}
            </button>
        </div>
    );
}