function Random(){
  let mNo = () =>{
    return Math.floor(Math.random()*10)+1;
  }
  return <h1 style={{'background-color':'#fff', 'color': '#000'}}>Random Number is {mNo()}</h1>
}

export default Random;