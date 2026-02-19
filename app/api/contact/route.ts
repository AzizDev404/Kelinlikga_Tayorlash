import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const TO_EMAIL = "mashriqmashali2026@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, phone } = body as { email?: string; phone?: string }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email kiritilishi shart" },
        { status: 400 }
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { error: "Serverda email sozlamasi yo'q. .env da GMAIL_USER va GMAIL_APP_PASSWORD o'rnating (Gmail ilova paroli)." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: `"Kurs" <${gmailUser}>`,
      to: TO_EMAIL,
      subject: "Kursga yozilish — yangi ariza",
      html: `
        <h2>Yangi ariza (Kelinlikka tayyorlash)</h2>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Telefon:</strong> ${phone?.trim() || "—"}</p>
        <p><em>Sayt orqali yuborilgan.</em></p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Xatolik" },
      { status: 500 }
    )
  }
}
