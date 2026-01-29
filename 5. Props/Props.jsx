import { getImageUrl } from "./utils.js";

// Getting props from a parent component
function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {

    // Adding logic based on a prop
  let thumbnailSize = "b";
  if (imageSize < 90) {
    thumbnailSize = "s";
  }

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId, thumbnailSize)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

// Passing props to a child component
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}

// Utils.js
export function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

// Utilizing the default children prop / Passing JSX in a children prop
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Under the hood, React props function similarly to JavaScript function arguments. When you use JSX, it is compiled into calls to React.createElement(), which returns a plain JavaScript object representing a React element, and the props are passed as a key part of this object.

// **Your clean, HTML-like JSX code (e.g., <MyComponent name="Alice" />) is transformed by a compiler like Babel into standard JavaScript function calls (e.g., React.createElement(MyComponent, { name: "Alice" }, null))

// **Props are immutable - unidirectional data flow - only from parent to children