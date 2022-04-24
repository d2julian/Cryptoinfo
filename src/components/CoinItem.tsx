import React from "react";
import millify from "millify";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CoinAtt {
  uuid: string;
  rank: number;
  iconUrl: string;
  name: string;
  price: number;
  [`24hVolume`]: number;
  marketCap: number;
}

interface CoinProps {
  coin: CoinAtt;
}

const Tr = styled.tr`
  height: 45px;
  &:hover {
    background-color: rgba(249, 250, 251);
  }
  &:nth-child(even) {
    background-color: rgba(231, 231, 231);
  }
`;

const Td = styled.td`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
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

const LinkDecorate = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CoinItem = ({ coin }: CoinProps) => {
  return (
    <Tr key={coin.uuid}>
      <Td>{coin.rank}</Td>
      <Td>
        <CoinWrapper>
          <ImgCoin src={coin.iconUrl} />
          <LinkDecorate to={{ pathname: `/coin/${coin.name}` }} state={{ id: coin.uuid }}>
            <CoinTitle>{coin.name}</CoinTitle>
          </LinkDecorate>
        </CoinWrapper>
      </Td>
      <Td>
        {millify(coin.price, {
          precision: 3,
          lowercase: true,
        })}
      </Td>
      <Td>
        {millify(coin[`24hVolume`], {
          precision: 3,
          lowercase: true,
        })}
      </Td>
      <Td>
        {millify(coin.marketCap, {
          precision: 3,
          lowercase: true,
        })}
      </Td>
    </Tr>
  );
};

export default CoinItem;
