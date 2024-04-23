import { Link } from "react-router-dom";
import "./main.css";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image4 from "../assets/image4.webp";
import image3 from "../assets/image3.webp";
import { useEffect, useState } from "react";


function Home() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="w-4/5 mx-auto flex align-element items-center py-20 mt-[80px] gap-24">
        <div className="mx-auto">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-6xl text-base-content">
            We are changing the way people <br /> shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link to="/products" className="btn btn-info mt-10 text-white">
            Our Products
          </Link>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img
              src={image1}
              className="rounded-box object-cover"
              width={320}
              height={416}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="rounded-box object-cover"
              width={320}
              height={416}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="rounded-box object-cover"
              width={320}
              height={416}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image4}
              className="rounded-box object-cover"
              width={320}
              height={416}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5 mb-30">
        <h3 className="text-3xl font-medium tracking-wider capitalize mb-2">
          Featured Products
        </h3>
        <hr />
      </div>
      <div className="cards_card">
     
          {
            info.length > 0 &&
            info.map((el, index) => {
              return (<div
                className="cards_card_block"
                key={index}
              >
                <img src={el.attributes.image} alt="" width={"320px"} />
                <div className="card_desc">
                  <h4
                    className="title"
                  >
                    {el.attributes.company}
                  </h4>
                  <p className="price"
                  >
                    ${el.attributes.price}
                  </p>
                </div>
              </div>)
            })}
        </div>
    </div>
  );
}

export default Home;
