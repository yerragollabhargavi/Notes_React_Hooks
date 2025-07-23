import {ListContainer, Heading, Paragraph} from './styledComponents'

const NoteItem = props => {
  const {eachData} = props
  const {titlez, noteztxt} = eachData
  return (
    <ListContainer>
      <Heading>{titlez}</Heading>
      <Paragraph>{noteztxt}</Paragraph>
    </ListContainer>
  )
}

export default NoteItem
