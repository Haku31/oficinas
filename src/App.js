
import React, { useState } from 'react';
import './Styles/App.css';
import {Header} from './Components/Header';
import {Searchofi} from './Components/Searchofi';
import { Listofi } from './Components/Listofi';
import { useGetoficinas } from './Hooks/useGetoficinas';
import { Itemofi } from './Components/Itemofi';
const API = 'https://boiling-mountain-49639.herokuapp.com/desafio-frontend';

function App() {
  const oficinas = useGetoficinas(API)
  const [search, setSearch] = useState('')
  let searchname = []
  if(!search.length>=1){
    searchname = oficinas
  } else {
    searchname = oficinas.filter(oficina =>{
      const ofiname = oficina.name.toLowerCase()
      const searchname = search.toLowerCase()

      return ofiname.includes(searchname);
    })
  }
  
  return (
    <React.Fragment>
      <Header />
      <Searchofi 
        search={search}
        setSearch={setSearch}
      /> 
      <Listofi>
        {searchname.map(oficina => (
                <Itemofi oficina={oficina} key={oficina.name}/>
            ))}
      </Listofi>   
    </React.Fragment>
    
  );
}

export default App;
/* verde rgba(0,184,134,255) 
  azul claro rgba(45,79,131,255)
*/