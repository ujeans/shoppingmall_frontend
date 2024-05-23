import styled from "styled-components";
import { useEffect, useRef } from "react";

// components
import ModalContainer from "./ModalContainer";
import useClickOutside from "../../../hooks/useClickOutside";
import { BlackBtn, WhiteBtn } from "../../../style/CommonStyles";

const Modal = ({ onClose, title, subText, navigateToPage }) => {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  useClickOutside(modalRef, handleClose);
  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Contents>
            <TitleText>{title}</TitleText>
            <SubText>{subText}</SubText>
          </Contents>
          <Bottom>
            <WhiteBtn padding="8px 16px" onClick={handleClose}>
              취소
            </WhiteBtn>
            <Btn padding="8px 16px" onClick={navigateToPage}>
              확인
            </Btn>
          </Bottom>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 35px 50px 30px 50px;
`;

const TitleText = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
`;

const SubText = styled.div`
  font-size: 14px;
  color: ${props => props.theme.grayTextIcon};
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${props => props.theme.grayBgColor};
`;

const Btn = styled(BlackBtn)`
  margin: 15px 20px 15px 10px;
`;
