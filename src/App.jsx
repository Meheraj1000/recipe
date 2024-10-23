
import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import Header from './Header'
import Recipes from './Recipes'
import RecipesCard from './RecipesCard'
import Sidebar from './Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totleTime, setTotleTime] = useState(0)
  const [totleCalorie, setTotleCalorie] = useState(0)


  const adddRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.id === recipe.id)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else {
      alert('Recipe already exists in the queue.')
    }

  }

  const handleRemove = id1 => {
    // fing whice recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.id === id1)
    //remove from want to cook table
    const updatedRecipe = recipeQueue.filter(require => require.id !== id1)
    setRecipeQueue(updatedRecipe);
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeandCalories = (Time, Calorie) => {
    setTotleTime(totleTime+Time)
    setTotleCalorie(totleCalorie + Calorie)
}



return (
  <>
    <Header></Header>
    <Banner></Banner>
    <Recipes></Recipes>
    <div className='flex flex-col md:flex-row gap-6'>
      <RecipesCard adddRecipeToQueue={adddRecipeToQueue}></RecipesCard>
      <Sidebar totleCalorie={totleCalorie} totleTime={totleTime} calculateTimeandCalories={calculateTimeandCalories} preparedRecipe={preparedRecipe} handleRemove={handleRemove} recipeQueue={recipeQueue}></Sidebar>
    </div>
  </>
)
}

export default App
