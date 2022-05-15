import React from "react";
import { useGetCoinQuery, useGetCoinHistoryQuery } from "../services/coinApi";
import styled from "styled-components";
import millify from "millify";
import LineChart from "./LineChart";

type CoinIdProp = {
  id: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 15%;
  width: 1300px;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
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
  margin-left: 15px;
`;

const Label = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-right: 10px;
  color: ${(props) => props.theme.colorText};
  flex: 1;
  border-bottom: 1px solid #dee2e6;
`;
const Title = styled.label`
  font-weight: 800;
  margin-left: 5px;
  font-size: 25px;
  margin-top: 10px;
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
`;

const Url = styled.a`
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colorText};
  padding: 0 15px;
  flex: 1;
`;

const UrlText = styled.label`
  background-color: #ccc;
  border-radius: 5px;
  padding: 0px 10px;
`;

const RightMarket = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: rgba(243, 244, 246, 1);
  border-radius: 12px;
`;

const Coin = ({ id }: CoinIdProp) => {
  const { data, isFetching, isSuccess, isError } = useGetCoinQuery(id);
  const {
    data: coinHistory,
    isFetching: isFechingHistory,
    isSuccess: isSuccessHistory,
    isError: isErrorHistory,
  } = useGetCoinHistoryQuery({ uuid: id, timePeriod: "24h" });
  const coin = data?.data?.coin;
  console.log(coin);
  return (
    <>
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
              <Url href={coin?.websiteUrl}>
                <UrlText>{coin?.name}</UrlText>
              </Url>
            </StatWrapper>
          </Stat>
          <Stat>
            <StatWrapper>
              <Label>Ranking</Label>
              <Url href={coin?.coinrankingUrl}>
                <UrlText>Ranking</UrlText>
              </Url>
            </StatWrapper>
          </Stat>
        </Right>
      </Container>
      <Container>
        <Left>
          <LineChart coinHistory={coinHistory} currentPrice={coin?.price} coinName={coin?.name}></LineChart>
        </Left>
        <RightMarket>
          <Title>Statistics</Title>
          <Stat>
            <StatWrapper>
              <Label>Number of Exchanges</Label>
              <Label>{coin?.numberOfExchanges}</Label>
            </StatWrapper>
          </Stat>
          <Stat>
            <StatWrapper>
              <Label>Number of Markets</Label>
              <Label>{coin?.numberOfMarkets}</Label>
            </StatWrapper>
          </Stat>
        </RightMarket>
      </Container>
    </>
  );
};

export default Coin;
