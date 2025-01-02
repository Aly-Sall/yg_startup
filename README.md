YG_Startup

This project is a platform designed to help users create and showcase startups. It allows users to define key elements of a startup, such as the title, description, image, and type (e.g., tech, health, etc.). Additionally, users can authenticate using NextAuth to manage login and access.

Features :

Create Startup: Users can create startups by providing essential details such as the name, description, image, and startup type.
Authentication: Users authenticate using NextAuth for a secure and seamless login process.
Startup Display: Once a startup is created, it is displayed in detail for everyone to see.
API Management: Using Sanity for flexible API management to handle dynamic data related to startups.

Tech Stack :

Frontend: Next.js, Tailwind CSS, Shadcn
Authentication: NextAuth.js
Backend: Sanity (for flexible APIs and data management)

1.Clone the repository:
2.Install dependencies:npm install
3.Set up your environment variables by creating a .env.local file with the necessary keys (e.g., Sanity API keys, NextAuth configurations).
4. Run the application: npm run dev

How It Works

Creating a Startup: Users can fill in a form with details about their startup, such as title, description, and type. The startup is then saved and displayed to other users.
Authentication: Users are authenticated via NextAuth, which provides a secure login mechanism. This allows users to manage their startups and view their personal data.
API Integration: Data such as startup details is managed through Sanity, which provides a flexible and powerful API for storing and retrieving content.
and more
