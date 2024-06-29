'use client'
import BagIcon from '@/modules/common/images/bag'

const CardWineButton = ({handle}: {handle: string}) => {
  const onClick = () => {
    window.open(`https://wine101.wine/products/${handle}`)
  }

  return (
    <BagIcon width={20} color="black" className="text-black cursor-pointer" onClick={onClick} />
  )
}

export default CardWineButton
