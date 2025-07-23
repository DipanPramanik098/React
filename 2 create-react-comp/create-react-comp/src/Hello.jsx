function Hello(){
  let myName = "Dipan";
  let fullName = ()=>{
    return "Dipan Pramanik";
  }

  let mNo = () =>{
    return Math.floor(Math.random()*10)+1;
  } 
  return <h3>
    This is the future speaking. I am {myName}.Full Name {fullName()} ,Messege Number {mNo()};
  </h3>
}

export default Hello;