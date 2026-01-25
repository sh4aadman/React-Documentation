function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// React turns the components into a node in DOM and updates the Virtual Dom first through Diffing Algorithm.

// React.createElement(type, props, children).

// Diffing Algorithm compares the new tree (usually after a user interaction or data change) with older one starting from root element and moving down recursively. And then patches to actual DOM.

// Reducing complexity to O(n ^ 3) [complexity of a complete tree comparison] to O(n).
