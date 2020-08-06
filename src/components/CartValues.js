import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { x } from "react-icons-kit/feather/";
import { useDispatch } from "react-redux";
// import removeItem from "../actions";

const CartValues = ({ storeItems }) => {
  const dispatch = useDispatch();
  console.log("store", storeItems);
  return (
    <Wrapper>
      <HeadWrapper>
        <Heading>{storeItems.title}</Heading>
        <IconWrapper>
          <Btn>
            <Icon icon={x} size={40} />
          </Btn>
        </IconWrapper>
      </HeadWrapper>
      <QuantWrapper>
        <Heading1>Quantity:</Heading1>
      </QuantWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: thin dashed grey;
  margin: 0 10px;
  height: 150px;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Heading = styled.h2`
  margin-left: 13px;
`;

const Heading1 = styled.h3`
  margin-left: 10px;
`;

const IconWrapper = styled.span`
  margin-top: 17px;
  margin-right: 14px;
`;

const QuantWrapper = styled.div`
  background-color: #5a1366;
  height: 77px;
  display: flex;
  align-items: center;
  /* margin-top: -15px; */
`;

const Btn = styled.button`
  background-color: #5a1366;
  border: none;
  cursor: pointer;
`;

export default CartValues;
