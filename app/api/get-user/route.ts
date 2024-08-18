import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    const user = await currentUser();
    
    if (!user || !user.primaryEmailAddress) {
        return NextResponse.json({ error: 'User not found or email address is not available' }, { status: 404 });
    }

    return NextResponse.json({ email: user.primaryEmailAddress.emailAddress });
}


