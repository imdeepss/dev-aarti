import { CloseIcon } from "@/_components/icon";
import { BhagwanType } from "@/type/index";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BhagwanCard = ({ title, slug, image, type }: BhagwanType) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="cursor-pointer rounded-lg border border-secondary p-4 text-center duration-500 ease-in-out hover:scale-110 flex flex-col gap-1 justify-center items-center bg-primary">
        <button onClick={handleModalToggle}>
          <Image
            src={image.image}
            alt={image.alt || title}
            width={200}
            height={200}
            className="aspect-square"
            loading="lazy"
          />
        </button>
        <h2 className="text-lg font-bold text-secondary font-gotu">{title}</h2>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-white opacity-50" />
          <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-2xl md:px-0 px-5">
            <div className="w-full max-w-xl bg-white rounded-lg relative shadow-2xl md:px-0 px-5">
              <div className="flex md:flex-row flex-col w-full p-5">
                <div className="md:w-2/5 w-full">
                  <Image
                    src={image.image}
                    alt={image.alt || title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 w-full">
                  {title && (
                    <Dialog.Title className="text-xl font-bold mb-5">
                      {title}
                    </Dialog.Title>
                  )}
                  <div className="flex flex-wrap items-center gap-4 w-full">
                    {type.map((item) => {
                      const formattedSlug = slug?.current?.toLowerCase();
                      const formattedBookTypeName =
                        item.bookTypeName.toLowerCase();

                      const href = `/${formattedSlug}-${formattedBookTypeName}`;
                      return (
                        <Link
                          href={href}
                          key={item._id}
                          className="group relative inline-block px-4 py-2 font-medium"
                        >
                          <span
                            className={`duration-400 absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-secondary transition ease-out group-hover:-translate-x-0 group-hover:-translate-y-0`}
                          ></span>
                          <span
                            className={`group-hover:bg-secondary-50 absolute inset-0 h-full w-full border border-secondary bg-primary`}
                          ></span>
                          <span
                            className={`relative text-secondary text-lg font-gotu`}
                          >
                            {item.bookTypeName}
                          </span>{" "}
                        </Link>
                      );
                    })}
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

export default BhagwanCard;
