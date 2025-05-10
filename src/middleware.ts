import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher(["/publicar(.*)"])

export const onRequest = clerkMiddleware((auth, context)=> {

    const {userId, redirectToSignIn} = auth()

    if (isProtectedRoute(context.request)) {
        if (!userId) {
            return redirectToSignIn()
        }
    }
})