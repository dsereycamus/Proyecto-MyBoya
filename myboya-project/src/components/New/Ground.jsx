import { usePlane } from '@react-three/cannon'
import { groundTexture } from '../../assets/new/textures'
import { useStore } from './newhooks/useStore'

export function Ground(){
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2,0,0],
    position: [0,-0.5,0]
  }))
   const [addCube] = useStore(state => [state.addCube])
  groundTexture.repeat.set(100,100)
  const handleClickGround = event => {
    event.stopPropagation()
    const [x,y,z] = Object.values(event.point)
      .map(n => Math.ceil(n))
    addCube(x,y,z)
  }
  return (
    <mesh
      onClick={handleClickGround} 
      ref={ref}
      >
      <planeGeometry attach='geometry' args={[100,100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
      
    </mesh>
  )
}