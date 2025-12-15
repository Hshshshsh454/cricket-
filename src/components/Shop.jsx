import React from "react";
import styled from "styled-components";

// 🟡 Product Data (You can replace with your real product API or image URLs)
const products = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6LrUvzLg5yEbulLVmNpUxC1rn3ymD7vAUfyURrFnGw&s",
    oldPrice: "₹300",
    newPrice: "₹250",
    title: "Cricket Shoes",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGtK_JCE8O8X5oF_oqPt18YlxjTTFxlj4lA&s",
    oldPrice: "₹190",
    newPrice: "₹150",
    title: "Running Shoes",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeUeci6mKj1t8nznYC5vJ0hGdBn2IdTLdJw&s",
    oldPrice: "₹250",
    newPrice: "₹200",
    title: "Training Shoes",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMxb13jqBLLOpVEXa3GdGJBYnita7aUkFdQ&s",
    oldPrice: "₹200",
    newPrice: "₹120",
    title: "Cricket Kit",
  },
  {
    img: "data:image/jpeg;base64,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",
    oldPrice: "₹100",
    newPrice: "₹151",
    title: "Cricket Balls",
  },
];

// ===== Styled Components =====
const Container = styled.section`
  background: #8d8d8d;
  padding: 70px 0;
  text-align: center;
  font-family: "Segoe UI", sans-serif;
`;

const Title = styled.h2`
  color: #fcd200;
  font-size: 2.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DiscountBanner = styled.div`
  background: #222;
  color: #fff;
  display: inline-block;
  padding: 10px 25px;
  border-radius: 4px;
  margin-bottom: 50px;
  font-size: 1.2rem;
  font-weight: 500;

  span {
    color: #fcd200;
    font-weight: bold;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
`;

const PriceBar = styled.div`
  background: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  color: #fff;
  font-weight: 500;

  span.old {
    text-decoration: line-through;
    color: #aaa;
    margin-right: 5px;
  }

  span.new {
    color: #fcd200;
    font-weight: bold;
  }
`;

const ContactButton = styled.button`
  background: #fcd200;
  border: none;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  color: #000;
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    background: #e0b700;
  }
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: 2px solid #fcd200;
  color: #000;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 50px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #fcd200;
  }
`;

// ===== Component =====
const Shop = () => {
  return (
    <Container>
      <Title>Shop</Title>
      <DiscountBanner>
        Save <span>33% OFF</span>
      </DiscountBanner>

      <ProductGrid>
        {products.map((item, index) => (
          <ProductCard key={index}>
            <img src={item.img} alt={item.title} />
            <PriceBar>
              <div>
                <span className="old">{item.oldPrice}</span>
                <span className="new">{item.newPrice}</span>
              </div>
              <>Buy Now</>
            </PriceBar>
          </ProductCard>
        ))}
      </ProductGrid>

      <ViewAllButton>View All</ViewAllButton>
    </Container>
  );
};

export default Shop;
