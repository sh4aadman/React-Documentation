// Default export
export default function Heading() {
  return <h1>Greetings!</h1>;
}

// named export
export function Paragraph() {
  return <p>Hello!</p>;
}

// default import
import Heading from "./ImportExport.jsx";

// named import
import { Paragraph } from "./ImportExport.jsx";

// It is encouraged to use one convention, either default or named.

// Build tools can read React files both in .js extension or .jsx extension in file name, using .jsx ensures clarity.
