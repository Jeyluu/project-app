import './StackGraph.css'

interface StackGraphProps {
  hover: boolean
  backgroundColor: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function StackGraph(props: StackGraphProps) {
  const { hover, backgroundColor, onMouseEnter, onMouseLeave } = props

  return (
    <>
      <span
        className={'stack-square'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          backgroundColor: hover
            ? backgroundColor
            : 'rgba(134, 134, 134, 0.616)',
        }}
      ></span>
    </>
  )
}

export default StackGraph
