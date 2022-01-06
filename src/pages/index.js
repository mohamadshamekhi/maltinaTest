import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Layout from "../components/common/layouts";
import ProductsCard from "../components/page/products/productsCard";
import AlertIcon from "../components/icons/AlertIcon";

function Products() {
  const [dataList, setDataList] = useState("loading");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setDataList(data.products));
  };
  return (
    <Layout>
      <section className="products">
        <div className="alert_box">
          <AlertIcon />
          <p>
            تغییر وضعیت کالا ممکن هست با تاخیر انجام گردد اما مراحل خرید و ارسال
            طبق زمان تخمینی اعلام شده انجام خواهد شد.
          </p>
        </div>
        <div className="items">
          {dataList === "loading" ? (
            <Spinner />
          ) : (
            dataList.map((item) => <ProductsCard key={item.id} data={item} />)
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Products;
