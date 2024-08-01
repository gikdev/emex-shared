import { forwardRef, useCallback, useRef } from "react"

const Modal = forwardRef(({ children }, ref) => (
  <dialog onCancel={e => e.preventDefault()} className="modal" ref={ref}>
    <div className="modal-box">{children}</div>
  </dialog>
))

function useModal() {
  const dialogRef = useRef(null)

  const closeModal = useCallback(() => dialogRef.current?.close(), [])
  const openModal = useCallback(() => dialogRef.current?.showModal(), [])
  const ModalComponent = useCallback(
    ({ children }) => <Modal ref={dialogRef}>{children}</Modal>,
    [],
  )

  return { Modal: ModalComponent, openModal, closeModal }
}

export { useModal }
