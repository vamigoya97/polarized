import './App.css';
import { useEasybase } from '../node_modules/easybase-react';
import { useState, useEffect } from 'react';
import Container from './components/Container';
import SignIn from './components/SignIn';
import { auth } from "./firebase";

function App() {

  const [easybaseData, setEasybaseData] = useState([]);
  const { db } = useEasybase();

  const mounted  = async() => {
    const ebData = await db("POLAR-VIEWS").return().all();
    setEasybaseData(ebData);
  }

  useEffect(() => {
    mounted();
  }, []);

  const [query, setQuery] = useState('');
  const searchBarFilter = data => {

    var dataArray = [];
    var index = 0;

    for (var elem in data) {
      if (query === '') {
        dataArray.splice(index, 0, data[elem]);
      }
      else if (data[elem].caption.toLowerCase().includes(query.toLowerCase())) {
        dataArray.splice(elem, 1, data[elem]);
      }
      index++;
    };

    return dataArray;
  }

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        // console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe;
  }, []);

  let count = 0;
  return (
    <div className="App">
      <SignIn />
      <div className='header'>
          <h1>POLARIZATION</h1>
          <p>Here is where the explanation and mission of website will be</p>
          <form>
            <input type='text' placeholder='enter words' onChange={event => setQuery(event.target.value)} />
          </form>
      </div>
      <Container user={user} key={count++} data={searchBarFilter(easybaseData)} />
    </div>
  );
}

export default App;
