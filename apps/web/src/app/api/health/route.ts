import { NextResponse } from 'next/server';

export async function GET() {
  const healthStatus = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      frontend: 'healthy',
      cms: 'unknown',
      redis: 'unknown'
    }
  };

  let isDegraded = false;

  // 1. Validate Strapi CMS connection
  const cmsUrl = process.env.STRAPI_API_URL || 'http://localhost:1337';
  try {
    const cmsResponse = await fetch(`${cmsUrl}/admin`, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(3000) 
    });
    
    if (cmsResponse.ok || cmsResponse.status < 500) {
      healthStatus.services.cms = 'healthy';
    } else {
      healthStatus.services.cms = `degraded: status ${cmsResponse.status}`;
      isDegraded = true;
    }
  } catch (error: any) {
    healthStatus.services.cms = `unhealthy: ${error.message}`;
    isDegraded = true;
  }

  // 2. Validate Redis environment settings (used by BullMQ)
  const redisHost = process.env.REDIS_HOST;
  if (redisHost) {
    healthStatus.services.redis = 'configured';
  } else {
    healthStatus.services.redis = 'mock_mode';
  }

  if (isDegraded) {
    healthStatus.status = 'degraded';
    return NextResponse.json(healthStatus, { status: 500 });
  }

  return NextResponse.json(healthStatus, { status: 200 });
}
