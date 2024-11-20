import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
//   useEffect(() => {}, []);
  return <div>Product Detail Page {id}</div>;
};

export default ProductDetail;
