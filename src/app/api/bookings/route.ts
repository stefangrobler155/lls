import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const booking = await request.json();

    console.log('📨 Booking received:', booking); // Log incoming data

    const wpUrl = 'https://lls.sfgweb.co.za/wp/wp-json/lls/v1/bookings';

    const response = await fetch(wpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });

    console.log('🔄 WordPress response status:', response.status);

    let result;
    try {
      result = await response.json();
    } catch (jsonError) {
      console.error('❌ Failed to parse JSON from WordPress:', jsonError);
      result = { message: 'Invalid response from server' };
    }

    if (!response.ok) {
      console.error('❌ WordPress error:', result);
      return NextResponse.json(
        { message: result.message || `WordPress returned ${response.status}` },
        { status: response.status }
      );
    }

    console.log('✅ Booking successful:', result);
    return NextResponse.json({
      message: result.message || 'Booking request sent successfully!',
    });

  } catch (error: unknown) {
    console.error('🚨 Full error in /api/bookings:', {
      name: (error as Error).name,
      message: (error as Error).message,
      stack: (error as Error).stack,
    });

    return NextResponse.json(
      { 
        message: 'Something went wrong while processing your request. Please try again.' 
      },
      { status: 500 }
    );
  }
}