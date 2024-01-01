import "../styles/Stores.css";
import food from "../images/food-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";
import React, {useState , useRef , useEffect} from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import CustomerMap from "./CustomerMap";
import { IoCloseCircle } from "react-icons/io5";
import  stores  from "../utils/stores";
import { Link } from "react-router-dom";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const StorePopup = ({ store, onClose }) => {
  return (
    <div className="store-popup">
      <div className="OverlayPop"></div>
      <div className="contentPop">
        <div className="headerContentPop">
          <div className="headerContentPopInfo"> 
            <div><span>A</span> : Your Location</div>
            <div><span>B</span> : {store.nom_store} Location</div>
          </div>
          
          <div className="headerContentPopClose">
            <div onClick={onClose}><IoCloseCircle style={{width:'30px',height:'30px' , cursor:'pointer'}}/></div>
          </div>
        </div>
      <div className="map-popup">
        <CustomerMap
          initialLocation={{
            lat: parseFloat(store.localisation.split(',')[0]),
            lng: parseFloat(store.localisation.split(',')[1]),
          }}
        />
      </div>
     
      </div>
    </div>
  );
};
function  Stores() {

  

  const [selectedStore, setSelectedStore] = useState(null);
  
  


  const [searchTerm, setSearchTerm] = useState(""); 

  const [filterTerm, setFilterTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilter = (filter) => {
    setFilterTerm(filter);
  };

  const filteredStores = stores.filter((store) => {
    return (
      (store.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.nom_store.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.liste_menu.join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
      && 
      (filterTerm === "" || store.ville.toLowerCase() === filterTerm.toLowerCase())
    );
  });

 
    

    

  
  return (
    <>
      <div className="stores_container">
        <div className="head">
            <h1
            style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
            }}
            >
            Street Food Stores
            </h1>
            <div className="search">
                <div className="search_input">
                    <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for..."
                    value={searchTerm}
                    onChange={handleSearch}
                    />
                </div>
                <div className="filter_btns">
                <button onClick={() => handleFilter("")}>All</button>
                <button onClick={() => handleFilter("Casablanca")}>Casablanca</button>
                <button onClick={() => handleFilter("Rabat")}>Rabat</button>
                <button onClick={() => handleFilter("Tanger")}>Tanger</button>
                </div>
            </div>
        </div>
        <div className="stores">
            {filteredStores.map((store, index) => (
                <div className="store" key={store.nom_store}>
                
                  <div className="store_logo" >
                  <Swiper
                      
                      pagination={{
                        dynamicBullets: true,
                      }}
                      modules={[Pagination ]}
                      className="mySwiper"
                      
                    >
                      <SwiperSlide>
                        <img
                          src={store.image1}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={store.image2}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="store_info">
                      <h3 style={{ marginTop: "10px" }}><Link style={{color:"black"}}  to={`/store/${store.id}`}>{store.nom_store}</Link></h3>
                      <p>
                      <StarRating rating={store.notation} />
                      </p>
                      <div className="ville_local">
                      <p>{store.ville}</p>
                      <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setSelectedStore(store);
                    }}><FaMapLocationDot className="logo_local_home"/></a>
                    
                      </div>
                      <p style={{ color: "gray", marginTop: "5px" }}>
                      {store.liste_menu.join(" | ")}
                      </p>
                  </div>
                </div>
            ))}
        </div>
        {selectedStore && (
          <StorePopup
            store={selectedStore}
            onClose={() => setSelectedStore(null)}
          />
        )}
          
      </div>
    </>
  );
}
export default Stores;
