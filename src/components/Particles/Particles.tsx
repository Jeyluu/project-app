import { useMemo, useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadTrianglesPreset } from 'tsparticles-preset-triangles'

function ParticlesComponent() {
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
    <Particles id="particles-test" options={options} init={particlesInit} />
  )
}

export default ParticlesComponent
