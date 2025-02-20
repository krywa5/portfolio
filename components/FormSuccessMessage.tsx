import { FunctionComponent, ReactNode } from "react";
import { Button } from "./ui/button";

interface FormSuccessMessageProps {
  title: ReactNode;
  description: ReactNode;
  onClose: () => void;
}

const FormSuccessMessage: FunctionComponent<FormSuccessMessageProps> = ({
  description,
  title,
  onClose,
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md bg-[#00000044] animate-in fade-in-10">
      <div className="flex flex-col items-center gap-8">
        <h2 className="leading-3 text-accent text-2xl">{title}</h2>
        <p className="text-sm">{description}</p>
        <Button variant="outline" onClick={onClose}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default FormSuccessMessage;
