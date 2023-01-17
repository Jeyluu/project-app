import { useMemo, useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadTrianglesPreset } from 'tsparticles-preset-triangles'

function ParticlesComponent() {
  const loaded = useCallback(async (container: Container | undefined) => {
    await console.log('container log', container)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log('engine log', engine)
    await loadTrianglesPreset(engine)
  }, [])

  const options = useMemo(() => {
    return {
      preset: 'triangles',
    }
  }, [])

  return (
    <Particles
      id="particles-test"
      width={'100%'}
      options={options}
      init={particlesInit}
      loaded={loaded}
    />
  )
}

export default ParticlesComponent
