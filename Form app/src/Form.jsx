function Form() {
  return (
    <div>
      <h1>Form in React</h1>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="Enter Your First Name"></input>
        <label>Last Name</label>
        <input type="text" placeholder="Enter Your Last Name"></input>
        <label>Email</label>
        <input type="Email" placeholder="Enter your Email" />
        <label>Contact</label>
        <input type="number" placeholder="Enter your Mobile Number" />
        <p>Gender</p>
        <input type="radio" name="gender"></input>Male
        <input type="radio" name="gender"></input>Female
        <input type="radio" name="gender"></input>Other
        <br></br>
        <label>Your Best Subject</label>
        <input type="checkbox"></input>
        <label>English</label>
        <input type="checkbox"></input>
        <label>Maths</label>
        <input type="checkbox"></input>
        <label>Physcis</label>
      </form>
    </div>
  );
}

export default Form;
