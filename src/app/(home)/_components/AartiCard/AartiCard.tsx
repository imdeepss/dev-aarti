import { CloseIcon } from "@/_components/icon";
import { Button } from "@/_components/layouts";
import { AartiDataType } from "@/type/index";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const AartiCard = ({ id, title, image, type }: AartiDataType) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleButtonClick = (action: string) => {
    console.log({ action, type, id });
    setOpen(false);
  };

  return (
    <>
      <div className="cursor-pointer rounded-lg border border-secondary p-4 text-center duration-500 ease-in-out hover:scale-110 flex flex-col gap-1 justify-center items-center bg-primary">
        <button onClick={handleModalToggle}>
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="flex-1"
          />
          <h2 className="text-lg font-bold text-secondary">{title}</h2>
        </button>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-white opacity-50" />
          <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-2xl md:px-0 px-5">
            <div className="w-full max-w-xl bg-white rounded-lg relative shadow-2xl md:px-0 px-5">
              <div className="flex w-full">
                <div className="w-2/5">
                  <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-10 w-3/5">
                  {title && (
                    <Dialog.Title className="text-xl font-bold mb-5">
                      {title}
                    </Dialog.Title>
                  )}
                  <div className="flex items-center gap-4">
                    <Button
                      text="Aarti"
                      onClick={() => handleButtonClick("Aarti")}
                    />
                    <Button
                      text="Mantra"
                      onClick={() => handleButtonClick("Mantra")}
                    />
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default AartiCard;
