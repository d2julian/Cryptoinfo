import React from "react";
import { useGetCoinsQuery } from "../services/coinApi";
import { columns } from "../data/data";
import millify from "millify";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
`;

const Table = styled.table`
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  border-collapse: collapse;
  width: 60%;
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
  text-align: left;
  background-color: beige;
`;

const Td = styled.td`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  vertical-align: middle;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const ImgCoin = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const CoinTitle = styled.span`
  font-weight: 800;
  margin-left: 5px;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function Coins() {
  const { data: coinList, isFetching, isSuccess, isError } = useGetCoinsQuery(5);
  const coins = coinList?.data?.coins;
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
          {coins?.map(
            (coin: { name: string; iconUrl: string; uuid: string; rank: number; price: number; [`24hVolume`]: number; marketCap: number }) => {
              return (
                <Tr key={coin.uuid}>
                  <Td>{coin.rank}</Td>
                  <Td>
                    <CoinWrapper>
                      <ImgCoin src={coin.iconUrl} />
                      <CoinTitle>{coin.name}</CoinTitle>
                    </CoinWrapper>
                  </Td>
                  <Td>
                    {" "}
                    {millify(coin.price, {
                      precision: 3,
                      lowercase: true,
                    })}
                  </Td>
                  <Td>
                    {" "}
                    {millify(coin[`24hVolume`], {
                      precision: 3,
                      lowercase: true,
                    })}
                  </Td>
                  <Td>
                    {" "}
                    {millify(coin.marketCap, {
                      precision: 3,
                      lowercase: true,
                    })}
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </Container>
  );
}

export default Coins;
