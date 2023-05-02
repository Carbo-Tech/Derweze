import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function App() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, []); // the empty array as the second argument ensures useEffect only runs once

  return (
    <div>
      <p>Redirecting to login page...</p>
    </div>
  );
}

export default App;