import type { NextPage } from 'next'
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'


const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3()

  return (
    <>
      <button onClick={() => connectWallet('injected') } >Connect Wallet</button>
    </>
  )
}

export default Home
