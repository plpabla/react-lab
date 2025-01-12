import "milligram";
import { useState } from "react";

const movies = [
  { title: "Wall-E" },
  { title: "Pulp Fiction" },
  { title: "Matrix" },
  { title: "1670" },
];

function App() {
  const [title, setTitle] = useState("The Matrix");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <h1>My favourite movies to watch!</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
      <hr />
      <h2>
        My favourite movie for today is {title.length ? `"${title}"` : "...."}
      </h2>
      <div>
        {title.length < 2
          ? "za krótkie to"
          : title.length > 20
          ? "co to takie długie?"
          : "dobry film"}
      </div>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={() => setTitle("")}>Clear</button>
    </div>
  );
}

export default App;
