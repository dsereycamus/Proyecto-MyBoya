import { useEffect, useState } from 'react'
import * as images from '../../assets/new/images'
import { useStore } from './newhooks/useStore'
import { useKeyboard } from './newhooks/useKeyboard'
export const TextureSelector = () => {
  const [visible, setVisible] = useState(false)
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard()
  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    const selectedTexture = Object
      .entries(options)
      .find(([texture, isEnabled]) => isEnabled )
      if(selectedTexture){
        const [textureName] = selectedTexture
        setTexture(textureName)
      }

      setTexture(selectedTexture)
  },[dirt,grass,glass,wood,log])
}