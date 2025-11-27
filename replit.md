# Kaiten Software - Replit Documentation

## Overview

This is a full-stack web application for Kaiten Software, a technology consulting company specializing in AI automation, ERP systems, blockchain, and business technology solutions. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL with Drizzle ORM for data management.

## Recent Changes (July 23, 2025)

### Services Pages Enhancement
- **Main Services Page Enhanced**: Added comprehensive statistics, value propositions, industry focus sections, and detailed benefit explanations
- **All Service Pages Built**: Complete detailed pages for AI Automation, ERP Solutions, Blockchain Integration, Salesforce Optimization, IoT Development, and MVP & AR/VR Development
- **Industry-Specific Content**: Added specialized solutions for Manufacturing, Healthcare, Retail, Financial Services, Logistics, and Agriculture sectors
- **Value Proposition Clarity**: Enhanced messaging focusing on measurable ROI, rapid implementation, and enterprise-grade security

### Social Media Integration
- **Dedicated Social Pages**: Created comprehensive Facebook, Instagram, and YouTube pages with platform-specific content strategies
- **Footer Integration**: Updated social media icons to link to dedicated pages with proper branding colors
- **Content Strategy**: Each platform showcases different aspects - Facebook for community, Instagram for visuals, YouTube for education

### User Experience Improvements  
- **Favicon Implementation**: Added Kaiten Software logo as favicon with proper meta tags and SEO enhancements
- **Button Visibility Fixes**: Resolved "View Our Services" button visibility issues with glass-morphism effects
- **Contact Enhancement**: Added professional Lucide React icons for all contact information sections
- **Legal Pages**: Built comprehensive Privacy Policy, Terms of Service, and Cookie Policy pages
- **Blog Management**: Full CRUD blog admin system with backend API routes

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js with custom middleware
- **API Design**: RESTful endpoints with JSON responses
- **Request Logging**: Custom middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Architecture
- **Database**: PostgreSQL (configured for use with Neon Database)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Centralized schema definitions with Zod validation
- **Migrations**: Drizzle-kit for database migrations

## Key Components

### Data Models
1. **Users**: Basic user authentication structure
2. **Blog Posts**: Content management with slug-based routing
3. **Testimonials**: Client feedback and reviews
4. **Contact Inquiries**: Lead capture and contact form submissions

### API Endpoints
- `GET /api/blog-posts` - Retrieve all blog posts
- `GET /api/blog-posts/:slug` - Get specific blog post by slug
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/contact` - Submit contact inquiry form

### Frontend Pages
- **Home**: Hero section, services overview, testimonials
- **Services**: Technology service listings and details
- **Individual Service Pages**: AI Automation, ERP Systems, Blockchain, etc.
- **Blog**: Content listing and individual post pages
- **About**: Company information and team details
- **Contact**: Contact form and company information

### UI Components
- **Layout**: Responsive navbar and footer
- **Forms**: Contact form with validation
- **Sections**: Reusable hero, testimonials, FAQ sections
- **Cards**: Service cards and content displays

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Flow**: JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Neon Database connection
- **drizzle-orm & drizzle-zod**: Database ORM and validation
- **@tanstack/react-query**: Server state management
- **react-hook-form & @hookform/resolvers**: Form handling
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Headless UI components

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Production bundling

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment setting (development/production)

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Apply database schema changes

### Architecture Decisions

**Frontend Framework Choice**: React with Wouter router chosen for lightweight, modern development with excellent TypeScript support. Wouter provides client-side routing without the complexity of React Router.

**Styling Approach**: Tailwind CSS with Shadcn/ui provides a consistent design system while maintaining flexibility. The combination offers pre-built accessible components with customizable styling.

**State Management**: TanStack Query handles server state management, eliminating the need for complex state management libraries like Redux. This reduces boilerplate and provides excellent caching mechanisms.

**Database Strategy**: Drizzle ORM chosen for type safety and modern TypeScript support. PostgreSQL provides robust data storage with ACID compliance suitable for business applications.

**Validation Strategy**: Zod schemas shared between frontend and backend ensure consistent validation rules and type safety across the full stack.

**Build Optimization**: Vite for frontend and esbuild for backend provide fast builds and excellent development experience with hot module replacement.