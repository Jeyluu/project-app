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
  const { stacks, focusedStack } = props
  return (
    <>
      <li className={focusedStack ? 'focused-stack-name' : 'stack-name'}>
        {stacks.name}
      </li>
    </>
  )
}

export default Stack
