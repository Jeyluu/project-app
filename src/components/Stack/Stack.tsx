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
      <li className={focusedStack ? '' : ''}>{stacks.name}</li>
      {/* 
      <div id="stack">
        <ul id="stack-list">
          {}
          <li onClick={onClick}>Html</li>
          <li onClick={}>Css</li>
          <li onClick={}>Javascript</li>
        </ul>

        <div id="stack-container">
          <span className="stack-square"></span>
          <span className="stack-square"></span>
          <span className="stack-square"></span>
        </div>
      </div> */}
    </>
  )
}

export default Stack
