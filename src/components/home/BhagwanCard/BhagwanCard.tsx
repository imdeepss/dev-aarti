import { CloseIcon } from "@/components/icon";
import { BhagwanType } from "@/types/index";
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
      <div 
        className="group cursor-pointer rounded-2xl border border-secondary/10 p-5 text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20 flex flex-col gap-3 justify-center items-center glass-panel"
        onClick={handleModalToggle}
      >
        <div className="relative overflow-hidden rounded-full p-1 border-2 border-transparent transition-colors duration-500 group-hover:border-accent/50">
          <Image
            src={image.image}
            alt={image.alt || title}
            width={200}
            height={200}
            className="aspect-square rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <h2 className="text-xl font-bold text-secondary font-amita tracking-wide">{title}</h2>
      </div>

      <Dialog.Root open={isOpen} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] z-50 focus:outline-none">
            <div className="relative w-full overflow-hidden rounded-3xl border border-secondary/20 shadow-2xl glass-panel animate-in fade-in zoom-in-95 duration-300">
              
              {/* Decorative top header in modal */}
              <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-accent/20 to-transparent -z-10" />

              <div className="flex flex-col items-center p-8 text-center">
                <div className="relative mb-6 rounded-full p-2 border-4 border-primary/50 shadow-lg bg-primary/20">
                  <Image
                    src={image.image}
                    alt={image.alt || title}
                    width={150}
                    height={150}
                    className="h-32 w-32 rounded-full object-cover shadow-inner"
                  />
                </div>
                
                {title && (
                  <>
                    <Dialog.Title className="text-3xl font-bold text-secondary font-amita mb-2 drop-shadow-sm">
                      {title}
                    </Dialog.Title>
                    <div className="h-1 w-16 bg-accent rounded-full mb-8 opacity-80 mx-auto" />
                  </>
                )}
                
                <div className="flex flex-wrap items-center justify-center gap-4 w-full px-4 pb-4">
                  {type.map((item) => {
                    const formattedSlug = slug?.current?.toLowerCase();
                    const formattedBookTypeName = item.bookTypeName.toLowerCase();
                    const href = `/${formattedSlug}-${formattedBookTypeName}`;
                    
                    return (
                      <Link
                        href={href}
                        key={item._id}
                        className="relative overflow-hidden rounded-full px-6 py-3 font-gotu text-lg font-medium text-primary bg-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/30 active:scale-95"
                      >
                        <span className="relative z-10">{item.bookTypeName}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <Dialog.Close
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-2 text-secondary/70 hover:bg-secondary/10 hover:text-secondary transition-colors focus:outline-none"
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
