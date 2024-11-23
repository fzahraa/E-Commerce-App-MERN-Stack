import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import React from "react";

const PortraitContainer = styled.div`
  flex: 1;
  height: 80vh;
  position: relative;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  flex: 1;
  margin: 3px;
  ${mobile({ "minWidth": "200px" })}
  `;

  const LandscapeContainer = styled.div`
  flex: 1;
  height: 50vh;
  position: relative;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  flex: 1;
  margin: 3px;
  ${mobile({ "minWidth": "200px" })}
  `;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PortraitTitle = styled.h1`
    color:white;
    font-size: 2em;
    margin-bottom: 20px;
`;
const LandscapeTitle = styled.h1`
    color:white;
    font-size: 4em;
    margin-bottom: 20px;
    ${mobile({fontSize: "2em" })}

`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryItem = ({ item }) => {
  const [imgHeight , setImageHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const imgElement = React.useRef(null);

  return (
    <>
    <Image id="Image" src={item.img} ref={imgElement} style={{"display" : 'none'}}
      onLoad={() => {
      setImageHeight(imgElement.current.naturalHeight);
      setImgWidth(imgElement.current.naturalWidth);
      console.log(imgElement.current.naturalHeight + item.cat)
      }}
/>
{ imgHeight <= 750 ? (
  <LandscapeContainer>
      <Link to={`/products/${item.cat}`}>
      <Image id="Image" src={item.img} ref={imgElement}
      />
      <Info>
        <LandscapeTitle>{item.title}</LandscapeTitle>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </LandscapeContainer>
):
    <PortraitContainer>
      <Link to={`/products/${item.cat}`}>
      <Image id="Image" src={item.img} ref={imgElement}
      />
      <Info>
        <PortraitTitle>{item.title}</PortraitTitle>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </PortraitContainer>
}
    </>
  );
};

export default CategoryItem;
