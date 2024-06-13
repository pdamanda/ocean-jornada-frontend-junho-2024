import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { useEffect } from 'react'

function App() {

  const [itens, setItens] = useState([])

  async function carregarDados() {
    const apiURL = "https://rickandmortyapi.com/api/character"

    const response = await fetch(apiURL)

    const body = await response.json()

    const results = body.results

    console.log('results', results)

    setItens(results)

  }

  useEffect(function () {
    carregarDados()
  }
  )


  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(function (elemento) {
          return <Card item={elemento} key={elemento.name} />
        })}
      </div>


    </>
  )
}

export default App
