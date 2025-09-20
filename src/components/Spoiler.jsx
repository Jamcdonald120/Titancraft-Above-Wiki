export default function Spoiler({context, children}) {
	return <details>
      <summary>SPOILER: {context}</summary>
      { children }
    </details>
}