import './App.css';
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

function App() {

  const [name,setName] =useState("");
  const [description,setDescription] =useState("");
  const [catergory,setCatergory] =useState("");
  const [quantity,setQuantity] =useState("");
  const [price,setPrice] =useState("");


  const handleName = (e) => setName(e.target.value);   
  const handleDescription = (e) => setDescription(e.target.value);   
  const handleCatergory = (e) => setCatergory(e.target.value);   
  const handleQuantity = (e) => setQuantity(e.target.value);   
  const handlePrice = (e) => setPrice(e.target.value);   

  const handleSubmit = (e) => {
    alert(`Name: ${name}
           Description: ${description}
           Catergory:${catergory}
           Quantity:${quantity}
           Price:${price}
        `)
  }

  const handleCancel = (e) => {
    setName(""); 
    setDescription(""); 
    setCatergory(""); 
    setQuantity(""); 
    setPrice(""); 
  }



  return (
    <div className="App">
     <h1> New product</h1>
      <form>
        <table className="table"> 
          <tbody>
            <tr>
              <td>
                <input type="text" value={name} onChange={handleName} placeholder='Name' style={{width:"30%"}}/> 
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" value={description} onChange={handleDescription} placeholder='Description' style={{width:"30%"}}/> 
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" value={catergory} onChange={handleCatergory} placeholder='Catergory' style={{width:"30%"}}/> 
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" value={quantity} onChange={handleQuantity} placeholder='Quantity' style={{width:"30%"}}/> 
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" value={price} onChange={handlePrice} placeholder='Price' style={{width:"30%"}} /> 
              </td>
            </tr>
            <tr>  
              <td>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <Button size="sm" variant='secondary' onClick={handleSubmit}>SUBMIT</Button>
                      </td>
                      <td>
                        <Button size="sm" variant='secondary' onClick={handleCancel}>CANCEL</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>                
              </td>
            </tr>

          </tbody>
        </table>

      </form>






    </div>
  );
}

export default App;
