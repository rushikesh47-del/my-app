'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect after success
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
        />
        <button type="submit"
          className="w-full bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition"
        >
          Register
        </button>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
    </div>
  </main>
  );
}
