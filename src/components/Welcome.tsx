import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { User } from "firebase/auth";

interface WelcomeProps {
  user: User;
}

const Welcome = ({ user }: WelcomeProps) => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
        <div className="mb-4">
          <p className="text-gray-700">Name: {user.displayName}</p>
          <p className="text-gray-700">Email: {user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
