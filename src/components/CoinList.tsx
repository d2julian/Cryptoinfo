import React, { useState, useEffect } from "react";
import { columns } from "../data/data";
import CoinItem from "./CoinItem";
import styled from "styled-components";
import { useGetCoinsQuery } from "../services/coinApi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const Container = styled.div`
  margin-top: 100px;
`;

const Table = styled.table`
  border: 1px solid #e5e7eb;
  border-collapse: collapse;
  width: 90%;
  table-layout: fixed;
  margin: auto;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody`
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const Tr = styled.tr`
  height: 45px;
  &:hover {
    background-color: rgba(249, 250, 251);
  }
`;
const Th = styled.th`
  font-size: 16px;
  text-align: center;
  background-color: beige;
`;

interface coinsInterface {
  name: string;
  iconUrl: string;
  uuid: string;
  rank: number;
  price: number;
  [`24hVolume`]: number;
  marketCap: number;
}

function CoinList() {
  const [coins, setCoins] = useState<[coinsInterface]>();
  const filter = useSelector((state: RootState) => state.coins.filter.toLowerCase());
  const { data, isFetching, isSuccess, isError } = useGetCoinsQuery(100);
  useEffect(() => {
    if (isSuccess) {
      setCoins(data.data.coins.filter((e: coinsInterface) => e.name.toLowerCase().includes(filter)));
    }
  }, [data, filter]);
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            {columns.map((title: string) => (
              <Th key={title}>{title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {coins?.map((coin: coinsInterface) => {
            return <CoinItem key={coin.uuid} coin={coin} />;
          })}
        </Tbody>
      </Table>
    </Container>
  );
}

export default CoinList;
