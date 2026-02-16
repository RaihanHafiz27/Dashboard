import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useState } from "react";

interface FloatingProps {
  placement?: Placement;
  offsetPx?: number;
  shiftScreen?: number;
}

export const useFloatingMenu = ({
  placement = "bottom",
  offsetPx = 8,
  shiftScreen = 0,
}: FloatingProps = {}) => {
  const [open, setOpen] = useState<boolean>(false);

  // Setup Position
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [offset(offsetPx), flip(), shift({ padding: shiftScreen })],

    whileElementsMounted: autoUpdate,
  });

  // Setup Interaction
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  // Interaction merge
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return {
    open,
    setOpen,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  };
};
