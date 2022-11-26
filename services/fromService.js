import { toast } from "react-toastify";

const contactForm = async (params, setLoading) => {
  await fetch("https://creaditech.herokuapp.com/api/forms/contactus", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    //make sure to serialize your JSON body
    body: JSON.stringify({ ...params }),
  })
    .then(async (response) => {
      //do something awesome that makes the world a better place
      const data = await response.json();
      console.log(data, response);
      setLoading(false);
      if (response.status == 200) toast.success("email sent successfully");
    })
    .then((err) => console.log(err));
};
export default contactForm;
