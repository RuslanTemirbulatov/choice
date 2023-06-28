import React from "react"
import ContentLoader from "react-content-loader"

const Card = ({ title, price, desc, image, onClick, loading = false}) => {

    const onClickOrder = () => {
        onClick({title, price, desc, image});
    }

    return (
        <div>
            {
                loading 
                ?
                <ContentLoader 
                    speed={2}
                    width={400}
                    height={450}
                    viewBox="0 0 600 600"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    >
                    <rect x="0" y="0" rx="20" ry="20" width="350" height="233" /> 
                    <rect x="0" y="248" rx="7" ry="7" width="350" height="20" /> 
                    <rect x="0" y="284" rx="9" ry="9" width="350" height="40" /> 
                    <rect x="0" y="356" rx="5" ry="5" width="40" height="20" /> 
                    <rect x="253" y="348" rx="10" ry="10" width="100" height="40" />
              </ContentLoader> 
              : 
              <div className="card">
                <div className='image-card'><img width={350} height={233} src={image} alt="" /></div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="card-title">
                    <b>{price} руб.</b>
                    <button onClick={onClickOrder} className='card-btn'>Заказать</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Card;