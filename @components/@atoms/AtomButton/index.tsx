import styled from "@emotion/styled";
import isDarkLight from "@utils/isDarkLight";
import type AtomButtonTypes from "./types";

const AtomButton = styled.button<AtomButtonTypes>`
  ////////////////////////////// DISPLAY //////////////////////////////
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  gap: ${({ gap }) => gap ?? "0px"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  ////////////////////////////// DISPLAY //////////////////////////////

  ////////////////////////////// BOX //////////////////////////////

  width: ${({ width }) => width ?? "max-content"};
  height: ${({ height }) => height ?? "max-content"};
  padding: ${({ padding }) => padding ?? "8px 16px"};
  margin: ${({ margin }) => margin ?? "0px"};
  box-sizing: border-box;

  ////////////////////////////// BOX //////////////////////////////

  ////////////////////////////// COLORS //////////////////////////////
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "#e7e7e7" : backgroundColor ?? "#ffffff"};
  color: ${({ backgroundColor, color }) =>
    color ?? isDarkLight(backgroundColor ?? "#ffffff")};

  ////////////////////////////// COLORS //////////////////////////////

  ////////////////////////////// BORDERS //////////////////////////////

  border-radius: ${({ borderRadius }) => borderRadius ?? "0.25rem"};
  border: ${({ border }) => border ?? "none"};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.06);
  cursor: ${({ cursor, disabled }) =>
    disabled ? "not-allowed" : cursor ?? "pointer"};

  ////////////////////////////// BORDERS //////////////////////////////

  ////////////////////////////// FONTS //////////////////////////////
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  ////////////////////////////// FONTS //////////////////////////////

  outline: none;
  ${({ customCSS }) => customCSS}
`;

export default AtomButton;
