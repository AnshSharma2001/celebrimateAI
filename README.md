# Celebrimate AI
Celebrimate AI, is an AI-based web application, where you can create your own custom avatars, of famous people. The avatars would have long term memory and all the chats are saved. Additionally, the application contains stripe integration for payments. Please checkout the website using this [link](https://celebrimate-ai.vercel.app/). 

## Prerequisites
Node version should be `18.x.x`

## Steps to Run
1. Clone the repository to your desired file location:    
```
git clone https://github.com/AnshSharma2001/celebrimateAI.git
```
2. Copy and paste the below enviromnent variables into `.env` file, and provide the relavent keys:   
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

3. Install all the npm packages:
   ```
   npm install
   ```

4. Initialize the database using prisma, by running the following commands.
   ```
   npx prisma generate
   npx prisma db push
   ```

5. Run the `seed.ts` script for initializing the `Categories` in the database:
   ```
   node scripts/seed.ts
   ```

6. Run prisma genereate and push it to the database again.
   ```
   npx prisma generate
   npx prisma db push
   ```
7. Run the application, and you're good to go.
   ```
   npm run dev
   ```


