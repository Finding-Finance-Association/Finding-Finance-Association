import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from './firebaseAdmin';

export interface AuthenticatedUser {
  uid: string;
  claims: Record<string, any>;
}
export async function getUserFromRequest(
  req: NextRequest
): Promise<AuthenticatedUser | null> {
  const authHeader = req.headers.get('authorization') || '';
  const match = authHeader.match(/^Bearer (.+)$/);
  if (!match) return null;
  try {
    const decoded = await adminAuth.verifyIdToken(match[1]);
    return { uid: decoded.uid, claims: decoded };
  } catch {
    return null;
  }
}

export function requireAuth(
  user: AuthenticatedUser | null
): asserts user is AuthenticatedUser {
  if (!user) {
    throw NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}