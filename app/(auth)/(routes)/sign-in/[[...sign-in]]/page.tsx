import { SignIn } from '@clerk/nextjs';

const clerkSignInUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL;

export default function Page() {
  return <SignIn />;
}
