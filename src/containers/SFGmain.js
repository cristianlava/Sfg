import React from 'react'
import App from '../App'
import DND from '../components/DND'
import Videos from '../components/Videos'
import myVids from '../myVids'
class SFGMain extends React.Component {
  vids = () => myVids.map(vid => {
    return <Videos vid={vid} />
  })

  render () {
    return (
      <div>
        <button onClick={this.props.handleBtn} >{this.props.clicked ? 'Videos' : 'DND'}</button>
        {this.props.clicked ? this.vids() : <DND />}
      </div>
    )
  }
}

export default SFGMain;