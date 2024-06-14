import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewItemById() {
  const [item, setItem] = useState([])

  const { itemId } = useParams()
  console.log(itemId)

  async function carregarDados() {
    const apiURL = "https://rickandmortyapi.com/api/character/" + itemId
    console.log(apiURL)
    const response = await fetch(apiURL)

    const body = await response.json()

    const results = body.results

    setItem(body)

  }

  useEffect(function () {
    carregarDados()
  }, [])
  if (!item) {
    return <div> Carregando... </div>
  }

  return (
    <>
      <h1> {item.name} </h1>
    </>
  )
}

export default ViewItemById
