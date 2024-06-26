import React from "react";
import styled from "styled-components";

function CardItem({ product }) {
  // div칸에 태그넣어서 감싸는것임
  const ImageWrap = styled.div`
    width: 100%;
    height: 140px;
    overflow: hidden;
    &:hover img {
      // div:hover img{}
      transform: scale(1.2);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
    }
  `;
  return (
    <div className="border py-4 px-2">
      {/* 많이쓰니 잘 봐야한다 / &&까지 */}
      {product.images.length > 0 && (
        <ImageWrap>
          <img
            src={`${process.env.REACT_APP_NODE_SERVER_URL}/uploads/${product.images[0]}`}
            alt=""
          />
        </ImageWrap>
      )}
      <div>{product.title}</div>
    </div>
  );
}

export default CardItem;
