# Gmail Clone Application

This application is a clone of the popular email service, Gmail, built using React, Redux, and Firebase. The application allows users to sign in using their Google account, compose new emails, view their inbox, and manage their emails.

## Features

- Sign in with Google account
- Compose new emails
- View inbox
- Archive, delete, and mark emails as unread (still in progress. Will update in the future.)
- View individual email details

## Installation

1. Clone the repository:
- git clone https://github.com/your-repo/gmail-clone.git

2. Install dependencies:
- cd gmail-clone
- npm install

3. Set up Firebase:
- Create a new Firebase project in the Firebase console.
- Enable Authentication and Cloud Firestore in the project.
- Copy the Firebase configuration details (API key, auth domain, project ID, etc.) from the project settings.

4. Create a `.env` file in the project root directory and add the Firebase configuration:
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id


5. Start the development server:

## Usage

1. Open the application in your web browser at `http://localhost:3000`.
2. Click the "Sign in" button and authenticate with your Google account.
3. Once signed in, you will be redirected to the inbox view.
4. To compose a new email, click the "Compose" button in the sidebar.
5. Enter the recipient's email address, subject, and message body, and click "Send".
6. To view an email, click on it in the inbox list.
7. Use the various icons and buttons in the email view to archive, delete, mark as unread, or perform other actions on the email.
8. To sign out, click on your profile icon in the top-right corner and select "Sign out".

## Code Structure

- `src/components`: Contains React components used throughout the application.
- `Compose.js`: Component for composing a new email.
- `EmailList.js`: Component for displaying the list of emails in the inbox.
- `EmailRow.js`: Component for rendering a single email row in the list.
- `Header.js`: Component for the application header.
- `ListSection.js`: Component for rendering sections in the email list.
- `Mail.js`: Component for displaying the details of a selected email.
- `ProfileContainer.js`: Component for the user profile dropdown.
- `Sidebar.js`: Component for the sidebar navigation.
- `Sidebaroption.js`: Component for rendering a single sidebar option.
- `src/features`: Contains Redux slices for managing application state.
- `mailSlice.js`: Slice for managing email-related state.
- `userSlice.js`: Slice for managing user authentication state.
- `src/Firebase`: Contains Firebase configuration and initialization code.
- `src/assets`: Contains static assets like images and icons.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License