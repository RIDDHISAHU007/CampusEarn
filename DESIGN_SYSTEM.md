# CampusEarn Design System & Figma Guide

## 1. VISUAL STYLE GUIDE

### 1.1 Color Palette

#### Primary Colors (Green variations - Only #5DBB63 and #3DED97)
- **Primary-500**: `#3DED97` - Vibrant bright green, main CTAs
- **Primary-400**: `#5DBB63` - Darker green, secondary actions
- **Primary-600**: `#2db880` - Even darker, hover states
- **Primary-700**: `#228566` - Darkest, active states
- **Primary-300**: `#8eeccc` - Lightest accent
- **Primary-200**: `#b3f3dc` - Light background tints

#### Neutral Colors (Structure, Text)
- **Neutral-900**: `#111827` - Primary text
- **Neutral-700**: `#374151` - Secondary text
- **Neutral-600**: `#4b5563` - Tertiary text
- **Neutral-500**: `#6b7280` - Placeholder text
- **Neutral-200**: `#e5e7eb` - Borders
- **Neutral-100**: `#f3f4f6` - Backgrounds
- **Neutral-50**: `#f9fafb` - Card backgrounds

#### Semantic Colors (All using green palette)
- **Success**: `#3DED97` (Green) - Confirmations, positive actions
- **Warning**: `#5DBB63` (Darker Green) - Alerts, cautions
- **Error**: `#3DED97` (Green) - Destructive actions, errors
- **Info**: `#3DED97` (Green) - Informational messages

### 1.2 Typography System

#### Font Family
- **Headings**: Inter Bold / Semibold
- **Body**: Inter Regular / Medium
- **Code/Mono**: Fira Code

#### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48px (3rem) | Bold (700) | 1.2 | Page hero titles |
| H2 | 36px (2.25rem) | Bold (700) | 1.2 | Section titles |
| H3 | 30px (1.875rem) | Semibold (600) | 1.2 | Subsection titles |
| H4 | 24px (1.5rem) | Semibold (600) | 1.5 | Card titles |
| H5 | 20px (1.25rem) | Semibold (600) | 1.5 | Smaller headings |
| H6 | 18px (1.125rem) | Semibold (600) | 1.5 | Form labels |
| Body | 16px (1rem) | Regular (400) | 1.5 | Paragraph text |
| Body-Small | 14px (0.875rem) | Regular (400) | 1.5 | Secondary text |
| Caption | 12px (0.75rem) | Regular (400) | 1.5 | Captions, hints |

### 1.3 Spacing Scale (8px Base)
- **xs**: 4px - Tight spacing
- **sm**: 8px - Small spacing
- **md**: 12px - Medium spacing
- **lg**: 16px - Large spacing
- **xl**: 24px - Extra large spacing
- **2xl**: 32px - Double xl
- **3xl**: 48px - Triple xl
- **4xl**: 64px - Quad xl

**Applications**:
- Form fields: 8-12px padding
- Card padding: 16-24px
- Section margins: 32-64px
- Page padding: 16px (mobile), 24px (tablet), 32px (desktop)

### 1.4 Border Radius
- **xs**: 2px - Tight, minimal rounding
- **sm**: 4px - Subtle rounding
- **md**: 6px - Standard buttons, inputs
- **lg**: 8px - Card borders
- **xl**: 12px - Large components
- **full**: 9999px - Pills, circles

### 1.5 Shadows
| Type | CSS | Usage |
|------|-----|-------|
| Subtle | 0 1px 3px rgba(0,0,0,0.1) | Inputs, subtle elevation |
| Soft | 0 4px 6px rgba(0,0,0,0.1) | Cards, dropdowns |
| Medium | 0 10px 15px rgba(0,0,0,0.1) | Modals, floating elements |
| Strong | 0 20px 25px rgba(0,0,0,0.1) | Top-level overlays |

---

## 2. COMPONENT LIBRARY

### 2.1 Buttons

