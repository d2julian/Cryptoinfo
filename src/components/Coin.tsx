import React from "react";
import { useGetCoinQuery } from "../services/coinApi";
import styled from "styled-components";
import millify from "millify";

type CoinIdProp = {
  id: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 15%;
  /* width: 1300px;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto; */
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Stat = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  margin-right: 5px;
  color: ${(props) => props.theme.colorText};
`;
const Value = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colorText};
`;
const Title = styled.label`
  font-weight: 800;
  margin-left: 5px;
  font-size: 25px;
`;

const RankWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 3px;
  border-radius: 25px;
  justify-content: center;
  width: 20%;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RankText = styled.div`
  font-size: 12px;
  color: white;
`;

const CoinTitle = styled.span`
  font-weight: 800;
  margin-left: 5px;
  font-size: 25px;
`;

const ImgCoin = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Change = styled.label`
  color: red;
  font-size: 14px;
  vertical-align: middle;
`;

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

const Url = styled.a`
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  background-color: #ccc;
  color: ${(props) => props.theme.colorText};
  border-radius: 5px;
  padding: 0 15px;
`;

const Coin = ({ id }: CoinIdProp) => {
  const { data, isFetching, isSuccess, isError } = useGetCoinQuery(id);
  const coin = data?.data?.coin;
  console.log(coin);
  return (
    <Container>
      <Left>
        <Stat>
          <RankWrapper>
            <RankText>Rank {coin?.rank}</RankText>
          </RankWrapper>
        </Stat>
        <Stat>
          <CoinWrapper>
            <ImgCoin src={coin?.iconUrl} />
            <CoinTitle>
              {coin?.name}({coin?.symbol})
            </CoinTitle>
          </CoinWrapper>
        </Stat>
        <Stat>
          <Title>
            {coin?.price &&
              millify(coin?.price, {
                precision: 3,
                lowercase: true,
              })}{" "}
            USD <Change>{coin?.change}%</Change>
          </Title>
        </Stat>
      </Left>
      <Right>
        <Stat>
          <StatWrapper>
            <Label>Web</Label>
            <Url href={coin?.websiteUrl}>{coin?.name}</Url>
          </StatWrapper>
        </Stat>
        <Stat>
          <StatWrapper>
            <Label>Web</Label>
            <Url href={coin?.websiteUrl}>{coin?.name}</Url>
          </StatWrapper>
        </Stat>
        <Stat>
          <StatWrapper>
            <Label>Web</Label>
            <Url href={coin?.websiteUrl}>{coin?.name}</Url>
          </StatWrapper>
        </Stat>
      </Right>
    </Container>
  );
};

export default Coin;
