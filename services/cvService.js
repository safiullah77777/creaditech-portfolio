import { toast } from "react-toastify";

export const uploadcv = (cv, setLoading) => {
    alert("hello")
  const formData = new FormData();
  formData.append("cv", cv);
  fetch(`http://localhost:5000/api/forms/uploadcv`, {
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
      console.log({err});
      return err;
    });
};
