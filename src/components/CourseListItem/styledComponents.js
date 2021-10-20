import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListMainItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`

export const CourseImage = styled.img`
  height: 60px;
  margin-right: 20px;
`

export const CourseName = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
  color: #1e293b;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
