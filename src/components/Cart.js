import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import Cartvalues from "./CartValues";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  return (
    <Wrapper>
      <HeadWrapper>
        <h1>Your Cart</h1>
        <h4>1 Item</h4>
      </HeadWrapper>
      <Cartvalues />
      <BtnWrapper>
        <p>Total:$12.34</p>
        <Button style={{ width: 100 }}>Purchase</Button>
      </BtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7f268e;
  color: #fff;
  justify-content: space-between;
  height: 100vh;
  width: 400px;
  position: sticky;
`;

const HeadWrapper = styled.div`
  margin-left: 1rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export default Cart;
