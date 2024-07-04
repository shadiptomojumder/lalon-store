import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import StatusChangeOption from "./StatusChangeOption";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UpdateAppointment from "@/api/appointment/updateAppointment";
import { toast } from "sonner";
import { ProductDataType } from "./columns"
import { format } from "date-fns";
import Image from "next/image";

// interface AppointmentData {
//   // Define the structure of your appointmentData prop here
//   _id: string;
//   name: string;
//   phone: string;
//   address: string;
//   service: string;
//   appointmentDate: string;
//   appointmentTime: string;
//   message: string;
//   status: string;
//   createdBy: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

const ViewCustomerModal = ({
  productData,
  onModalClose,
}: {
  productData: ProductDataType;
  onModalClose: () => void;
}) => {

  const queryClient = useQueryClient();
  const handleClose = () => {
    onModalClose();
  };


  const [status, setStatus] = useState<string>("");
  console.log("changeedStatus", status);

    const { mutate, isPending } = useMutation({
      mutationKey: [],
      mutationFn: UpdateAppointment,
      onSuccess: (response) => {
        if (response.statusCode === 200) {
          toast.success("Status successfully Update");
          queryClient.invalidateQueries({ queryKey: ["appointments"] });
          onModalClose();
        }
      },
      onError: (error: any) => {
        console.log("The Error Appointment is:", error);
        if (error?.response?.status == 409) {
          toast.warning(
            "There is already an appointment with this name and date."
          );
        } else if (error?.response?.status == 500) {
          toast.error("Something went wrong during an appointment");
        } else if (error.request) {
          toast.error("No response received from the server!!");
        } else {
          console.error("Error while sending the request:", error.message);
        }
      },
    });

  const handleChanges = async () =>{
    const appointmentId = productData?._id;

    await mutate({ data: { status: status }, appointmentId });
  }
  

  // useEffect(()=>{
  //   setStatus(appointmentData?.status);
  // },[])


  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <h2>View product details</h2>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[600px] md:max-w-[550px] max-w-[90dvw] rounded-lg">
        <DialogHeader>
          <DialogTitle className="">Product Details</DialogTitle>
          <Separator className="bg-primary" />
          <DialogDescription>
            <section className="grid grid-cols-10 gap-3 sm:items-center items-start my-2">      
                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Name<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{productData?.productName}</h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Price<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{productData?.productPrice}</h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Quantity<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{productData?.productQuantity}</h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Category<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{productData?.productCategory}</h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Description<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{productData?.productDescription}</h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Address<span>:</span></Label>
                <h2 className="sm:col-span-6 col-span-4 text-gray-900 font-medium text-base text-start">{format(productData?.createdAt, "dd MMMM yyyy")}
                </h2>

                <Label className="text-base font-semibold sm:col-span-4 col-span-6 flex items-center justify-between">Product Images<span>:</span></Label>
                {
                  productData?.productImage && <div className=""><Image src={productData?.productImage} width={100} height={100} className="min-w-[100px] w-[100px] h-[100px] p-1 rounded-md border border-primary object-cover object-center" alt="Product Image"/></div>
                }
              
            </section>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </DialogClose>
          {/* <Button type="submit" onClick={handleChanges} disabled={appointmentData?.status === status} className="hover:bg-primary">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewCustomerModal;
