import React from 'react'
// import { Icon } from '@iconify/react'
import { Container } from 'react-bootstrap'
// import face from '../images/face.png'

const Personal = () => {
  return (
    <Container>
      <div>
        {/* <Icon
          icon='bx:code-alt'
          className='content-center text-white w-20 h-20 mx-auto ml-0'
          id='personal'
        />{' '} */}
        {/* <h1 className='text-center text-white'>About</h1> */}
        <div className='flex flex-column mt-40'>
          {/* <img
            src={face}
            alt='Josh Claxton'
            className='-mt-40 mb-40 mx-auto'
            id='about'
          ></img> */}
          <p className='text-8xl text-center -mt-40 mb-20 text-[rgb(0,175,145)]'>
            Web Developer
          </p>
          <p className='text-white text-2xl sm:col-2 mx-auto indent-10 w-1/2'>
            I am a <pre className='inline'>software engineer</pre>, father of 3
            beautiful children, and husband to the best wife in the world.
          </p>
          <br />
          <p className='text-white text-2xl sm:col-2 mx-auto indent-10 mb-40 w-1/2'>
            I love building beautifully functional websites and web
            applications. I enjoy solving the problems that everyone else has
            issues figuring out. I like making things work, even if they are
            very complicated.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
