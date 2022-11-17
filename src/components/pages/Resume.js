import React from 'react';
import { ImHtmlFive, ImCss3,  } from 'react-icons/im';
import { TbBrandJavascript  } from 'react-icons/tb';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { SiMysql, SiMongodb } from 'react-icons/si';


export default function Resume () {
  return (
    <div className='resume'>
    <div className='d-flex justify-content-center my-5'>
    <a href='https://drive.google.com/file/d/1tryEB24IYS6-RlvU8Zc6QpT0tIJ12j1P/view?usp=share_link'><h1 className='resume-text'>Take a look at my Resume</h1></a>
    </div>
    <div class='row'>
    <div className='text-center'>
      <div className='icons'>
      <p><ImHtmlFive/></p>
      <p><ImCss3/></p>
      <p><TbBrandJavascript/></p>
      <p><FaReact/></p>
      <p><FaBootstrap/></p>
      <p><DiNodejs/></p>
      <p><SiMysql/></p>
      <p><SiMongodb/></p>
    </div>
    </div>
    </div>
</div>

  )
}
