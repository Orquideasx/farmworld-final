import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const IDKitWidget = dynamic(
  () => import('@worldcoin/idkit/react').then(mod => mod.IDKitWidget),
  { ssr: false }
);

export default function Home() {
  const handleSuccess = useCallback((result) => {
    console.log('✅ Verificación exitosa:', result);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>Farm World</title>
      </Head>
      <h1>🌱 Bienvenido a Farm World</h1>
      <p>Verifica tu identidad única con World ID:</p>
      <IDKitWidget
        app_id="app_05d315b0e2665a6b33226fc13aec788e"
        action="farm-verification"
        onSuccess={handleSuccess}
      >
        {({ open }) => (
          <button onClick={open}>Verificar con World ID</button>
        )}
      </IDKitWidget>
    </div>
  );
}
