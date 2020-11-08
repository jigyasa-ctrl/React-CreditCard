import React, { useState } from 'react';
import './App.css';

function App() {
  const [cardNumber, setCardNumber] = useState('5246 **** **** 5263')
  const [cardName, setCardName]= useState('John Doe')
  const [cardexpire, setCardexpire]= useState('09/22')
  const [cvv, setCvv] = useState('CVV')

  function changeCradNumber(ev) {
    setCardNumber(ev.target.value)
  }
  function changeCardName(ev) {
    setCardName(ev.target.value)
  }
  function changeCardexpire(ev) {
    setCardexpire(ev.target.value)
  }
  function changecvv() {
    document.getElementsByClassName('creditcard')[0].classList.remove('credit2')
    document.getElementsByClassName('creditcard')[0].classList.add('credit');
    setTimeout(() => {
      document.getElementsByClassName('hello')[0].style.visibility='hidden'
      document.getElementsByClassName('back')[0].style.visibility='visible'
    }, 500);
    
  }

  function changingcvv(ev) {
    setCvv(ev.target.value)
  }

 function Submit(e) {
   e.preventDefault()
   document.getElementsByClassName('creditcard')[0].classList.remove('credit')
    document.getElementsByClassName('creditcard')[0].classList.add('credit2')
    setTimeout(() => {
      document.getElementsByClassName('hello')[0].style.visibility='visible'
      document.getElementsByClassName('back')[0].style.visibility='hidden'
    }, 500);
   
  }
  return (
    <div className="App">
       
     <div class='creditcard '>
     <div class='back'>
     
  <p class='cvv'>{cvv}</p>
       </div>
       <div class='hello'>
       <div class='row'>
       <img src='http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-MasterCard-Logo-PNG-Transparent.png' width='100px' height='50px' alt='' />
        
         <img src='https://cryptonewsreview.com/wp-content/uploads/2018/05/2000px-PayPal_Logo_Icon_2014.svg.png' width='50px' height='50px' alt='' />
       </div>
       <div>
       
  <p class='text'>{cardNumber}</p>
       </div>

       
       <div class='row'>

       <div>
         <p>Card Holder</p>
  <p class='text1'>{cardName}</p>
       </div>
       <div >
         <p>Valid thru</p>
  <p  class='text1'>{cardexpire}</p>
       </div>
      
       </div>
     
       </div>
     </div>
    
       <form onSubmit={Submit}>
         <div class='flex'>
         <label>Card Number</label>
        <input type='text' minlength='16' maxlength='16'  onChange = {changeCradNumber} required />
         </div>
     <div class='flex'>
     <label>Card Holder's Name</label>
        <input type='input' onChange ={changeCardName} required/>
     </div>
    
        <div class='row'>
        <div class='flex'>
        <label>Valid thru</label>
        <input type='text' onChange={changeCardexpire} required/>
        </div>
          
        <div class='flex'>
        <label>CVV</label>
        <input type='text' maxLength='3' required onFocus={changecvv} onChange={changingcvv}/>
        </div>
        </div>
        <button type='submit'>SUBMIT</button>
       </form>
     
    </div>
  );
}

export default App;
