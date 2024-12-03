import * as ToastPrimitive from "@radix-ui/react-toast";
import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

interface ToastProps {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  description?: ReactNode;
  children?: ReactNode;
}

export const ToastContent: FunctionComponent<ToastProps> = ({
  title,
  isOpen,
  description,
  children,
  setIsOpen,
  ...props
}) => {
  return (
    <>
      <ToastPrimitive.Root
        className="grid grid-cols-[auto_max-content] relative self-end items-center max-w-[315px] bg-[#27272c] border border-slate-500 text-accent rounded-md py-4 px-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={isOpen}
        onOpenChange={setIsOpen}
        {...props}
      >
        <div className="flex flex-col gap-2">
          {title && (
            <ToastPrimitive.Title className="text-accent text-base font-medium text-slate12 [grid-area:_title]">
              {title}
            </ToastPrimitive.Title>
          )}
          {description && (
            <ToastPrimitive.Description asChild>
              <p className="text-white leading-5 text-xs font-medium">
                {description}
              </p>
            </ToastPrimitive.Description>
          )}
        </div>
        {children && (
          <ToastPrimitive.Action
            className="[grid-area:_action]"
            altText="action"
            asChild
          >
            {children}
          </ToastPrimitive.Action>
        )}
        <ToastPrimitive.Close
          aria-label="Close"
          className="absolute top-2 right-2"
        >
          <IoMdClose className="text-white" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </>
  );
};
