function Labeler({ label1, label2, id, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex justify-between items-center">
        <span>{label1}</span>
        <span className="text-xs">{label2}</span>
      </label>
      {children}
    </div>
  )
}

export { Labeler }
