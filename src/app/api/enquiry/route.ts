import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Simple file-based storage for enquiries (no external dependencies)
// In production, replace with your preferred database or email service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, emailAddress, phoneNumber } = body

    if (!fullName || !emailAddress || !phoneNumber) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    const enquiry = {
      id: crypto.randomUUID(),
      fullName,
      emailAddress,
      phoneNumber,
      createdAt: new Date().toISOString(),
    }

    // Store in a local JSON file (data/enquiries.json)
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'enquiries.json')

    let enquiries: typeof enquiry[] = []
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8')
        enquiries = JSON.parse(raw)
      }
    } catch {
      enquiries = []
    }

    enquiries.push(enquiry)

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
    fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2))

    console.log('New enquiry:', enquiry)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Enquiry error:', error)
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 })
  }
}
