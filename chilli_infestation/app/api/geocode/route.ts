import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    );
  }

  // This 'User-Agent' header is required by OpenStreetMap's policy.
  // Without it, their server will respond with a 403 Forbidden error.
  const headers = {
    'User-Agent': 'ChilliInfestationApp/1.0 (your-email@example.com)',
  };

  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  try {
    // The fetch call from the server includes the required headers.
    const response = await fetch(url, { headers });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenStreetMap API Error:', `Status: ${response.status}`, errorText);
      // Forward the actual error status from the external API.
      return NextResponse.json(
        { error: `Failed to fetch from OpenStreetMap: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Geocoding API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error while fetching address' },
      { status: 500 }
    );
  }
}
