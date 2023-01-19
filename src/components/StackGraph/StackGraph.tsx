import './StackGraph.css'

interface StackGraphProps {
  focusedStackGraph: boolean
  onClick: () => void
}

function StackGraph(props: StackGraphProps) {
  const { focusedStackGraph } = props

  return (
    <>
      <span
        className={focusedStackGraph ? 'focused-stack-square' : 'stack-square'}
      ></span>
      <span
        className={focusedStackGraph ? 'focused-stack-square' : 'stack-square'}
      ></span>
      <span
        className={focusedStackGraph ? 'focused-stack-square' : 'stack-square'}
      ></span>
      <span
        className={focusedStackGraph ? 'focused-stack-square' : 'stack-square'}
      ></span>
    </>
  )
}

export default StackGraph
