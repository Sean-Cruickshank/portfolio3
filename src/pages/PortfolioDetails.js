import { Link, useLocation, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import toTop from '../utilities/toTop'
import { portfolioData } from "../data/portfolioData"

export default function PortfolioDetails() {
  
  const location = useLocation();
  let returnSearchParam = "";
  
  if (location.state) {
    returnSearchParam = location.state.search
  }
  
  const params = useParams();
  const idData = portfolioData.filter(item => item.id === params.id)
  const pageData = idData[0]

  if (!pageData) {
    return (
      <div>
        <h1>Page not found</h1>
        <Link onClick={toTop} to={`/portfolio${returnSearchParam}`}><FaArrowLeft /> Back to My Projects</Link>
      </div>
      
    )
  }

  console.log(pageData)
  
  return (
    <div className="portfolio-details container">
      <Link onClick={toTop} to={`/portfolio${returnSearchParam}`}><FaArrowLeft /> Back to My Projects</Link>
      <div className='portfolio-details-body'>
        <h1>{pageData.title}</h1>
      </div>
    </div>
  )
}