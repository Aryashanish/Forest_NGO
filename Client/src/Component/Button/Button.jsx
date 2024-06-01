// /* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button className="btn-color font-semibold text-xl px-4 py-1 rounded-sm cursor-pointer">
        {props.text}
    </button>
  )
}
