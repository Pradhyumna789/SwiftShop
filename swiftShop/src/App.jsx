function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="w-full max-w-xs space-y-6">
        <div className="border rounded-xl p-8 flex flex-col items-center shadow-sm">
          <span className="text-2xl font-bold mb-2 text-center">React T-shirt</span>
          <span className="text-lg text-center mb-2">$20</span>
          <span className="bg-red-600 text-white text-sm font-bold rounded-full px-4 py-1 mb-3">SALE</span>
          <button className="bg-blue-700 text-white font-medium rounded-md px-6 py-2 mt-1">Buy Now</button>
        </div>
        <div className="border rounded-xl p-8 flex flex-col items-center shadow-sm">
          <span className="text-2xl font-bold mb-2 text-center">JavaScript Mug</span>
          <span className="text-lg text-center mb-4">$15</span>
          <button className="bg-blue-700 text-white font-medium rounded-md px-6 py-2">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
