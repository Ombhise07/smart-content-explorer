// This component is used to display a loading indicator
// while data is being fetched or processed.
export default function Loader() {
    
  // Render a simple loading message
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="h-10 w-10 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
