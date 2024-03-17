import Lottie from 'lottie-react'
import React from 'react'
import empty from '../../media/lottie/emptyCart.json';

const EmptyCart = () => {
  return (
    <>
    <Lottie animationData={empty} height={100} width={100}/>
    </>
  )
}

export default EmptyCart