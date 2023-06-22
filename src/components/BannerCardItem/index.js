import './index.css'

const Card = props => {
  const {bannerCardsList} = props
  const {headerText, description, className, id} = bannerCardsList
  return (
    <li className={className}>
      <div className="background">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Card
