import './Stack.css'

export interface StackI {
  id: number
  name: string
}

export interface StackProps {
  stacks: StackI
  hover: boolean
  backgroundColor: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function Stack(props: StackProps) {
  const { stacks, hover, backgroundColor, onMouseEnter, onMouseLeave } = props
  return (
    <>
      <li
        className={hover ? 'stack-line-hover' : 'stack-line'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          backgroundColor: hover ? backgroundColor : '',
          borderLeft: hover ? `5px solid ${backgroundColor}` : `5px solid`,
        }}
      >
        {stacks.name}
      </li>
    </>
  )
}

export default Stack
