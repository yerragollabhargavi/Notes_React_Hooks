import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BgContainer,
  FormInput,
  InputEle,
  NotezImg,
  Heading,
  InputTextArea,
  Container,
  Paragraph,
  Button,
} from './styledComponents'

const Notes = () => {
  const [titlez, setTitle] = useState('')
  const [noteztxt, setNote] = useState('')

  const [noteslist, setList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotez = event => {
    setNote(event.target.value)
  }

  const onSubmitDefault = event => {
    event.preventDefault()

    const o = {
      id: uuidv4(),
      titlez,
      noteztxt,
    }
    setList(prevState => [...prevState, o])
    setTitle('')
    setNote('')
    console.log(noteslist)
  }

  return (
    <BgContainer>
      <Heading>Notes</Heading>
      <FormInput onSubmit={onSubmitDefault}>
        <InputEle
          type="text"
          value={titlez}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <br />
        <InputTextArea
          onChange={onChangeNotez}
          placeholder="Take a Note..."
          value={noteztxt}
          rows="6"
          column="10"
        />
        <Button type="submit">Add</Button>
      </FormInput>
      {noteslist.length === 0 ? (
        <>
          <NotezImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading>No Notes Yet</Heading>
          <Paragraph>Notes you add will appear here</Paragraph>
        </>
      ) : (
        <Container>
          {noteslist.map(eachData => (
            <NoteItem key={eachData.id} eachData={eachData} />
          ))}
        </Container>
      )}
    </BgContainer>
  )
}
export default Notes
