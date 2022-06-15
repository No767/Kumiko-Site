import type { NextPage } from 'next'
import { NavBarMain } from '../shared/shared-components/navbar'
import { MainBody } from '../shared/index-components/body'
import { TheRestOfTheBody } from '../shared/index-components/the-rest-of-the-body'

const Home: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <MainBody />
      <TheRestOfTheBody />
    </div>
  )
}

export default Home
