// src/pages/Home.tsx
/**
 * ${1:Description placeholder}
 *
 * @export
 * @returns {${2:*}}
 */
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100 ">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Welcome to the Product Management App
      </h1>
      <p className="text-center mb-6">
        Manage your products efficiently and effortlessly.
      </p>
      <a
        href="/newProduct"
        className="mt-4 p-3 bg-sky-700  text-white rounded shadow hover:bg-blue-600 transition duration-200 font-bold"
      >
        Create New Product
      </a>
    </div>
  );
}
