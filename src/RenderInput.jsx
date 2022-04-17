import { useState } from "react"

export const RenderInput = (props) => {
  const [text, setText] = useState("")

  const handleUpdate = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if(text) {
      props.log(text)
    }
  }

  return (
    <div>
      <input
        type={"text"}
        placeholder="Enter"
        value={text}
        onChange={handleUpdate}
      />
      <button onClick={handleClick}>Output Console</button>
    </div>
  )
}