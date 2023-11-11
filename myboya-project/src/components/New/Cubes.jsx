import {useStore} from './newhooks/useStore'
import { Cube } from './newhooks/Cube.jsx'

export function Cubes(){
  const [cubes] = useStore(state => [state.cubes])

  return cubes.map(({id, pos, texture}) => {
    return (
      <Cube
        key={id}
        position={pos}
        texture={texture}
      />
    )
  })
}