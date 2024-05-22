import React , { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const ModalComponent = ( {title, subText, urlPath, isClosed} ) => {
    
    const navigate = useNavigate();
    const [url, setUrl] = useState("");

    const moveToPage = () => {
        setUrl(urlPath);
        navigate(url)
    };
    
    return (
        <ModalWrapper>
                <Modal>
                    <ModalTop>
                        <ModalTitle>{title}</ModalTitle>
                        <SmallTitle>{subText}</SmallTitle>
                    </ModalTop>
                    <ModalBottom>
                        <CancelButton onClick={isClosed}>취소</CancelButton>
                        <OkButton onClick={() => moveToPage()}>확인</OkButton>
                    </ModalBottom>
                </Modal>
        </ModalWrapper>
    );
};

export default ModalComponent;

const ModalWrapper = styled.div`
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    /* 위아래 너비를 준 상태에서 가로 50%, 세로 50%를 이동시킬 수 있다 (= 한가운데 배치) */
    transform: translate(-50%, -50%);
    
    /* 위의 overlay 배경보다 한 단계 더 높게 배치 */
    z-index: 300;
`;

const Modal = styled.div`
    position: relative;
    width: 600px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const ModalTop = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: white;
    justify-content: flex-start;
    margin-left: 5%;
`;

const ModalTitle = styled.div`
    font-size: 20px;
    line-height: 24.2px;
    weight: 600;

`;

const SmallTitle = styled.small`
    font-size: 14px;
    color: #858585;


`;

const ModalBottom = styled.div`
    height: 77px;
    background-color: #F4F4F4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CancelButton = styled.button`
    background-color: #FFFFFF;
    font-size: 14px;
    width: 67px;
    height: 44px;
    margin-right: 15px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
`;


const OkButton = styled.button`
    background-color: #EB4646;
    font-size: 14px;
    color: white;
    width: 67px;
    height: 44px;
    margin-right: 15px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
`;