import styled from "@emotion/styled";
import type AtomLoaderProps from "./types";

const AtomLoader = styled.div<AtomLoaderProps>`
  /* Spinner size and color */
  width: ${({ type }) => typesLoaders[type ?? "small"]};
  height: ${({ type }) => typesLoaders[type ?? "small"]};
  border-top-color: ${({ colorLoad }) => colorLoad ?? "#2d3748"};
  border-left-color: ${({ colorLoad }) => colorLoad ?? "#2d3748"};
  /* Additional spinner styles */
  animation: spinner 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: ${({ type }) => borderWidthType[type ?? "small"]};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
type Props = {
  [key in AtomLoaderProps["type"]]: string;
};

const borderWidthType: Props = {
  small: "2px",
  large: "6px",
  medium: "4px",
};

const typesLoaders: Props = {
  small: "1.5rem",
  large: "5rem",
  medium: "3.5rem",
};
export default AtomLoader;
