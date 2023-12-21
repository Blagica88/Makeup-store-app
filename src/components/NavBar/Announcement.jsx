import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
background-color: #C7DCA7;
display: flex;
align-items: center;
justify-content: center;
color: #040D12;
height: 40px;
font-weight: bold;
`


const Announcement = () => {
  return (
    <Container>Бесплатна достава за нарачки над 1000 денари!</Container>
  )
}

export default Announcement