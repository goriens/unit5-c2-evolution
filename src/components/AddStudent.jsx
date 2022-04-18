import { useState } from "react";
import Axios from "axios";

export const AddStudent = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: "",
  });
  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.className] = e.target.value;
    setFormData(newData);
    //console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/students", {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      gender: formData.gender,
      age: formData.age,
      tenth_score: formData.tenth_score,
      twelth_score: formData.twelth_score,
      preferred_branch: formData.preferred_branch,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form className="addstudent" onSubmit={(e) => handleSubmit(e)}>
      <div>
        Firstname:{" "}
        <input
          onChange={(e) => handleChange(e)}
          value={formData.first_name}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          id="first_name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          onChange={(e) => handleChange(e)}
          value={formData.last_name}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          id="last_name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          onChange={(e) => handleChange(e)}
          value={formData.email}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          id="email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            onChange={(e) => handleChange(e)}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          onChange={(e) => handleChange(e)}
          value={formData.age}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          id="age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          onChange={(e) => handleChange(e)}
          value={formData.tenth_score}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          id="tenth_score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          onChange={(e) => handleChange(e)}
          value={formData.twelth_score}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          id="twelth_score"
        />{" "}
      </div>
      <div>
        <select
          onChange={(e) => handleChange(e)}
          value={formData.preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          id="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        <div className="error">
          {formData.first_name.length <= 2 ? "Please Fill Full name" : " "}
          {formData.age >= 100 ? "Please entre right age" : ""}
        </div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
