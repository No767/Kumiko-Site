import type { NextPage } from 'next'
import { NavBarMain } from '../shared/shared-components/navbar'
import { MainBody } from '../shared/index-components/body'

const Home: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <MainBody />
    </div>
  )
}

export default Home
