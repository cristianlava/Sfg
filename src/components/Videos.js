import React from 'react'
import Youtube from './Youtube'
import { Container } from 'semantic-ui-react'
class Videos extends React.Component {
  render () {
    return (
      <div className='video'>
        <Container>
          <article className='vids'>
            <span className='date'>{this.props.vid.date}</span>
            <h2><a href='#'>{this.props.vid.name}</a></h2>
            <p>{this.props.vid.paragraph}</p>
            <Youtube link={this.props.vid.embeddedVid} />
          </article>
        </Container>
      </div>
    )
  }
}

export default Videos
