import React from "react";
import { useGetCoinQuery } from "../services/coinApi";
import styled from "styled-components";

type CoinIdProp = {
  id: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Stat = styled.div``;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
`;
const Text = styled.label`
  font-size: 14px;
`;

const Coin = ({ id }: CoinIdProp) => {
  const { data, isFetching, isSuccess, isError } = useGetCoinQuery(id);
  const coin = data?.data?.coin;
  console.log(coin);
  return (
    <Container>
      <Left>
        <Stat>
          <Label>Name: </Label>
          <Text>{coin?.name}</Text>
        </Stat>
        <Stat>
          <Label>Name: </Label>
          <Text>{coin?.name}</Text>
        </Stat>
        <Stat>
          <Label>Name: </Label>
          <Text>{coin?.name}</Text>
        </Stat>
      </Left>
    </Container>
  );
};

export default Coin;
