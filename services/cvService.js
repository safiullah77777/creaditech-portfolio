import { toast } from "react-toastify";

export const uploadcv = (cv, setLoading) => {
  const formData = new FormData();
  formData.append("cv", cv);
  fetch(`https://nervous-ruby-hippo.cyclic.app/api/forms/uploadcv`, {//https://nervous-ruby-hippo.cyclic.app/
    method: "post",
    body: formData,
  })
    .then(async (data) => {
      console.log("upload cv==>>", await data.json());
      if (data?.status == 200) toast.success("email sent successfully");
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false)
      toast.error('Something went wrong')
      console.log({err});
      return err;
    });
};
