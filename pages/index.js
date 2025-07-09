import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const IDKitWidget = dynamic(
  () => import('@worldcoin/idkit').then((mod) => mod.IDKitWidget),
  { ssr: false }
);

export default function Home() {
  const handleSuccess = useCallback((proof) => {
    console.log('✅ Proof recibido:', proof);
    alert('✅ Verificación completada con éxito');
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
        verification_level="orb"
        onSuccess={handleSuccess}
      >
        {({ open }) => (
          <button
            onClick={open}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#1c7ed6',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Verificar con World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
}
