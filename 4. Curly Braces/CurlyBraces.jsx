const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function TodoList() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

// Curly Braces help to write JavaScript code inside JSX.

// Curly Braces are used inside JSX tag content or right after "=" in attributes.

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

// Double Curly Braces are used to use JavaScript Object inside JSX. Usage - inline style - as style object

const element = <h1 id={myId}>{content}</h1>;
// The braces are gone; the code inside is now just function arguments.
// const element = React.createElement('h1', { id: myId }, content);

// Braces after equal sign - tell the compiler to put that value directly into the props object (second argument).
// Braces between tags - tell the comppiler to pass that value as a child element (third argument).

// Automatic Sanitization - to prevent Cross-Site Scripting(XSS) - React automatically escapes any string values before rendering them to the DOM.

// You cannot put an if statement or a for loop there because you cannot pass a statement as a function argument in JavaScript. Instead -
// 1. Conditional Rendering / Logical AND - returns expression.
// 2. Looping - map(), filter(), reduce(), find(), findIndex(), concat(), (... spread) - as it returns a new array.
// 3. Logic outside JSX - outside of return block.
