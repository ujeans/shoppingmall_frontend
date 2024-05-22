import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalComponent from '../../components/modal/ModalComponent';

const ProductListPage = () => {
   const navigate = useNavigate();
   const [isVisible, setIsVisible] = useState(false);
   const [isLogin, setIsLogin] = useState(false);
   const productsPerRow = 4;
   const pages = [1, 2, 3, 4, 5];
   const [currentPage, setCurrentPage] = useState(1);
   const [productList, setProductList] = useState([
    {
        id: 1,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 4,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 5,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 6,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 7,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
      {
        id: 8,
        image: "https://via.placeholder.com/150",
        productName: "아디다스",
        productPrice: "56000",
        description:
          "상품 설명 상품 설명 상품 설명 상품 설명",
      },
   ]);

   const closeModal = () => {
        setIsVisible(false);
   };

   const onPageChange = (page) => {
        setCurrentPage(page);
        console.log(`Page changed to ${page}`);
    };

   const checkLogin = () => {
       if (isLogin === true) {
        navigate("/PR");
        setIsVisible(false);
       } else {
        setIsVisible(true);
       }
   };

    return (
        <ProductListPageWrapper >
            <ProductListFilterWrapper>
                <LeftWrapper>
                    <button >추천순</button>
                    <button>가격 낮은순</button>
                    <button>가격 높은순</button>
                    <Selector name="category">
                        <option value="">의류</option>
                        <option value="">가전</option>
                        <option value="">디지털</option>
                    </Selector>
                </LeftWrapper>
                <RightWrapper>
                    <button onClick={checkLogin}>상품 등록 &nbsp;
                        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1092 0.890819C16.6989 0.480662 16.1426 0.250244 15.5625 0.250244C14.9824 0.250244 14.4261 0.480662 14.0158 0.890819L13.0517 1.85499L16.145 4.94832L17.1092 3.98415C17.5193 3.57393 17.7497 3.01758 17.7497 2.43749C17.7497 1.85739 17.5193 1.30104 17.1092 0.890819ZM15.2608 5.83249L12.1675 2.73915L2.0425 12.8642C1.52821 13.3782 1.15015 14.0123 0.942499 14.7092L0.275832 16.9467C0.243645 17.0546 0.241245 17.1693 0.268884 17.2785C0.296524 17.3877 0.353175 17.4875 0.432845 17.5671C0.512514 17.6468 0.612238 17.7035 0.721464 17.7311C0.830691 17.7587 0.945358 17.7563 1.05333 17.7242L3.29083 17.0575C3.98769 16.8498 4.6218 16.4718 5.13583 15.9575L15.2608 5.83249Z" fill="#858585"/>
                        </svg>
                    </button>
               </RightWrapper>
                
            </ProductListFilterWrapper>
            <ProductListContainer>
                {productList.map((product, index) => (
                    <ProductItem key={index} productsPerRow = { productsPerRow} >
                        <ProductImage src={product.image} alt={product.productName}/>
                        <ProductInfoWrapper>
                            <div>
                                <div>{product.productName}</div>
                                <div>{product.productPrice}</div>
                                <div>{product.description}</div>
                            </div>
                            <Icon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" fill="white"/>
                                    <path d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </Icon>
                        </ProductInfoWrapper>
                    </ProductItem>
                ))}     
            </ProductListContainer>
            <PaginationContainer>
                <PageButton
                    onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}>
                    <ArrowIcon  alt="Previous" >
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 16.5L1.25 9L8.75 1.5" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowIcon>
                </PageButton>
                {pages.map((page, index) => (
                    <PageButton
                    key={index}
                    onClick={() => onPageChange(page)}
                    isActive={currentPage === page}
                    >
                    {page}
                    </PageButton>
                ))}
                <PageButton
                    onClick={() =>
                    onPageChange(
                        currentPage < pages.length ? currentPage + 1 : pages.length
                    )
                    }
                >
                    <ArrowIcon alt="Next" flipped>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 1.5L8.75 9L1.25 16.5" stroke="#858585" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </ArrowIcon>
                </PageButton>
            </PaginationContainer>        

           
            {isVisible && (
                <ModalComponent title="로그인이 필요한 기능입니다." 
                                subText="로그인 페이지로 이동하시겠습니까?" 
                                urlPath="/login" 
                                isClosed={closeModal}/>
                )};    
                    
                    
                       
        </ProductListPageWrapper>
    );
};

export default ProductListPage;

const ProductListPageWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px; 
`;

const ProductListFilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const LeftWrapper  = styled.div`
    margin-left: 1%;
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
    margin-right: 1%;
    > button {
        width: 124px;
        height: 40px;
        border: 1px solid #FFFFFF;
        font-size: 14px;
        font-weight: 600;
        line-height: 16.94px;
        padding-right: 5px;
        background-color: #FFFFFF;
        cursor: pointer;
        
        > svg {
            margin-right: 3px;
            line-height: 16.94px;
            margin-top: 2px;
        }
    }
`;

const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    margin: 10px;
    width: calc(100% / ${(props) => props.productsPerRow} - 20px);
    box-sizing: border-box;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: red;
`;

const ProductInfoWrapper = styled.div`
    display: flex;
`;

const Icon = styled.div`
    > svg {
        &:active {
            fill: red;
        }
    }
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const PageButton = styled.button`
  color: ${(props) => (props.isActive ? "white" : "#858585")};
  background-color: ${(props) => (props.isActive ? "#EB4646" : "#f4f4f4")};
  width: 45px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;

const ArrowIcon = styled.div`
  width: 10px;
  height: 18px;
  &:hover {
    background-color: #eb4646;
    color: white;
  }
`;
