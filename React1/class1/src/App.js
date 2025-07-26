import logo from './logo.svg';
import './App.css';
import Item from './component/Item';

import ItemDate from './component/ItemDate';

import Card from './component/Card'

function App() {
  const response = [
    {
      itemName:"Dipan",
      itemDate:20,
      itemMonth:"june",
      itemYear:2000
    },
    {
      itemName:"A",
      itemDate:11,
      itemMonth:"july",
      itemYear:1900
    },
    {
      itemName:"D",
      itemDate:31,
      itemMonth:"jan",
      itemYear:2028
    },
  ]
  const myName = "Dipan";
  return (
    <div>
    <Item name={response[0].itemName}>
      I am Dipan Pramanik. Learning React.
    </Item>
    <ItemDate day={response[0].itemDate} month="June" year="2000"></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate day="10" month="Jan" year="2991"></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate day="11" month="Nov" year="2025"></ItemDate>


    <Card>This is A Card Demo</Card>
    <div className="App">
      Hello React
    </div>
    </div>
  );
}

export default App;
