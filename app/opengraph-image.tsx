import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Subrahmanya K P — Backend Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '6px',
              height: '60px',
              background: '#3b82f6',
              borderRadius: '3px',
              marginRight: '24px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#93c5fd', fontSize: '22px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              whoissubbu.vercel.app
            </span>
          </div>
        </div>

        <h1
          style={{
            color: '#f1f5f9',
            fontSize: '72px',
            fontWeight: 700,
            margin: '0 0 16px 0',
            lineHeight: 1.1,
          }}
        >
          Subrahmanya K P
        </h1>

        <p
          style={{
            color: '#60a5fa',
            fontSize: '32px',
            fontWeight: 500,
            margin: '0 0 40px 0',
          }}
        >
          Backend Software Engineer
        </p>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '22px',
            margin: 0,
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          API design · PostgreSQL · LLM Agent Tooling (MCP) · Kubernetes
        </p>
      </div>
    ),
    { ...size }
  );
}
