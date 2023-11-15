import {useBox} from '@react-three/cannon'
import * as textures from '../../../assets/new/textures'
import { useState } from 'react'
import {useStore} from './useStore'


export function Cube({id, position, texture}){
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])
  const [addCube] = useStore(state => [state.addCube])
  const [ref] = useBox(()=>({
    type:'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']
  return (
    <mesh
    onPointerMove={(e) => {
      e.stopPropagation()
      setIsHovered(true)
    }}
    onPointerOut={(e) => {
      e.stopPropagation()
      setIsHovered(false)
    }}
    ref={ref}
    onClick={(e) => {
      e.stopPropagation
      if(e.button == 2){
        removeCube(id)
      }
      if(e.button == 0){
        const [x,y,z] = Object.values(e.point)
        .map(n => Math.ceil(n))
        addCube(x,y,z)
      }
    }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial 
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture} 
        attach='material' 
      />
    </mesh>
  )
}