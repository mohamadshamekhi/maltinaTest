import Link from "next/link";
import React from "react";

function ProductsCard({ data }) {
  return (
    <div className="product_item">
      <Link href={`/${data.id}`}>
        <a className="pic">
          <img src={data.picUrl} alt="" />
        </a>
      </Link>

      <h6>
        <Link href={`/${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </h6>
    </div>
  );
}

export default ProductsCard;
