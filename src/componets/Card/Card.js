import image from './run_shoes.png'

function Card(){
    return(
    <section className="card">
      <div className="container">
        <div className="section-content">
          <div className="section-left">
            <h2>Зимняя распродажа</h2>
            <h1>СКИДКИ ДО 90%</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              urna sem, faucibus at porttitor nec, porttitor et velit. Morbi
              tempor turpis vitae risus efficitur semper. Donec ut eleifend
              urna. Cras pellentesque dolor ac hendrerit sagittis. Ut sit amet
              orci luctus, consequat ante in, viverra diam. Proin ut ultrices
              orci, nec scelerisque nisl. Aliquam eget urna eget libero posuere
              convallis.
            </p>
            <button>СМОТРЕТЬ МОДЕЛИ</button>
          </div>
          <div className="sectoin-right">
            <h2 className="price">9 990руб</h2>
            <h2 className="sale">1 900руб</h2>
            <img src={image} className="bg" />
          </div>
        </div>
      </div>
      </section>
    )
}

export default Card