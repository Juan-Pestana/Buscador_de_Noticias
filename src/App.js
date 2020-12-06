import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(()=>{
    const consultarAPI= async ()=>{
      const API = process.env.REACT_APP_NEWS_API
      const url =`http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${API}`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles)
    }

    consultarAPI()

  },[categoria])

  return (
    <>
    <Header titulo='Buscador de Noticias'/>
     <div className="container white">
       <Formulario setCategoria={setCategoria}/>
       <ListadoNoticias noticias={noticias}/>
     </div>
    </>
  );
}

export default App;
