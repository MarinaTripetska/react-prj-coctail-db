import CircleLoader from "react-spinners/CircleLoader";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(252, 255, 252, 0.19);
  user-select: none;
  pointer-events: none;
`;

const Spinner = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  pointer-events: none;
`;

export const Loader = () => {
  return createPortal(
    <Overlay>
      <Spinner>
        <CircleLoader color="#3C82F4" />
      </Spinner>
    </Overlay>,
    document.getElementById("loader-portal")
  );
};
