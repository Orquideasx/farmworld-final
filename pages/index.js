import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const IDKitWidget = dynamic(
  () => import('@worldcoin/idkit/react').then(mod => mod.IDKitWidget),
  { ssr: false }
);

export default function Home() {
  const handleSuccess = useCallback((proof) => {
    console.log('✅ Proof recibido:', proof);
    alert('Verificación completada');
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Head>
        <title>Farm World</title>
      </Head>
      <h1>🌱 Bienvenido a Farm World</h1>
      <p>Verifica tu identidad con World ID:</p>

      <IDKitWidget
        app_id="tu-app-id"
        action="farm-verification"
        onSuccess={handleSuccess}
        verification_level="orb"
      >
        {({ open }) => (
          <button onClick={open}>
            Verificar con World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
}
