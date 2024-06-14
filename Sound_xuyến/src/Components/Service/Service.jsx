import React from 'react'
import './Service.css'

function ProductCard({ name, name2, topic, description, description1, description2, price, price1, price2, hours3, hours5, hours24 }) {
    return (
        <div className="product-card">
            <div className="product-topic">{topic}</div>
            <div className="stock-container"></div>
            <div className="product-name">Starting from</div>
            <div className="product-name-more">{price}</div>
            <div className="product-description">
                <p>{description}</p>
                <p style={{ marginTop: "20px" }}>{description1}</p>
                <p style={{ marginTop: "20px" }}>{description2}</p>
            </div>
            <div className="product-price-container">
                <div>
                    <div className="product-price">{hours3} hours</div>
                    <div className="product-price" style={{ marginLeft: "10px" }}>{price} đ</div>
                </div>
                <div className="stock"></div>
                <div>
                    <div className="product-price">{hours5} hours</div>
                    <div className="product-price" style={{ marginLeft: "10px" }}>{price1} đ</div>
                </div>
                <div className="stock"></div>
                <div>
                    <div className="product-price">{hours24} hours</div>
                    <div className="product-price" style={{ marginLeft: "10px" }}>{price2} đ</div>
                </div>
            </div>
        </div>
    );
}

const Service = () => {
    return (
        <div className="service-container" id='service'>
            <div className="service-title">
                <h1>Service</h1>
                <div className="stock-container"></div>
            </div>
            <div className='service'>
                <div className="card1">
                    <ProductCard
                        topic="Basic"
                        name="Bộ mic Comica Vimo C3"
                        description=". Tư vấn, bàn giao thiết bị"
                        description1='. '
                        description2=". "
                        price={200000}
                        price1={230000}
                        price2={250000}
                        hours3={3}
                        hours24={24}
                        hours5={5}
                    />
                </div>
                <div className="card2">
                    <ProductCard
                        topic="Advanced"
                        name="Bộ mic Comica Vimo C3"
                        name2='Phụ Kiện'
                        description=". Tư vấn, bàn giao thiết bị"
                        description1='.'
                        description2="."
                        price={240000}
                        price1={270000}
                        price2={290000}
                        hours3={3}
                        hours24={24}
                        hours5={5}
                    />
                </div>
                <div className="card3">
                    <ProductCard
                        topic="VIP"
                        name="Bộ mic Comica Vimo C3"
                        name2='Phụ Kiện'
                        description=". Tư vấn, bàn giao thiết bị"
                        description1='. Hướng dẫn, hỗ trợ lắp đặt, hỗ trợ kỹ thuật'
                        description2=". Kịch bản âm thanh"
                        price={300000}
                        price1={330000}
                        price2={350000}
                        hours3={3}
                        hours24={24}
                        hours5={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Service