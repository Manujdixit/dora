# Dora assignment

## Firebase Authentication Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication:

   - Go to Authentication > Sign-in method
   - Enable Google sign-in provider
   - Configure authorized domains if needed

3. Install Firebase dependencies:

```bash
npm install firebase
```

4. Environment Variables:
   The app uses the following Firebase configuration. Create a `.env` file with these variables:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Features

### Authentication

- Google Sign-in integration
- Protected routes for authenticated users
- User profile display
- Sign-out functionality
