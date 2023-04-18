//to increase and decrease number 
import { useState } from 'react';

import styles from './App.module.css';



function App() {

  // state to keep track of number
  const [number, setNumber] = useState(1)


  //to change and then revert to number if does not match in fizzbuzz loop
  const [changes, setChanges] = useState(number)

 // console.log(changes)
  //logic for incremental
  const incremental = () => {
  //  console.log('working')
    if (number < 15){
      
      setNumber(number + 1);
      setChanges (number +1);
    }
      
    else return number;
   // console.log(number)
  }


//logic for decremental value
const decremental = () =>{
  if (number >1){
    setNumber (number -1)
    setChanges (number -1);
  }
 else return number;
 //console.log('reducing')
}


//fizzbuzz logic
const test = () =>{
if(changes %3 === 0 && changes%5 === 0){
  setChanges('FizzBuzz')
}
else if (changes %3 === 0){
  setChanges ('Fizz')
}
else if (changes%5 === 0){
  setChanges('Buzz')
}
}

  return (
    <div className={styles.main}>
     
      <form >


       {test()}
       <h1>Welcome to Fizzbuzz</h1>
       
        <p className={styles.fontChanging}>{changes}</p>

        
        <button type='button' onClick={() =>{decremental()}}  className={styles.Buttons}> -</button>
        <button type='button' onClick={() => { incremental() }}  className={styles.Buttons}>+</button>
      </form>

    </div>
  );
}

export default App;
