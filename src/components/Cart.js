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
        <Item>{storeItems.length}</Item>
      </HeadWrapper>
      <StoreItemsList>
        {storeItems.map((item) => (
          <Cartvalues key={item.id} storeItems={item} />
        ))}
      </StoreItemsList>

      <BtnWrapper>
        <Total>Total:${storeItems.price}</Total>
        <Button style={{ width: 100 }}>Purchase</Button>
      </BtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  flex-direction: column;
  background-color: #7f268e;
  color: #fff;
  justify-content: space-between;
  height: 100vh;
  width: 400px;
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

const Item = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const StoreItemsList = styled.ul``;

const Total = styled.p``;

export default Cart;
