export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="text-gray-100 bg-indigo-500 hover:bg-indigo-300 rounded py-3"
    >
      {children}
    </button>
  );
}
