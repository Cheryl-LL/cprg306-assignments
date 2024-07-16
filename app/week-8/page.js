"use client";

import Link from "next/link";
import { useUserAuth } from "./utils/auth-context";

export default function Week8Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user)

  return (
    <div>
      <h1 className="m-5 text-3xl">Firebase Auth</h1>
      {user ? (
        // user is logged in
        <div className="m-5">
          <p>Welcome!</p>
          <p><strong>User Email:</strong> {user.email}
          <img className="w-8 h-8" src={user.photoURL} />
          </p>
          
          <div className="mt-3">
            <Link className="mt-5 p-2 rounded-md border-2 border-rose-200 hover:bg-rose-400" href="/week-8/shopping-list/">Go to Week 8 Page</Link>
          </div>
          <div>
          <button onClick={handleSignOut} className="mt-5 p-2 rounded-sm bg-blue-500 text-white hover:bg-blue-400">Sign Out</button>
        </div>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn} className="m-5 p-2 rounded-sm bg-blue-500 text-white hover:bg-blue-400">Sign In</button>
        </div>
      )}
    </div>
  );
}
