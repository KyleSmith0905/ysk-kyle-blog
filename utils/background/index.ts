import { Clock, Color, Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, WebGLRenderer } from 'three'
import colors from 'tailwindcss/colors'
import backgroundShader from './shader.frag'

const animationController = ({ container }: {container: HTMLDivElement}) => {
  const boundingClientRect = container.getBoundingClientRect()
  const width = boundingClientRect.width
  const height = boundingClientRect.height

  const camera = new OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
  camera.position.z = 1
  camera.updateProjectionMatrix()

  const scene = new Scene()
  scene.background = new Color(colors.zinc[950])

  const plane = new PlaneGeometry(width, height)

  const material = new ShaderMaterial({
    uniforms: {
      u_time: { value: 0 },
      u_opacity: { value: 0.05 },
      u_color: { value: new Color(colors.zinc[500]) }
    },
    fragmentShader: backgroundShader,
    transparent: true
  })

  const mesh = new Mesh(plane, material)
  scene.add(mesh)

  const renderer = new WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  container.appendChild(renderer.domElement)

  const clock = new Clock()
  clock.start()

  return {
    animate: () => {
      const elapsedTime = clock.getElapsedTime()

      renderer.render(scene, camera)

      material.uniforms.u_time.value = elapsedTime / 25
    },
    resize: () => {
      const boundingClientRect = container.getBoundingClientRect()
      const width = boundingClientRect.width
      const height = boundingClientRect.height

      renderer.setSize(width, height)
      camera.left = width / -2
      camera.right = width / 2
      camera.top = height / 2
      camera.bottom = height / -2

      plane.dispose()
      const newPlane = new PlaneGeometry(width, height)
      mesh.geometry = newPlane
    }
  }
}

export { animationController }
