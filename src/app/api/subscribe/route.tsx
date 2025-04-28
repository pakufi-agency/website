import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, brevoApiKey, brevoListId } = await req.json()

  if (!email || !brevoApiKey || !brevoListId) {
    return NextResponse.json({ message: 'Missing parameters' }, { status: 400 })
  }

  try {
    const brevoUrl = 'https://api.brevo.com/v3/contacts'

    console.log('email', email, typeof email)
    console.log('id', brevoListId, typeof brevoListId)
    console.log('key', brevoApiKey)

    const response = await fetch(brevoUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(brevoListId)],
        updateEnabled: true, // Update existing contacts
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error', errorData)
      return NextResponse.json({ message: 'Brevo API Error' }, { status: 500 })
    }

    const data = await response.json()
    console.log(data)
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { message: error.message || 'Subscription failed' },
      { status: 500 }
    )
  }
}
