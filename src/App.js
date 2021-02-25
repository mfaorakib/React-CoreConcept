import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products=[
    {name:'Photoshop', price:'9.9$'},
    {name: 'Illustrator' , price:'60'},
    {name:'Adobe Reader', Price: '15$'}
  ]
  const productNames = products.map(product=> product.name)
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name='Rubel'></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] =  useState(0);
  const handleInrease = ()=>setCount(count+1);
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase:</button>
    </div>
  )

}

function Users(){
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/users`
    fetch(url)
    .then(res=>res.json())
     .then(data=>setUser(data))
  },[])
  
  return(
    <div>
      <h3> Dynamic user : {user.length} </h3>
      <ul>
        {
          user.map(user=> <li>{user.name}</li>)
        }
      </ul>
      </div>
  )
}

function Product(props){
  const ProductStyle = {
    border : '1px solid gray',
    borderRadius :'5px',
    backgroundColor : 'gray',
    height :'200px',
    width :'200px',
    float : 'left'
  }
  return(
    <div style={ProductStyle}>
    <h2>Name: {props.product.name}</h2>
    <h1> price: {props.product.price}</h1>
    <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  const personStyle ={
    border :'2px solid red',
    margin :'10px'
  }
  return <div style={personStyle}>
   <h1>Name: {props.name}  </h1>
   <h3> Profession: Cricketer</h3>
   </div>
}
  

export default App;

