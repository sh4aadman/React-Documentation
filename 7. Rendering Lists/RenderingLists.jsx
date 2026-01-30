//  Rendering Same component for different data - Array / Object can be leveraged - to render a distinct component iterating over a group of data
import { people } from './data.js';
import { getImageUrl } from './utils.js';

// Creating two different array by iterating through a single array 
let chemists = [];
let everyoneElse = [];
people.forEach(person => {
  if (person.profession === 'chemist') {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});

// Using a distinct component for each of the elements of two different array of data
function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  );
}

// Passing two different array through Props
export default function List() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection
        title="Chemists"
        people={chemists}
      />
      <ListSection
        title="Everyone Else"
        people={everyoneElse}
      />
    </article>
  );
}

// {...recipe} indicates passing all the "key"s of the object "recipe" from "recipes" array as Props

// key is needed directly within the context of the surrounding array.
{recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
)
} 
      
// This example renders an Haiku with a seperator <hr /> between each line of the haiku.
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

// <Fragment>..</Fragment> can be used in stead of <>..</> (empty fragment) when it is needed to use key around it.
export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}

// Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in "different" arrays.

// Keys must not change or that defeats their purpose! Don’t generate them while rendering.

// Data from a database: If data is coming from a database, use the database keys/IDs, which are unique by nature.

// Locally generated data: If data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like "uuid" when creating items.

// Usage of crypto.randomUUID()
import React, { useMemo } from 'react';

const StableList = ({ rawData }) => {
  // ✅ DO: Transform data once before rendering
  // useMemo ensures IDs are only generated when rawData actually changes
  const listWithKeys = useMemo(() => {
    return rawData.map(item => ({
      ...item,
      id: crypto.randomUUID() // Stable ID generated once
    }));
  }, [rawData]);

  return (
    <ul>
      {listWithKeys.map(item => (
        // ✅ DO: Use the stable ID as the key
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

// Event Handler Pattern
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (!text.trim()) return;

    // ✅ DO: Generate the unique ID once when the action happens
    const newTodo = {
      id: crypto.randomUUID(), // Stable ID created here
      text: text
    };

    // Add it to state; the key will now persist forever
    setTodos(prev => [...prev, newTodo]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Item</button>

      <ul>
        {todos.map(todo => (
          // ✅ DO: Use the baked-in ID. It won't change on re-renders.
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