**States**:
- **Default**: Primary green background (#3DED97 or #5DBB63), white text
- **Hover**: Darker green
- **Active**: Even darker with shadow
- **Disabled**: Gray text, disabled background
- **Focus**: Ring around button (Primary-500, 2px)

**Variants**:
- **Primary**: `bg-primary-500 text-white` - Main actions (#3DED97)
- **Secondary**: `bg-primary-400 text-white` - Secondary actions (#5DBB63)
- **Outline**: `border border-primary-500 text-primary-500` - Tertiary actions
- **Ghost**: `text-primary-500 hover:bg-primary-50` - Minimal actions

**Sizes**:
- **sm**: 8px 12px, 14px text
- **md**: 12px 16px, 16px text (default)
- **lg**: 16px 24px, 18px text

### 2.2 Form Components

**Input Fields**:
- Border: 1px, `border-neutral-200`
- Padding: 12px 16px
- Border-radius: 6px
- Focus ring: `ring-2 ring-primary-500` (green)
- Background: White in light mode
- Placeholder: `text-neutral-500`

**Labels**:
- Size: 14px, Semibold
- Color: `text-neutral-700`
- Margin-bottom: 8px

**Select Dropdowns**:
- Same styling as input fields
- Chevron icon on right (16px)
- Dropdown menu spacing: 8px from input

### 2.3 Cards

**Base Card**:
- Background: White (light) / `neutral-900` (dark)
- Border: 1px, `border-neutral-200`
- Padding: 20px
- Border-radius: 8px
- Shadow: Soft shadow

**Job Card** (Featured Layout):
- Fixed width: 100% on mobile, 300-400px on desktop
- Header: Company logo (48px) + title/company name
- Body: Job title, salary, location, tags (with green backgrounds)
- Footer: "Save" and "Apply" buttons (green)
- Hover: Slight shadow increase, scale 1.02

**User Profile Card**:
- Avatar: 64px circle image
- Name, role, location
- Action buttons at bottom (green)
- Status indicator (online/offline)

### 2.4 Navigation

**Header/Navbar**:
- Height: 64px
- Padding: 16px 24px
- Logo on left
- Nav links center (hidden on mobile, hamburger menu)
- User menu/auth buttons right
- Active link: Green underline (#3DED97)

**Mobile Menu**:
- Full width, slide-in from left
- 280px width
- Overlay: 40% opacity black backdrop

---

## 3. PAGE LAYOUTS & FIGMA STRUCTURE

### 3.1 Homepage Layout
**Hero Section**:
- Full width, 60vh minimum height
- Gradient background (optional) or solid `background` color
- Content center/left aligned
- CTA buttons: "Find Jobs" (Primary green #3DED97), "Post a Job" (Secondary green #5DBB63)
- Right side: Illustration or image
- Grid: 2-column on desktop, 1-column on mobile

**How It Works**:
- 4-step grid layout
- Each step: Icon (64px) + title + description
- Responsive: 1 col mobile, 2 col tablet, 4 col desktop
- Step numbers/indicators in green

**Featured Jobs Section**:
- Horizontal scrollable on mobile
- Grid on desktop (2-4 columns)
- "View All" CTA at end (green)

### 3.2 Login Page
**Layout**:
- Left: Form (50% width)
- Right: Brand/image (50% width) - hidden on mobile
- Form: Centered, 380px max-width
- Fields: Email, Password
- CTA: "Sign In" (full width, green)
- Links: Forgot password, Sign up (green)

### 3.3 Signup Page (Role Selection)
**Role Selector**:
- 2-column layout (1 col mobile)
- Cards for each role
- Icon (64px) + title + description
- Border highlight on selection (green #3DED97)
- CTA: "Continue as [Role]" (green)

**Signup Form**:
- 3-column section layout
- Section 1: Basic info (name, email, etc.)
- Section 2: Role-specific (college/business details)
- Section 3: Security (password)
- Each section has title, description, fields
- Progress indicator (1/3, 2/3, 3/3) in green
- Submit button in green

### 3.4 Job Listing Page
**Layout**:
- Left sidebar: Filters (300px on desktop, collapsible on mobile)
- Right content: Job grid

**Filters Sidebar**:
- Categories
- Location
- Salary range
- Timing (Full-time, Part-time, etc.)
- Sort dropdown
- Applied filters shown with green badges

**Job Grid**:
- 1 col mobile, 2 col tablet, 3-4 col desktop
- Card spacing: 16px
- Infinite scroll or pagination
- Pagination buttons in green

### 3.5 Job Detail Page
**Layout**:
- Breadcrumb: Home > Jobs > [Job Title]
- 2-column: Job info (70%) + Sidebar (30%)

**Main Content**:
- Job header: Title, company, salary, location
- Description, responsibilities, requirements
- Skills tags (green backgrounds)
- Apply button (green #3DED97)

**Sidebar**:
- Company card
- Quick apply button (green)
- Share buttons
- Save job toggle (green when saved)

### 3.6 Dashboards

**Job Seeker Dashboard**:
- Top: Welcome message + quick stats (3 cards with green accents)
- Main: Job listings, saved jobs section
- Sidebar: Profile summary, recommendations
- Action buttons: green

**Job Poster Dashboard**:
- Top: Welcome message + stats (active jobs, applicants, views) in green
- Main: "Post New Job" form (green CTA), job listings with metrics
- Sidebar: Business profile, performance analytics
- Action buttons: green

---

## 4. RESPONSIVE GRID SYSTEM

### Breakpoints
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Grid Layout
**Mobile**:
- 1 column full width
- 16px padding on sides
- Stacked cards/components

**Tablet**:
- 2-column grid where applicable
- 24px padding on sides
- Flexible layouts

**Desktop**:
- 3-4 column grid
- 32px padding on sides
- Max-width container: 1280px (where applicable)

---

## 5. COLOR REFERENCE

### Primary Green Palette (Only two base colors)
- **#3DED97** - Main CTA, primary actions, active states
- **#5DBB63** - Secondary actions, alternate CTAs
- **#8eeccc** - Light accents, backgrounds
- **#2db880** - Hover states
- **#228566** - Dark states
- **#1a6652** - Darker backgrounds
- **#0f4d3a** - Darkest accents

All semantic colors (success, warning, error, info) use these green variations only.

---

## 6. IMPLEMENTATION CHECKLIST

- [x] Create green-only color palette
- [ ] Create all color tokens in Figma color library
- [ ] Define typography styles (headings, body, captions)
- [ ] Build button component set (all variants + states in green)
- [ ] Create form components (input, select, checkbox, radio)
- [ ] Design card components (job, user profile, feature)
- [ ] Build navbar/header component with green accents
- [ ] Design footer component
- [ ] Create page layouts using components
- [ ] Set up responsive breakpoints
- [ ] Document component usage
- [ ] Export design tokens for developers
- [ ] Validate contrast ratios (WCAG AA minimum)
- [ ] Test responsive layouts on mobile devices

---

## 7. ACCESSIBILITY GUIDELINES

- Minimum color contrast: 4.5:1 for text (green on white meets this)
- Focus states: Always visible (green ring or outline)
- Icons: Always paired with text or have alt text
- Form labels: Never hide, always associated
- Touch targets: Minimum 44px × 44px
- Motion: Reduced motion support
- Semantic HTML in implementation
