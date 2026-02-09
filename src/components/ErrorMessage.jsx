// This component is used to display error messages
// whenever an operation fails, such as an API request
// or data processing error.
export default function ErrorMessage({ message }) {

  // Render the error message passed as a prop
  return <p>Error: {message}</p>;
}