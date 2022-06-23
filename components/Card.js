import './Card.css';


function Card({producto, precio, img}) {
  return (
    <section className="card" >
         <h4>{producto}</h4>         
         <p>{precio}</p>
         <img src={img} />
         </section>
  );
}

export default Card;


