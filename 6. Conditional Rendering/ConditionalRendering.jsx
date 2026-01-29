// Conditional Rendering - Rendering something based on certain logic
const drinks = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

// Using Ternary Operator
return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);

// Using logical AND (&&)
return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);

// Try to keep your code DRY - while using conditional rendering, try to minimize the code duplication.

// If certain logic is not true, the render will not happen - resulting null. 