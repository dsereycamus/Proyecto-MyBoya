import {Particles} from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import {useCallback} from 'react'
import { particlesConfig } from './particles-config'
export const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  },[])
  return(
    <div className>
      <Particles
      options={particlesConfig}
      init={particlesInit}
      />
    </div>
  )
}
