import React, {useState, useEffect} from 'react'
import PizzaCard from './PizzaCard'
import FilterPizzas from './FilterPizzas'
import axios from 'axios'



const AllPizzas = () => {
  // const [loading, setLoading] = useState(true)
  const [pizzas, setPizzas] = useState([])
  const [typeFilter, setTypeFilter] = useState('')

  useEffect(() => {
    async function getPizzas() {
      try {
        const res = await axios.get('/api/pizzas')
        const info = res.data
        setPizzas(info)
      } catch (error) {
        console.log('there was a problem')
      }
    }
    getPizzas()
  }, [])
  
  const pizzaCities = Array.from(new Set(pizzas.map((el) => {
    return el.cityOfPizza
  })))

  const pizzasToShow = pizzas.filter((pizza) => {
    if(typeFilter && typeFilter !== 'All') {
      return pizza.cityOfPizza === typeFilter
    }
    return true
  })

  return (
      <div>
        <FilterPizzas pizzaCities={pizzaCities} setSelected={setTypeFilter} />
        <div className="allpizzas">
          {pizzasToShow.map(pizza => {
            return <PizzaCard key={pizza.id} pizza={pizza} />
          })}
        </div>
      </div>
  )
}

 export default AllPizzas