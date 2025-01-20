import { portfolioData, filterData } from "../data/portfolioData"
import { Link, useSearchParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import toTop from '../utilities/toTop'

export default function Portfolio() {

  const [searchParams, setSearchParams] = useSearchParams()

  //Checks whether a value exists for a tag searchParam
  const tagExists = searchParams.get("tag")
  console.log(tagExists)

  //Splits tag searchParam values up into individual strings
  const tagFilter = searchParams.toString()
  const splitFilter = tagFilter.split('&')
  for (let i = 0; i < splitFilter.length; i++) {
    splitFilter[i] = splitFilter[i].substring(4)
    splitFilter[i] = splitFilter[i].toLowerCase()
  }

  //Sorts objects in portfolioData alphabetically
  function compare(a, b) {
    if (a.title < b.title) {
      return -1
      
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  } 
  portfolioData.sort(compare)

  //Populates an array of filtered objects from portfolioData
  //If a filter exists, then compare each object's array of tags to each filter and disclude any that don't contain the filter
  let searchResults;
  if (tagExists) {
    splitFilter.forEach((filter) => {
      if (searchResults) {
        searchResults = searchResults.filter((item) => {
          if (item.tagsBack.find(el => el.toLowerCase() === filter.toLowerCase())) {
            return true
          }
        })
      } else {
        searchResults = portfolioData.filter((item) => {
          if (item.tagsBack.find(el => el.toLowerCase() === filter.toLowerCase())) {
            return true
          }
        })
      }
      
    })
  } else {
    searchResults = portfolioData;
  }

  //Updates the search parameter based on the filters selected
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else if (splitFilter.includes(value)) {
      sp.delete(key, value)
    } else {
      sp.append(key, value)
    }
    return `?${sp.toString()}`
  }

  //Generates the cards for each object in portfolioData
  const portfolioElement = searchResults.map((item) => {
    let list = "";
    item.tagsFront.forEach((tag) => {
      list = list + ", " + tag;
    })
    const formattedList = list.substring(1)
    return (
      <div key={item.id} className="portfolio-card" title={item.title}>
        <Link
          to={item.id}
          state={{search: `?${searchParams.toString()}`}}
          onClick={toTop}
          >
          <div className="portfolio-card-title">
            <h1>{item.title}</h1>
          </div>
          <h2>{item.yearShort}</h2>
          <div className="portfolio-card-body">
            <p>{item.description}</p>
            <img
              className="portfolio-card-thumbnail"
              src={item.thumbnail}
              />
          </div>
          
          <h3>Tags: {formattedList}</h3>
        </Link>
        
      </div>
    )
  })

  //Generates the filter buttons
  const filterElement = filterData.map((item) => {
    return (
      <Link
        to={genNewSearchParamString("tag", `${item.back}`)}
        className={splitFilter.includes(`${item.back}`) ? "filter-selected" : ""}
        key={nanoid()}
          >{item.front}
      </Link>
    )
    
  })
  
  return (
    <div className="container portfolio">
      
      <div className="portfolio-intro">
        <h1>My Projects</h1>
        <p>An overview of some of the personal projects I have completed during my time in web development. I plan on adding new projects here regularly, as I continue to grow and learn new skills!</p>
      </div>
      
      <div className="portfolio-body">
        <div className="portfolio-filters">
          <h2>Filters</h2>

          <div className="portfolio-filters-clear">
            {tagExists ? (
              <Link to={genNewSearchParamString("tag", null)}>Clear Filters</Link>
              ) : null
            }
          </div>
          
          <div className="portfolio-filters-container">
            {filterElement}
          </div>

        </div>
        {searchResults.length > 0 ?
          <div className="portfolio-container">
            {portfolioElement}
          </div>
        :
          <div className="portfolio-no-card">
            <h2>No Projects Found</h2>
            <p>Coming soon hopefully?</p>
          </div>  
        }
      </div>
      
    </div>
  )
}

// 