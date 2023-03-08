
import Header from '../component/Header'
import Div, { IMG, FORM, INPUT, BUTTON } from './Home.style'
import image from "../assest/chef.png"


const Home = ({getSearch, updateSearch, search}) => {
  
  
  return (
    <Div>
      <Header/>
      <FORM onSubmit={getSearch}>
        <INPUT type="text" placeholder='Search' value={search} onChange={updateSearch}></INPUT>
        <BUTTON type="submit">Search</BUTTON>
      </FORM>
      <IMG src={image}/>
      

      </Div>
    
  )
}

export default Home