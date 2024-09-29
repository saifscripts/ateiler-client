import { Button } from 'keep-react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg p-6">
        <h1 className="text-4xl font-semibold text-gray-700">Order Success</h1>
        <p className="text-gray-500">Your order has been placed successfully</p>
        <div>
          <Button>
            <Link to="/">Go to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
