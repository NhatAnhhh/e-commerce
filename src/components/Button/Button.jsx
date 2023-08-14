import React from 'react';
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  width,
  height,
  padding,
  gap,
  color,
  backgroundColor,
  label,
  icon,
  position,
  fontfamily,
  fontstyle,
  fontweight,
  fontsize,
  lineHeight,
  textTransform,
  ...props
}) => {

  return (
    <button
      type="button"
      style={{
        width: width,
        height: height,
        padding: padding,
        color: color,
        gap: gap,
        backgroundColor: backgroundColor,
        hover:'#FF6F61',
      }}
      {...props}
    >
      <img style={{
        position: position,
        top: top
      }}
        src={icon} />
      <span style={{
        fontFamily: fontfamily,
        fontStyle: fontstyle,
        fontWeight: fontweight,
        fontSize: fontsize,
        lineHeight: lineHeight,
        textTransform: textTransform,
      }}>
        {label}</span>
    </button>
  );
};

