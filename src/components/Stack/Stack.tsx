import './Stack.css'

export interface StackI {
  id: number
  name: string
}

interface StackProps {
  stacks: StackI
}

function Stack(props: StackProps) {
  const { stacks } = props

  return (
    <>
      <li className={'stack-line'}>{stacks.name}</li>
    </>
  )
}

export default Stack
