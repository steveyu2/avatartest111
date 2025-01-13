import { Router, useRouter } from 'next/router';
import { useState } from 'react';

function HomePage() {
  const router = useRouter();
  const [vvv, setaaa] = useState('');
  return (
    <div>
      <input onChange={(e) => setaaa(e.target.value)} />
      <button
        onClick={() =>
          !!vvv ? window.open(`${location.origin}/create?id=${vvv}`) : null
        }
      >
        生成
      </button>
    </div>
  );
}

export default HomePage;
