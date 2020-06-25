import React, {useState} from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";

function Portfolio(props) {
  // const [toggler, setToggler] = useState(false);
  const {title, subtitle, imageUrl, largeImageUrl, url, gitHubLink, backEnd, apis, frontEnd} = props.content;

  // const handleToggler = (value) => {
  //   setToggler(value);
  // }

  return (
    <div>
      <div className={props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"}>
        <div className="mi-portfolio-image">
          <img src={imageUrl} alt={title}/>
          <ul>
            {frontEnd ?
              <div>
                <h6>Front End </h6>
                <p>{frontEnd}</p>
              </div> : null}
            {apis ?
              <div>
                <h6>APIs Used</h6>
                <div className='api-links'>
                  {apis.map((api) => <a href={api} target='_blank' key={api}>{api}</a>)}
                </div>
              </div> : null}
            {backEnd ?
              <div>
                <h6>Back End </h6>
                <p>{backEnd}</p>
              </div> : null}
          </ul>
        </div>
        {!url ? <h5>{title}</h5> : <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>}
        {subtitle ? <h6>{subtitle}</h6> : null}
        {!largeImageUrl ? null : <FsLightbox
          // toggler={toggler}
          sources={largeImageUrl}
        />
        }
      </div>
      <div className='portfolio-links'>
        {url ?
          <a rel="noopener noreferrer" target="_blank" href={url}>
            <Icon.Link/>
          </a> : null}
        {gitHubLink ?
          <a rel="noopener noreferrer" target="_blank" href={gitHubLink}>
            <Icon.GitHub/>
          </a> : null}
      </div>
    </div>
  )
}

export default Portfolio;
