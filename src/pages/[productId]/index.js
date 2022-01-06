import React, { useEffect, useState } from "react";
import LaptopImag from "../../../public/assets/image/pics/laptop.png";
import Layout from "../../components/common/layouts";
import CommentCard from "../../components/page/productSingle/commentCard";
import { useRouter } from "next/router";

function ProductSingle() {
  let router = useRouter();
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => findProducts(data.products));
  };

  const findProducts = (data) => {
    data.forEach((item) => {
      if (item.id === Number(router.query.productId)) {
        setDataList(item);
      }
    });
  };
  return (
    <Layout title={dataList.title}>
      <section className="product_single">
        <div className="intro_products">
          <img src={dataList.picUrl} alt="" />
          <h6>{dataList.title}</h6>
        </div>

        <div className="comments">
          {(dataList.comments !== []) & (dataList.comments !== undefined)
            ? dataList.comments.map((item, index) => (
                <CommentCard key={index} data={item} />
              ))
            : "no data"}
        </div>
      </section>
    </Layout>
  );
}

export default ProductSingle;
