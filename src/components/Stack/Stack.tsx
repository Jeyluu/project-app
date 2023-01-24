import './Stack.css'

export interface StackI {
  id: number
  name: string
}

export interface StackProps {
  stacks: StackI
  hover: boolean
  backgroundColor: string
  onMouseEnter: (id: number) => void
  onMouseLeave: (id: number) => void
}

function Stack(props: StackProps) {
  const { stacks, hover, backgroundColor, onMouseEnter, onMouseLeave } = props
  return (
    <>
      <li
        className={'stack-line'}
        onMouseEnter={() => onMouseEnter(stacks.id)}
        onMouseLeave={() => onMouseLeave(stacks.id)}
        style={{ backgroundColor: hover ? backgroundColor : '' }}
      >
        {stacks.name}
      </li>
    </>
  )
}

export default Stack
