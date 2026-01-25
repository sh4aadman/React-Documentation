export default function Details() {
  return (
    <>
      <h1 className="heading">Hello!</h1>
      <p>Welcome!</p>
    </>
  );
}

// Return a single element, can use <> </> empty Fragment to wrap returning elements.

// Use camelCase for most of the attribute names.

// Under the hood JSX is transpiled into JavaScript Object, and you can't return multiple element from a single function, so wrapping all the JSX as a single element.

// It is encouraged to close all the HTML tags, even the self closing tags.
