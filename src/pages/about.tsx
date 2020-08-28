import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

import Logo from '../assets/rocketseat.svg'

const About: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Aboutpage</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>

      <ul>
        <Link href="/">
          <li>About Page</li>
        </Link>
      </ul>
    </Container>
  )
}

export default About
