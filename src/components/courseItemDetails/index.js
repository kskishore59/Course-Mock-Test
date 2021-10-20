import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import {
  ItemMainContainer,
  ItemContainer,
  ItemImage,
  TextContainer,
  ErrorViewContainer,
  ErrorViewImage,
  ErrorViewHeading,
  ErrorViewPara,
  RetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ItemDetails extends Component {
  state = {itemDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getItemDetails()
  }

  getItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = {
      description: fetchedData.course_details.description,
      id: fetchedData.course_details.id,
      imageUrl: fetchedData.course_details.image_url,
      name: fetchedData.course_details.name,
    }
    if (response.ok) {
      this.setState({itemDetails: updatedData})
    } else if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderItemDetails = () => {
    const {itemDetails} = this.state
    const {name, imageUrl, description} = itemDetails

    return (
      <ItemMainContainer>
        <ItemContainer>
          <ItemImage src={imageUrl} alt={name} />
          <TextContainer>
            <h1>{name}</h1>
            <p>{description}</p>
          </TextContainer>
        </ItemContainer>
      </ItemMainContainer>
    )
  }

  renderFailureView = () => (
    <ErrorViewContainer >
      <ErrorViewImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      />
      <ErrorViewHeading >
        Oops! Something Went Wrong
      </ErrorViewHeading>
      <ErrorViewPara>
        We cannot seem to find the page you are looking for
      </ErrorViewPara>
      <Link to="/courses/:id">
        <RetryButton type="button" className="button">
          Retry
        </RetryButton>
      </Link>
    </ErrorViewContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderAllDetails()}
      </>
    )
  }
}

export default ItemDetails
