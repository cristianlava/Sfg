import React from 'react'
import DND from '../components/DND'
import Videos from '../components/Videos'
import { Button, Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/nav.scss'
class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav className='ui three item menu'>
          <a className='active item' href='https://www.youtube.com/user/shadowfrostgaming' target='_blank' ><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          <a className='item' href='https://twitter.com/ShadowFrostG' target='_blank' class='icon fa-twitter' ><FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
          <a className='item' href='https://twitch.tv/shadowfrostgaming' target='_blank' class='icon fa-twitch'><FontAwesomeIcon icon={['fab', 'twitch']} /></a>
        </nav>
      </div>
    )
  }
}

export default Nav
