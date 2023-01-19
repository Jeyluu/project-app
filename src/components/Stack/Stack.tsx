import './Stack.css'

export interface StackI {
  id: number
  name: string
}

interface StackProps {
  stacks: StackI
  focusedStack: boolean
  onClick: (stack: StackI) => void
}

function Stack(props: StackProps) {
  const { stacks, focusedStack, onClick } = props
  
  return (
    <>
      <li
        onClick={() => onClick(stacks)}
        className={focusedStack ? 'focused-stack-line' : 'stack-line'}
      >
        {stacks.name}
      </li>
    </>
  )
}

export default Stack
