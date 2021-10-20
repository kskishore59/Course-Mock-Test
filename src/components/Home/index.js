import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import {
  MainContainer,
  Heading,
  ListContainer,
  LoaderContainer,
  ErrorViewContainer,
  ErrorViewImage,
  ErrorViewHeading,
  ErrorViewPara,
  RetryButton,
} from './styledComponents'

import Header from '../Header'
import CourseItem from '../CourseListItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.courses.map(each => ({
      id: each.id,
      logoUrl: each.logo_url,
      name: each.name,
    }))

    if (response.ok) {
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.ok !== true) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ErrorViewContainer className="product-details-error-view-container">
      <ErrorViewImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
      />
      <ErrorViewHeading className="product-not-found-heading">
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

  renderAllCourse = () => {
    const {courseList} = this.state

    return (
      <MainContainer>
        <Heading>Courses</Heading>
        <ListContainer>
          {courseList.map(each => (
            <CourseItem key={each.id} details={each} />
          ))}
        </ListContainer>
      </MainContainer>
    )
  }

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllCourse()
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
        {this.renderProductDetails()}
      </>
    )
  }
}

export default Home
