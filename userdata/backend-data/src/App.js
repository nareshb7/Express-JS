import React, {useState} from "react";
import axios from 'axios'

function App() {
  const [data,setData] = useState({
    id:'',
    name:''
  })
  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(data, 'submitted')
    axios.post('http://localhost:4040/addproducts',data).then(
      ()=> {
        alert('Data Saved Sucessfully')
        setData({id:'', name:''})
      }
    ).catch(err=> console.log(err))
    axios.get('http://localhost:4040/users')
    .then(result => console.log('Api data=> ', result.data))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input type='number' value={data.id} placeholder='id' onChange={(e)=> setData({...data,id: parseInt(e.target.value)})} required/>
        </div>
        <div>
          <input type='text' value={data.name} placeholder='Enter name' onChange={(e)=> setData({...data,name: e.target.value})} required />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
