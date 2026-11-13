import { ImageResponse } from 'next/og'
import { profile } from '../content'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#141312',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
          color: '#F5F3EF',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 87, 34, 0.15)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5722' }} />
          <span style={{ fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e4beb4', fontFamily: 'monospace' }}>
            Portfolio in Motion
          </span>
        </div>
        <div style={{ fontSize: '64px', fontWeight: 300, lineHeight: 1.05, marginBottom: '16px' }}>
          {profile.name}
        </div>
        <div style={{ fontSize: '28px', fontStyle: 'italic', color: '#ffb5a0', marginBottom: '32px' }}>
          AI Engineer &amp; Full-Stack Builder
        </div>
        <div style={{ fontSize: '16px', color: '#cbc6bf', maxWidth: '700px', lineHeight: 1.5, fontFamily: 'monospace' }}>
          {profile.summary}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
