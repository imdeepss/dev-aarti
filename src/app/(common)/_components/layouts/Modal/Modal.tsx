import { CloseIcon } from "@/_components/icon";
import { ModalProps } from "@/type/index";
import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white backdrop-blur-2xl" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-2xl">
          <div className="w-full max-w-3xl bg-white rounded-lg relative shadow-2xl">
            {title && (
              <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            )}
            <div>{children}</div>
            <Dialog.Close
              aria-label="Close"
              className="absolute right-2 top-2 p-2 cursor-pointer"
            >
              <CloseIcon />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
