import { useEffect} from 'react'
import * as images from '../../assets/new/images'
import { useStore } from './newhooks/useStore'
import { useKeyboard } from './newhooks/useKeyboard'

export const TextureSelector = () => {
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
  }, [dirt,grass,glass,wood,log])


  return(
    <div className='texture-selector'>
      {
        Object.entries(images).map(([imgKey, img]) => {
          return (
            <img
              className={texture === imgKey ? 'selected':''}
              key={imgKey}
              src={img}
              alt={imgKey}
            />
          )
        })
      }
    </div>
  )
}