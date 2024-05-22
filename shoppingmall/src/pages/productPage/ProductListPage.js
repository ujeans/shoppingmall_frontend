import React from 'react';
import styled from 'styled-components';

const ProductListPage = () => {
    return (
        <ProductListPageWrapper>
            <ProductListFilterWrapper>
                <LeftWrapper>
                    <button>추천순</button>
                    <button>가격 낮은순</button>
                    <button>가격 높은순</button>
                    <Selector name="category">
                        <option value="">의류</option>
                        <option value="">가전</option>
                        <option value="">디지털</option>
                    </Selector>
                </LeftWrapper>
                <RightWrapper>
                    <button>상품 등록 &nbsp;
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1092 0.890819C16.6989 0.480662 16.1426 0.250244 15.5625 0.250244C14.9824 0.250244 14.4261 0.480662 14.0158 0.890819L13.0517 1.85499L16.145 4.94832L17.1092 3.98415C17.5193 3.57393 17.7497 3.01758 17.7497 2.43749C17.7497 1.85739 17.5193 1.30104 17.1092 0.890819ZM15.2608 5.83249L12.1675 2.73915L2.0425 12.8642C1.52821 13.3782 1.15015 14.0123 0.942499 14.7092L0.275832 16.9467C0.243645 17.0546 0.241245 17.1693 0.268884 17.2785C0.296524 17.3877 0.353175 17.4875 0.432845 17.5671C0.512514 17.6468 0.612238 17.7035 0.721464 17.7311C0.830691 17.7587 0.945358 17.7563 1.05333 17.7242L3.29083 17.0575C3.98769 16.8498 4.6218 16.4718 5.13583 15.9575L15.2608 5.83249Z" fill="#858585"/>
                        </svg>
                    </button>
               </RightWrapper>
                
            </ProductListFilterWrapper>
            <div></div>
            <div></div>









        </ProductListPageWrapper>
    );
};

export default ProductListPage;

const ProductListPageWrapper = styled.div`
    width: 100%;
    max-width: 1200px; /* 최대 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 추가 */
    border: 1px solid black;
`;

const ProductListFilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;


const LeftWrapper  = styled.div`
    > button {
        margin-right: 10px;
        width: 80px;
        height: 30px;
        border: 1px solid #D1D4D8;
        border-radius: 15px;
        font-size: 12px;
        background-color: #FFFFFF;
        &:hover {
            background-color: #F4F4F4;
            border: 1px solid #D1D4D8;
        }
        &:active {
            background-color: #EB4646E5;
            color: #FFFFFF;
        }
    }
`;


const Selector = styled.select`
    width: 92px;
    height: 30px;
    border: 1px solid #D1D4D8;
    border-radius: 15px;



`;

const RightWrapper = styled.div`

    > button {
        width: 124px;
        height: 40px;
        border: 1px solid #0066FF;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        padding-right: 5px;
        background-color: #FFFFFF;
        

        > svg {
            margin-right: 3px;
            line-height: 16.94px;
            margin-top: 2px;
        }
    }





`;