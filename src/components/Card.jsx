export default function Card(/*props*/{name, species, gender, image, onClose}) { //usar destructuring para directamene agarrar lo que necesitamos
   return (
      <div>
          <button onClick={onClose}>X</button>
         <h2>{/*props. de vuelta el destructring para usar solo lo que necesitamos*/name}</h2> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} /> 
      </div>
   );
}
