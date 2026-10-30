# College Complaint Management System
**Project Based Learning (PBL) Mini Project & Academic Grievance Redressal System**  
*Built in pure HTML5, CSS3, and JavaScript — Compliant with the official Software Requirements Specification (SRS)*

---

## 🏛️ System Overview

The **College Complaint Management System (CCMS)** is an automated, centralized digital web application designed to simplify and digitize the process of submitting, managing, tracking, and resolving student complaints within an educational institution.

The application strictly implements the **5-Stage Sequential Lifecycle** defined in SRS Section 9.5 & 16:
$$\text{Submitted} \longrightarrow \text{Assigned} \longrightarrow \text{In Progress} \longrightarrow \text{Resolved} \longrightarrow \text{Closed}$$

---

## 🎨 Design Philosophy & UX Standards

- **Strict Light Aesthetic**: Designed with an architectural, editorial collegiate light theme (warm parchment `#FAF9F5`, academic deep forest green `#234E3E`, heritage terra-cotta `#963D26`, clean card surfaces, and hairline stone borders `#E8E5DD`).
- **No AI-generated dark mode or blue/neon tropes**: Clean, dignified typography (Instrument Serif / Georgia headers paired with Plus Jakarta Sans and Space Mono metadata tags), tactile card elevations, and printable grievance dossiers.
- **1-Click Evaluator Role Switcher**: Instant role dropdown in the header to effortlessly test all 3 personas:
  - 🎓 **Student Portal**: Samiksha Kakade (`2024-COMP-042`, T.E. Computer Engineering)
  - 👨‍🏫 **Staff / Faculty Portal**: Prof. D. Sharma (Lab In-Charge & Faculty Liaison)
  - 🏛️ **Administrator Portal**: Dean of Student Affairs & Grievance Cell Custodian

---

## 📋 Comprehensive SRS Mapping

| SRS Section | Specification | Implementation in System |
| :--- | :--- | :--- |
| **§ 5 & 8.3** | **Student Scope** | Profile details, submit complaint with category/dept/proof, live stepper tracking, history review. |
| **§ 5 & 8.2** | **Faculty / Staff Scope** | Assigned complaint queue, status transitions (`In Progress`, `Resolved`), faculty remarks & resolution logging. |
| **§ 5 & 8.1** | **Admin Scope** | Departmental delegation, assign staff, manage students/staff/departments/categories, full KPI monitor. |
| **§ 9.5 & 16** | **Complaint Lifecycle** | Automated 5-stage tracking (`Submitted` → `Assigned` → `In Progress` → `Resolved` → `Closed`) with audit history. |
| **§ 9.7** | **Complaint Tracking** | Real-time tracking modal by ID (e.g. `CMP-2026-1042`), with visual stepper and full event timeline. |
| **§ 9.8** | **Reports Module** | Comprehensive analytics: Student-wise, Department-wise, Category-wise, Status breakdown, and print export. |
| **§ 15** | **Database Schema** | Relational structures for `Users`, `Students`, `Staff`, `Departments`, `Categories`, `Complaints`, and `ComplaintHistory`. |

---

## 🚀 Running Locally

Because this codebase is pure **HTML5, CSS3, and JavaScript**, no installation or build steps are required!

### Option 1: Direct File Launch
Simply double-click `index.html` or open it directly in any browser:
```bash
start index.html
```

### Option 2: Using Any Local Server (Python / Node / Live Server)
```bash
# Python
python -m http.server 8000

# Or npx serve
npx serve .
```

---

## ☁️ Deployment on Vercel

The project includes a pre-configured `vercel.json` for zero-configuration static deployment.

### Method 1: Using Vercel CLI
```bash
cd college-complaint-system
npx vercel
```

### Method 2: GitHub Repository Import (Recommended)
1. Push this folder to your GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import `collage-complaint-management-system`.
4. Framework Preset: **Other** (Pure HTML/CSS/JS).
5. Click **Deploy**.

---

## 📁 Project Architecture

```
college-complaint-system/
├── index.html                 # Complete semantic HTML5 application structure
├── css/
│   └── style.css              # Custom architectural light theme CSS styles
├── js/
│   └── app.js                 # State management, data models, CRUD, and modals
├── public/
│   ├── favicon.svg            # Institutional crest
│   └── icons.svg
├── vercel.json                # Vercel static routing configuration
├── README.md                  # Project documentation & SRS mapping
└── .gitignore
```
