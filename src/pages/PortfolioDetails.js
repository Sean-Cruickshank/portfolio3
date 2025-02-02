import { Link, useLocation, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import toTop from '../utilities/toTop'
import { portfolioData } from "../data/portfolioData"
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PortfolioDetails() {
  
  const [position, setPosition] = React.useState(0)
  
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
      <div className='portfolio-details-notfound'>
        <h1>Page not found</h1>
        <p className='test'>Sorry, the Project ID you entered does not exist</p>
        <Link className='notfound-link' to='/portfolio'>Return to My Projects</Link>
      </div>
      
    )
  }

  let list = "";
  pageData.tags.forEach((tag) => {
    list = list + ", " + tag;
  })
  const formattedList = list.substring(1)

  //Checks whether download links are available or not
  //Downloads table conditionally renders if downloadsList array contains at least one value
  let downloadsList = []
  {pageData.screenshotsFilesize && downloadsList.push(pageData.screenshotsFilesize)}
  {pageData.projectFilesize && downloadsList.push(pageData.projectFilesize)}

  
  function galleryIncrease() {
    if (position < pageData.images.length - 1) {
      setPosition(prev => prev + 1)
    } else {
      setPosition(0)
    }
  }
  function galleryDecrease() {
    if (position > 0) {
      setPosition(prev => prev - 1)
    } else {
      setPosition(pageData.images.length - 1)
    }
  }
  
  return (
    <div className="portfolio-details container">
      <div className='back-button'>
        <Link
          onClick={toTop}
          to={`/portfolio${returnSearchParam}`}
        >
          <FaArrowLeft /> Back to My Projects
        </Link>
      </div>

      <div className='portfolio-details-body'>
        <h1>{pageData.title}</h1>
        <div className='portfolio-details-subtitle'>
          <p>{pageData.yearLong}</p>
          <p>{formattedList}</p>
        </div>

        {params.id === 'tilegame' && <p>hi</p>}

        {pageData.images &&
        <div className='gallery'>
          <div className='gallery-body'>
            <button className='gallery-button-back' onClick={galleryDecrease}><IoIosArrowBack /></button>
            <button className='gallery-button-forward' onClick={galleryIncrease}><IoIosArrowForward /></button>
            <p className='gallery-position'>{position + 1} of {pageData.images.length}</p>
            <img
              src={pageData.images[position]}
              title={pageData.imageTitles[position]}
            />
          </div>
          <p><i>{pageData.imageTitles[position]}</i></p>
        </div>
        
        }

        {pageData.link
          ? 
          <div className='portfolio-details-link'>
            <h2>The website is available to view here!</h2>
            <a  
              href={pageData.link}
                target='_blank'
              >{pageData.link}
            </a>
          </div>
          : null}
          
        <div className='portfolio-details-text'>
          <h2>Why I made this website</h2>
          {pageData.pageText}
        </div>
        {/* { downloadsList.length > 0 &&
          <table className='portfolio-details-table'>
            <thead>
              <tr>
                <td width="18%"></td>
                <th width="33%">Description</th>
                <th width="24%">File Size</th>
                <th width="25%"></th>
              </tr>   
            </thead>
            <tbody>
              {pageData.screenshotsFilesize &&
                <tr>
                  <td>Screenshots</td>
                  <th>{pageData.screenshotsDescription}</th>
                  <th>{pageData.screenshotsFilesize}</th>
                  <th><a href={`https://d2ep14lbls2qwm.cloudfront.net/downloads/${pageData.downloadLink}/screenshots.zip`} download>Download</a></th>
                </tr>
              }
              {pageData.projectFilesize &&
                <tr>
                  <td>Full Project</td>
                  <th>{pageData.projectDescription}</th>
                  <th>{pageData.projectFilesize}</th>
                  <th><a href={`https://d2ep14lbls2qwm.cloudfront.net/downloads/${pageData.downloadLink}/project.zip`} download>Download</a></th>
                </tr>
              }
            </tbody>
          </table>
        } */}
      </div>
    </div>
  )
}