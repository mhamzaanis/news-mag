import {useState} from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
const App = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  // const [language, setLanguage] = useState('en');
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  )
}

export default App
