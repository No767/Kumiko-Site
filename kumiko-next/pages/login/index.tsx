import type { NextPage } from 'next'
import { NavBarMain } from '../../shared/shared-components/navbar'
import { LoginBody } from '../../shared/login-components/body'

const LoginHome: NextPage = () => {
  return (
    <div>
        <NavBarMain />
        <LoginBody />
    </div>
  )
}

export default LoginHome