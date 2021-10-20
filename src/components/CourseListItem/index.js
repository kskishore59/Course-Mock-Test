import {
  ListMainItem,
  CourseImage,
  CourseName,
  LinkItem,
} from './styledComponents'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <LinkItem to={`/courses/${id}`}>
      <ListMainItem>
        <CourseImage src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </ListMainItem>
    </LinkItem>
  )
}

export default CourseItem
