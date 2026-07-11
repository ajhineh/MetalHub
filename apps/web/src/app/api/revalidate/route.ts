import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { secret, tag, path } = await request.json();

    // Verify secret to secure the webhook
    const expectedSecret = process.env.REVALIDATION_SECRET || 'SECURE_REVALIDATION_TOKEN';
    if (secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid token secret.' }, { status: 401 });
    }

    // On-demand revalidation trigger
    if (tag) {
      // @ts-ignore
      revalidateTag(tag);
      console.log(`[Next.js ISR] Successfully revalidated tag: ${tag}`);
    }
    if (path) {
      revalidatePath(path);
      console.log(`[Next.js ISR] Successfully revalidated path: ${path}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
