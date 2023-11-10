import {Sky} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import './BoyaGame.css'
export const BoyaGame = () => {
  return (
    <div className='newgame-container'>
    <Canvas>
      <Sky />
    </Canvas>
    </div>
  )
}