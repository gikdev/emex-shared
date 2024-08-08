import { forwardRef, useCallback, useRef } from "react"

const Modal = forwardRef(({ children, dialogProps, dialogContentContainerProps }, ref) => (
  <dialog onCancel={e => e.preventDefault()} {...dialogProps} ref={ref}>
    <div {...dialogContentContainerProps}>{children}</div>
  </dialog>
))

function useModal() {
  const dialogRef = useRef(null)

  const closeModal = useCallback(() => dialogRef.current?.close(), [])
  const openModal = useCallback(() => dialogRef.current?.showModal(), [])
  const ModalComponent = useCallback(
    ({ children, dialogContentContainerProps, dialogProps }) => (
      <Modal
        dialogProps={dialogProps}
        dialogContentContainerProps={dialogContentContainerProps}
        ref={dialogRef}
      >
        {children}
      </Modal>
    ),
    [],
  )

  return { Modal: ModalComponent, openModal, closeModal }
}

export { useModal }
