'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push('/contacts');
  return (
    <main>
      <h1>Index Page</h1>
    </main>
  );
}
