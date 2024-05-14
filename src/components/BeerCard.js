import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BeerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const BeerName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const BeerDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const BeerCard = ({ beer }) => {
  const { name, image_url, description } = beer;

  return (
    <CardContainer>
      <BeerImage src={image_url} alt={name} />
      <BeerName>{name}</BeerName>
      <BeerDescription>{description}</BeerDescription>
    </CardContainer>
  );
};

export default BeerCard;
