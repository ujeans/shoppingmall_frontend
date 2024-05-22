import React , { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const ModalComponent = ( props) => {
    const {title, subText, setIsVisible, urlPath} = props;
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const closeBtn =() => {
        setIsVisible(false);
    };

    const moveToPage = () => {
        setUrl(urlPath);
        navigate(url)
    };
    
    return (
        <ModalWrapper>
             <Modal>
                <ModalTop>
                    <Title>{title}</Title>
                    <SubTitle>{subText}</SubTitle>
                </ModalTop>
                <ModalBottom>
                    <CancelButton onClick={() => closeBtn()}>취소</CancelButton>
                    <OkButton onClick={() => moveToPage()}>확인</OkButton>
                </ModalBottom>
            </Modal>
        </ModalWrapper>
       
    );
};

export default ModalComponent;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    /* 위아래 너비를 준 상태에서 가로 50%, 세로 50%를 이동시킬 수 있다 (= 한가운데 배치) */
    transform: translate(-50%, -50%);
    
    /* 위의 overlay 배경보다 한 단계 더 높게 배치 */
    z-index: 300;
`;

const Modal = styled.div`
    position: relative;
    width: 669px;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    background-color: gray;
`;

const ModalTop = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: #FFFFFF;
`;

const Title = styled.div`




`;

const SubTitle = styled.div`




`;


const ModalBottom = styled.div`
    height: 77px;
    background-color: #F4F4F4;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > button {
        width: 67px;
        height: 44px;
        margin-right: 15px;
        border-radius: 10px;
        border: 1px solid #D9D9D9;
    }
`;

const CancelButton = styled.button`
    background-color: #FFFFFF;
    font-size: 14px;
`;


const OkButton = styled.button`
    background-color: #EB4646;
    font-size: 14px;
    color: white;
`;