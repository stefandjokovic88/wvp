function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    profession: document.getElementById("profession").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    healthrecord: document.getElementById("healthrecord").value,
    idnumber: document.getElementById("idnumber").value,
    idcard: document.getElementById("idcard").value,
    city: document.getElementById("city").value,
    accountnumber: document.getElementById("accountnumber").value,
    notice: document.getElementById("notice").value,
  };

  const serviceID = "service_viztgbn";
  const templateID = "template_m366adu";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobile").value = "";
      document.getElementById("profession").value = "";
      document.getElementById("height").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("healthrecord").value = "";
      document.getElementById("idnumber").value = "";
      document.getElementById("idcard").value = "";
      document.getElementById("city").value = "";
      document.getElementById("accountnumber").value = "";
      document.getElementById("notice").value = "";
      // console.log(res);
      alert("Podaci su uspešno poslati!");
    })
    .catch((err) => {
      // console.log(err);
      alert("Došlo je do greške prilikom slanja! Molimo pokušajte ponovo!");
    });
}
