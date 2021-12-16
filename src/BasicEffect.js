import React, {useState, useEffect} from "react";

function BasicEffect() {
  const [age, setAge] = useState(0);
  const handleClick = () => setAge(age + 1);

  useEffect(() => {
    document.title = "You are " + age + " years old!";
  });

  return (
    <div>
      <p> Look at the the title of the current tab in your browser </p>
      <button onClick={handleClick}>Update Title</button>
    </div>
  );
}

export default BasicEffect;
