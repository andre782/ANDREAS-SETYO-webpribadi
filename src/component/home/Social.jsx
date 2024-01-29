import React from 'react'
import { InstagramOutlined, DribbbleOutlined, GithubOutlined  } from '@ant-design/icons';


const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/andrreeee030/" 
        className='home__social-icon' target="_blank"><InstagramOutlined /></a>

        <a href='' className='home__social-icon' target="_blank"><DribbbleOutlined /></a>

        <a href="https://github.com/andre782?tab=repositories" 
        className='home__social-icon' target="_blank"><GithubOutlined /></a>
    </div>
  )
}

export default Social