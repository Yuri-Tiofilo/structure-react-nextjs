import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import Logo from '../assets/rocketseat.svg'
import Link from 'next/link'

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>

      <ul>
        <Link href="/about">
          <li>Home Page</li>
        </Link>
      </ul>
    </Container>
  )
}

export default Home
