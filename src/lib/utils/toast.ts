import { toast } from "react-hot-toast";

export const showToast = {
  success: (msg: string) => {
    toast.dismiss();
    return toast.success(msg, { id: "global-toast" });
  },
  error: (msg: string) => {
    toast.dismiss();
    return toast.error(msg, { id: "global-toast" });
  },
};
