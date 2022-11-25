const contactForm = async (params) => {
  await fetch("http://localhost:5000/api/forms/sendEmail", {
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
      alert(data);
    })
    .then((err) => console.log(err));
};
export default contactForm;
