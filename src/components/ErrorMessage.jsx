// This component is used to display error messages
// whenever an operation fails, such as an API request
// or data processing error.
export default function ErrorMessage({ message }) {

  // Render the error message passed as a prop
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
      <p className="text-red-600 font-medium">
        Error: {message}
      </p>
    </div>
  );
}
