/**
 * College Complaint Management System (CCMS)
 * Pure Vanilla JavaScript Client Application
 * Strictly Light Theme • Full SRS Functional Compliance • PBL Mini Project
 */

// =============================================================================
// INITIAL SEED DATA (SRS Compliant)
// =============================================================================

const INITIAL_DEPARTMENTS = [
  { department_id: 'DEP-01', department_name: 'Computer Engineering', code: 'COMP', head_name: 'Dr. S. K. Roy' },
  { department_id: 'DEP-02', department_name: 'Information Technology', code: 'IT', head_name: 'Prof. R. V. Kulkarni' },
  { department_id: 'DEP-03', department_name: 'Electronics & Telecom', code: 'ENTC', head_name: 'Dr. M. A. Joshi' },
  { department_id: 'DEP-04', department_name: 'Campus Infrastructure & Maintenance', code: 'INFRA', head_name: 'Mr. Ramesh Jadhav' },
  { department_id: 'DEP-05', department_name: 'Hostel & Residential Welfare', code: 'HOSTEL', head_name: 'Prof. V. N. Patil' },
  { department_id: 'DEP-06', department_name: 'Central Library Services', code: 'LIB', head_name: 'Mrs. Sunita More' },
  { department_id: 'DEP-07', department_name: 'Transportation & Logistics', code: 'TRANS', head_name: 'Mr. A. P. Shinde' },
  { department_id: 'DEP-08', department_name: 'Examination & Academics Cell', code: 'EXAM', head_name: 'Dr. P. G. Mehta' }
];

const INITIAL_CATEGORIES = [
  { category_id: 'CAT-01', category_name: 'Lab Equipment & Software Malfunction', description: 'Faulty workstations, compiler licensing, or peripheral defects in practical labs.', default_department_id: 'DEP-01' },
  { category_id: 'CAT-02', category_name: 'Campus Wi-Fi & Network Connectivity', description: 'Signal drops in academic wings, authentication portal timeout, slow bandwidth in digital library.', default_department_id: 'DEP-01' },
  { category_id: 'CAT-03', category_name: 'Classroom AV & Projector Hardware', description: 'Faulty HDMI cables, dimmed projector bulbs, microphone static, or smartboard calibration issues.', default_department_id: 'DEP-04' },
  { category_id: 'CAT-04', category_name: 'Hostel Room & Mess Amenities', description: 'Plumbing leaks, water purifier filter replacement, hot water supply schedule, or mess dietary hygiene.', default_department_id: 'DEP-05' },
  { category_id: 'CAT-05', category_name: 'Library Book Reservation & Digital Access', description: 'Missing reference editions, IEEE Explore journal proxy access, study hall quiet hours enforcement.', default_department_id: 'DEP-06' },
  { category_id: 'CAT-06', category_name: 'College Bus Route & Timetable Delay', description: 'Bus delay on highway routes, overcrowding during evening slots, driver route skipping.', default_department_id: 'DEP-07' },
  { category_id: 'CAT-07', category_name: 'Academic Marks / In-Semester Exam Review', description: 'Discrepancy in continuous assessment marksheet, hall ticket generation glitch, re-evaluation request.', default_department_id: 'DEP-08' },
  { category_id: 'CAT-08', category_name: 'Sanitation & Drinking Water Dispensers', description: 'Washroom water supply breakdown, UV water dispenser maintenance on academic floors.', default_department_id: 'DEP-04' }
];

const INITIAL_STUDENTS = [
  { student_id: 'STU-001', name: 'Samiksha Kakade', roll_number: '2024-COMP-042', class: 'T.E. Computer Engineering', division: 'Div A', department: 'Computer Engineering', email: 'samiksha.kakade@college.edu', phone: '+91 98230 44129' },
  { student_id: 'STU-002', name: 'Rohan Deshmukh', roll_number: '2024-COMP-018', class: 'T.E. Computer Engineering', division: 'Div A', department: 'Computer Engineering', email: 'rohan.d@college.edu', phone: '+91 94220 18273' },
  { student_id: 'STU-003', name: 'Ananya Joshi', roll_number: '2024-IT-009', class: 'B.E. Information Technology', division: 'Div B', department: 'Information Technology', email: 'ananya.joshi@college.edu', phone: '+91 98501 92837' },
  { student_id: 'STU-004', name: 'Aditya Kulkarni', roll_number: '2024-ENTC-033', class: 'S.E. Electronics & Telecom', division: 'Div A', department: 'Electronics & Telecom', email: 'aditya.k@college.edu', phone: '+91 97631 82910' },
  { student_id: 'STU-005', name: 'Priya Patil', roll_number: '2024-COMP-058', class: 'T.E. Computer Engineering', division: 'Div B', department: 'Computer Engineering', email: 'priya.patil@college.edu', phone: '+91 99214 78392' }
];

const INITIAL_STAFF = [
  { staff_id: 'STF-01', name: 'Prof. D. Sharma', email: 'd.sharma@college.edu', department: 'Computer Engineering', designation: 'Associate Professor & Lab In-Charge', phone: '+91 98220 11928' },
  { staff_id: 'STF-02', name: 'Dr. S. K. Roy', email: 'sk.roy@college.edu', department: 'Computer Engineering', designation: 'Head of Department & Academic Advisor', phone: '+91 98220 44921' },
  { staff_id: 'STF-03', name: 'Mr. Ramesh Jadhav', email: 'facilities@college.edu', department: 'Campus Infrastructure & Maintenance', designation: 'Estate & Infrastructure Engineer', phone: '+91 94210 55812' },
  { staff_id: 'STF-04', name: 'Prof. V. N. Patil', email: 'hostel.warden@college.edu', department: 'Hostel & Residential Welfare', designation: 'Chief Hostel Warden & Welfare Officer', phone: '+91 98901 23456' },
  { staff_id: 'STF-05', name: 'Mrs. Sunita More', email: 'library@college.edu', department: 'Central Library Services', designation: 'Head Librarian & Resource Custodian', phone: '+91 98810 65432' },
  { staff_id: 'STF-06', name: 'Mr. A. P. Shinde', email: 'transport@college.edu', department: 'Transportation & Logistics', designation: 'Transport Fleet Coordinator', phone: '+91 94225 78901' }
];

const INITIAL_COMPLAINTS = [
  {
    complaint_id: 'CMP-2026-1042',
    student_id: 'STU-001',
    student_name: 'Samiksha Kakade',
    roll_number: '2024-COMP-042',
    department_id: 'DEP-01',
    department_name: 'Computer Engineering',
    category_id: 'CAT-01',
    category_name: 'Lab Equipment & Software Malfunction',
    title: 'Workstations 14 & 15 GPU driver crash during AI/ML Practical Session',
    description: 'During our Deep Learning lab in Computer Lab 304, systems #14 and #15 continuously encounter kernel panic / driver crash when executing PyTorch CUDA tensors. This disrupts hands-on lab experiments for assignment 2.',
    priority: 'Urgent',
    submission_date: '2026-10-24 10:30 AM',
    status: 'In Progress',
    assigned_staff_id: 'STF-01',
    assigned_staff_name: 'Prof. D. Sharma',
    remarks: 'Hardware and driver inspected on Oct 25. Nvidia proprietary driver was corrupted by recent OS patch. Clean re-installation and CUDA 12.4 toolkit deployment underway.',
    resolution: '',
    resolution_date: null,
    attachment_name: 'cuda_kernel_panic_log.txt',
    history: [
      { history_id: 'HIST-001', status: 'Submitted', remarks: 'Complaint filed digitally by student Samiksha Kakade.', updated_by: 'Samiksha Kakade (Student)', updated_date: '2026-10-24 10:30 AM' },
      { history_id: 'HIST-002', status: 'Assigned', remarks: 'Grievance reviewed by Administrator. Assigned to Lab In-Charge Prof. D. Sharma.', updated_by: 'System Administrator', updated_date: '2026-10-24 02:15 PM' },
      { history_id: 'HIST-003', status: 'In Progress', remarks: 'Lab hardware inspected. Re-imaging driver partitions.', updated_by: 'Prof. D. Sharma (Faculty)', updated_date: '2026-10-25 11:00 AM' }
    ]
  },
  {
    complaint_id: 'CMP-2026-1039',
    student_id: 'STU-001',
    student_name: 'Samiksha Kakade',
    roll_number: '2024-COMP-042',
    department_id: 'DEP-06',
    department_name: 'Central Library Services',
    category_id: 'CAT-05',
    category_name: 'Library Book Reservation & Digital Access',
    title: 'IEEE Xplore Institutional Remote Proxy Authentication Failure',
    description: 'Off-campus and reading room proxy authentication to IEEE Xplore digital library yields an SSL certificate expired warning, preventing access to research papers for our PBL review presentation.',
    priority: 'Normal',
    submission_date: '2026-10-20 03:45 PM',
    status: 'Resolved',
    assigned_staff_id: 'STF-05',
    assigned_staff_name: 'Mrs. Sunita More',
    remarks: 'Notified university IT data center. The reverse proxy SSL certificate was renewed on the gateway server.',
    resolution: 'The library EZProxy SSL certificate has been renewed and DNS records updated. Remote IEEE and Springer access is fully restored. Student verified access.',
    resolution_date: '2026-10-22 04:30 PM',
    attachment_name: 'ieee_proxy_error.png',
    history: [
      { history_id: 'HIST-004', status: 'Submitted', remarks: 'Complaint registered by student.', updated_by: 'Samiksha Kakade (Student)', updated_date: '2026-10-20 03:45 PM' },
      { history_id: 'HIST-005', status: 'Assigned', remarks: 'Assigned to Central Library custodial desk.', updated_by: 'System Administrator', updated_date: '2026-10-21 09:30 AM' },
      { history_id: 'HIST-006', status: 'Resolved', remarks: 'SSL cert successfully renewed on university proxy.', updated_by: 'Mrs. Sunita More (Library Custodian)', updated_date: '2026-10-22 04:30 PM' }
    ]
  },
  {
    complaint_id: 'CMP-2026-1050',
    student_id: 'STU-002',
    student_name: 'Rohan Deshmukh',
    roll_number: '2024-COMP-018',
    department_id: 'DEP-04',
    department_name: 'Campus Infrastructure & Maintenance',
    category_id: 'CAT-03',
    category_name: 'Classroom AV & Projector Hardware',
    title: 'Dimmed HDMI Projector Bulb in Seminar Hall 2 (Audio Echoing)',
    description: 'During departmental guest lectures in Seminar Hall 2, the overhead projector brightness is severely degraded and audio feedback echoes from the left wall amplifier.',
    priority: 'Normal',
    submission_date: '2026-10-26 09:15 AM',
    status: 'Assigned',
    assigned_staff_id: 'STF-03',
    assigned_staff_name: 'Mr. Ramesh Jadhav',
    remarks: 'Assigned to audiovisual maintenance squad. Replacement 4000-lumen lamp requisitioned from stores.',
    resolution: '',
    resolution_date: null,
    attachment_name: 'seminar_hall_projector.jpg',
    history: [
      { history_id: 'HIST-007', status: 'Submitted', remarks: 'Complaint filed by student Rohan Deshmukh.', updated_by: 'Rohan Deshmukh (Student)', updated_date: '2026-10-26 09:15 AM' },
      { history_id: 'HIST-008', status: 'Assigned', remarks: 'Forwarded to Estate Engineer.', updated_by: 'System Administrator', updated_date: '2026-10-26 11:45 AM' }
    ]
  },
  {
    complaint_id: 'CMP-2026-1055',
    student_id: 'STU-003',
    student_name: 'Ananya Joshi',
    roll_number: '2024-IT-009',
    department_id: 'DEP-05',
    department_name: 'Hostel & Residential Welfare',
    category_id: 'CAT-04',
    category_name: 'Hostel Room & Mess Amenities',
    title: 'Hot Water Geyser Low Pressure in Girls Hostel B Block (3rd Floor)',
    description: 'The solar water heating booster pump on 3rd floor B wing is tripping the MCB breaker every morning at 7 AM, leaving over 40 resident students without hot water.',
    priority: 'Critical',
    submission_date: '2026-10-27 08:00 AM',
    status: 'In Progress',
    assigned_staff_id: 'STF-04',
    assigned_staff_name: 'Prof. V. N. Patil',
    remarks: 'Electrician dispatched. The circulation pump capacitor has burned out; replacement order placed with local vendor.',
    resolution: '',
    resolution_date: null,
    attachment_name: 'mcb_tripped_panel.jpg',
    history: [
      { history_id: 'HIST-009', status: 'Submitted', remarks: 'Emergency maintenance grievance registered.', updated_by: 'Ananya Joshi (Student)', updated_date: '2026-10-27 08:00 AM' },
      { history_id: 'HIST-010', status: 'Assigned', remarks: 'Priority escalated to Chief Hostel Warden.', updated_by: 'System Administrator', updated_date: '2026-10-27 08:30 AM' },
      { history_id: 'HIST-011', status: 'In Progress', remarks: 'Electrical technicians currently on site.', updated_by: 'Prof. V. N. Patil (Warden)', updated_date: '2026-10-27 10:15 AM' }
    ]
  },
  {
    complaint_id: 'CMP-2026-1061',
    student_id: 'STU-004',
    student_name: 'Aditya Kulkarni',
    roll_number: '2024-ENTC-033',
    department_id: 'DEP-07',
    department_name: 'Transportation & Logistics',
    category_id: 'CAT-06',
    category_name: 'College Bus Route & Timetable Delay',
    title: 'Route #12 (Kothrud Depot to Campus) 35-minute morning recurring delay',
    description: 'Bus #12 is regularly arriving 35 minutes late due to an unplanned detour near Chandani Chowk flyover, causing morning attendance forfeiture for first-hour lectures.',
    priority: 'Normal',
    submission_date: '2026-10-28 09:40 AM',
    status: 'Submitted',
    assigned_staff_id: null,
    assigned_staff_name: null,
    remarks: '',
    resolution: '',
    resolution_date: null,
    attachment_name: 'gps_bus_delay_screenshot.png',
    history: [
      { history_id: 'HIST-012', status: 'Submitted', remarks: 'Complaint registered and awaiting administrative assignment.', updated_by: 'Aditya Kulkarni (Student)', updated_date: '2026-10-28 09:40 AM' }
    ]
  },
  {
    complaint_id: 'CMP-2026-1031',
    student_id: 'STU-005',
    student_name: 'Priya Patil',
    roll_number: '2024-COMP-058',
    department_id: 'DEP-08',
    department_name: 'Examination & Academics Cell',
    category_id: 'CAT-07',
    category_name: 'Academic Marks / In-Semester Exam Review',
    title: 'Discrepancy in Continuous Assessment Lab Record for Database Systems',
    description: 'My CA-1 marksheet showed 14/25 whereas the verified manual assessment rubrics signed by the course tutor was 23/25. Requesting correction before final submission to university portal.',
    priority: 'Normal',
    submission_date: '2026-10-18 11:10 AM',
    status: 'Closed',
    assigned_staff_id: 'STF-02',
    assigned_staff_name: 'Dr. S. K. Roy',
    remarks: 'Verified physical signature sheet from subject teacher Prof. Kulkarni. Data entry clerical error confirmed and revised.',
    resolution: 'Marks in the ERP portal updated from 14 to 23. Verified with student Priya Patil and record closed.',
    resolution_date: '2026-10-19 02:00 PM',
    attachment_name: 'signed_ca_rubric.pdf',
    history: [
      { history_id: 'HIST-013', status: 'Submitted', remarks: 'Complaint submitted with signed evaluation rubric.', updated_by: 'Priya Patil (Student)', updated_date: '2026-10-18 11:10 AM' },
      { history_id: 'HIST-014', status: 'Assigned', remarks: 'Assigned to Academic Advisor Dr. S. K. Roy.', updated_by: 'System Administrator', updated_date: '2026-10-18 01:20 PM' },
      { history_id: 'HIST-015', status: 'Resolved', remarks: 'Mark corrected on university ERP portal.', updated_by: 'Dr. S. K. Roy (Academic Head)', updated_date: '2026-10-19 02:00 PM' },
      { history_id: 'HIST-016', status: 'Closed', remarks: 'Student confirmed verification of marksheet. Case closed successfully.', updated_by: 'System Administrator', updated_date: '2026-10-19 04:00 PM' }
    ]
  }
];

// =============================================================================
// STATE & STORAGE CONTROLLER
// =============================================================================

class AppState {
  constructor() {
    this.STORAGE_KEYS = {
      COMPLAINTS: 'ccms_vanilla_complaints_v1',
      DEPARTMENTS: 'ccms_vanilla_departments_v1',
      CATEGORIES: 'ccms_vanilla_categories_v1',
      STUDENTS: 'ccms_vanilla_students_v1',
      STAFF: 'ccms_vanilla_staff_v1',
      CURRENT_ROLE: 'ccms_vanilla_role_v1'
    };

    this.role = localStorage.getItem(this.STORAGE_KEYS.CURRENT_ROLE) || 'student';
    this.complaints = this.load(this.STORAGE_KEYS.COMPLAINTS, INITIAL_COMPLAINTS);
    this.departments = this.load(this.STORAGE_KEYS.DEPARTMENTS, INITIAL_DEPARTMENTS);
    this.categories = this.load(this.STORAGE_KEYS.CATEGORIES, INITIAL_CATEGORIES);
    this.students = this.load(this.STORAGE_KEYS.STUDENTS, INITIAL_STUDENTS);
    this.staff = this.load(this.STORAGE_KEYS.STAFF, INITIAL_STAFF);

    this.activeStudent = this.students[0]; // Samiksha Kakade
    this.activeStaff = this.staff[0]; // Prof. D. Sharma

    // UI state
    this.studentStatusFilter = 'All';
    this.studentSearchQuery = '';
    this.staffStatusFilter = 'All';
    this.staffSearchQuery = '';
    this.adminSubtab = 'complaints';
    this.adminStatusFilter = 'All';
    this.adminDeptFilter = 'All';
    this.adminSearchQuery = '';
  }

  load(key, fallback) {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  }

  save() {
    localStorage.setItem(this.STORAGE_KEYS.CURRENT_ROLE, this.role);
    localStorage.setItem(this.STORAGE_KEYS.COMPLAINTS, JSON.stringify(this.complaints));
    localStorage.setItem(this.STORAGE_KEYS.DEPARTMENTS, JSON.stringify(this.departments));
    localStorage.setItem(this.STORAGE_KEYS.CATEGORIES, JSON.stringify(this.categories));
    localStorage.setItem(this.STORAGE_KEYS.STUDENTS, JSON.stringify(this.students));
    localStorage.setItem(this.STORAGE_KEYS.STAFF, JSON.stringify(this.staff));
  }

  reset() {
    localStorage.clear();
    this.role = 'student';
    this.complaints = [...INITIAL_COMPLAINTS];
    this.departments = [...INITIAL_DEPARTMENTS];
    this.categories = [...INITIAL_CATEGORIES];
    this.students = [...INITIAL_STUDENTS];
    this.staff = [...INITIAL_STAFF];
    this.save();
  }

  formatDate(date = new Date()) {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  submitComplaint(data) {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const complaintId = `CMP-2026-${randomId}`;
    const timestamp = this.formatDate();

    const cat = this.categories.find(c => c.category_id === data.categoryId) || this.categories[0];
    const dept = this.departments.find(d => d.department_id === data.departmentId) || this.departments[0];

    const newRecord = {
      complaint_id: complaintId,
      student_id: this.activeStudent.student_id,
      student_name: this.activeStudent.name,
      roll_number: this.activeStudent.roll_number,
      department_id: dept.department_id,
      department_name: dept.department_name,
      category_id: cat.category_id,
      category_name: cat.category_name,
      title: data.title,
      description: data.description,
      priority: data.priority,
      submission_date: timestamp,
      status: 'Submitted',
      assigned_staff_id: null,
      assigned_staff_name: null,
      remarks: '',
      resolution: '',
      resolution_date: null,
      attachment_name: data.attachmentName || null,
      history: [
        {
          history_id: `HIST-${Date.now().toString().slice(-6)}`,
          status: 'Submitted',
          remarks: 'Complaint officially registered into central ledger.',
          updated_by: `${this.activeStudent.name} (Student)`,
          updated_date: timestamp
        }
      ]
    };

    this.complaints.unshift(newRecord);
    this.save();
    return newRecord;
  }

  assignComplaint(complaintId, deptId, staffId) {
    const c = this.complaints.find(item => item.complaint_id === complaintId);
    if (!c) return;

    const dept = this.departments.find(d => d.department_id === deptId);
    const stf = this.staff.find(s => s.staff_id === staffId);
    const timestamp = this.formatDate();

    c.status = 'Assigned';
    c.department_id = dept ? dept.department_id : c.department_id;
    c.department_name = dept ? dept.department_name : c.department_name;
    c.assigned_staff_id = stf ? stf.staff_id : staffId;
    c.assigned_staff_name = stf ? stf.name : 'Faculty Liaison';

    c.history.push({
      history_id: `HIST-${Date.now().toString().slice(-6)}`,
      status: 'Assigned',
      remarks: `Delegated to ${c.assigned_staff_name} (${c.department_name}).`,
      updated_by: 'Dean of Student Affairs (Admin)',
      updated_date: timestamp
    });

    this.save();
  }

  updateStatus(complaintId, status, remarks, resolution) {
    const c = this.complaints.find(item => item.complaint_id === complaintId);
    if (!c) return;

    const timestamp = this.formatDate();
    c.status = status;
    if (remarks !== undefined) c.remarks = remarks;
    if (resolution !== undefined) c.resolution = resolution;
    if (status === 'Resolved' || status === 'Closed') {
      c.resolution_date = c.resolution_date || timestamp;
    }

    c.history.push({
      history_id: `HIST-${Date.now().toString().slice(-6)}`,
      status: status,
      remarks: remarks || `Status updated to ${status}.`,
      updated_by: this.role === 'staff' ? `${this.activeStaff.name} (Faculty)` : 'System Authority',
      updated_date: timestamp
    });

    this.save();
  }
}

// Global App Instance
const app = new AppState();

// =============================================================================
// DOM RENDERING & CONTROLLER
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initRoleSwitcher();
  initQuickTracker();
  initModals();
  renderAll();
});

function renderAll() {
  renderMetrics();
  renderActiveRoleView();
  renderStudentPortal();
  renderStaffPortal();
  renderAdminPortal();
}

// Metrics in Hero
function renderMetrics() {
  const total = app.complaints.length;
  const pending = app.complaints.filter(c => c.status === 'Submitted' || c.status === 'Assigned' || c.status === 'In Progress').length;
  const resolved = app.complaints.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;
  const rate = total > 0 ? Math.round((resolved / total) * 100) : 100;

  document.getElementById('metric-total').innerText = total;
  document.getElementById('metric-pending').innerText = pending;
  document.getElementById('metric-resolved').innerText = resolved;
  document.getElementById('metric-rate').innerText = `${rate}%`;
}

// Role Switcher
function initRoleSwitcher() {
  const btn = document.getElementById('role-switcher-btn');
  const menu = document.getElementById('role-dropdown-menu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    menu.classList.add('hidden');
  });

  document.querySelectorAll('.role-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetRole = item.getAttribute('data-role');
      app.role = targetRole;
      app.save();
      menu.classList.add('hidden');
      renderAll();
    });
  });
}

function renderActiveRoleView() {
  // Update header active role label
  const roleLabel = document.getElementById('active-role-label');
  roleLabel.innerText = app.role === 'admin' ? 'Administrator' : app.role.charAt(0).toUpperCase() + app.role.slice(1);

  // Update role menu active highlights
  document.querySelectorAll('.role-menu-item').forEach(item => {
    if (item.getAttribute('data-role') === app.role) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Switch visible portal
  document.getElementById('student-portal').classList.add('hidden');
  document.getElementById('staff-portal').classList.add('hidden');
  document.getElementById('admin-portal').classList.add('hidden');

  if (app.role === 'student') {
    document.getElementById('student-portal').classList.remove('hidden');
    document.getElementById('hero-user-name').innerText = app.activeStudent.name;
    document.getElementById('hero-user-role-badge').innerText = 'STUDENT';
    document.getElementById('hero-user-desc').innerText = `${app.activeStudent.roll_number} • ${app.activeStudent.class} (${app.activeStudent.division})`;
  } else if (app.role === 'staff') {
    document.getElementById('staff-portal').classList.remove('hidden');
    document.getElementById('hero-user-name').innerText = app.activeStaff.name;
    document.getElementById('hero-user-role-badge').innerText = 'FACULTY';
    document.getElementById('hero-user-desc').innerText = `${app.activeStaff.designation} • ${app.activeStaff.department}`;
  } else {
    document.getElementById('admin-portal').classList.remove('hidden');
    document.getElementById('hero-user-name').innerText = 'Dr. Arvind Deshpande';
    document.getElementById('hero-user-role-badge').innerText = 'ADMIN';
    document.getElementById('hero-user-desc').innerText = 'Dean of Student Affairs & Grievance Cell Custodian';
  }
}

// =============================================================================
// STUDENT PORTAL
// =============================================================================

function renderStudentPortal() {
  const listContainer = document.getElementById('student-complaints-list');
  const myComplaints = app.complaints.filter(c => c.student_id === app.activeStudent.student_id || c.roll_number === app.activeStudent.roll_number);

  // Update micro stats
  document.getElementById('stu-stat-total').innerText = myComplaints.length;
  document.getElementById('stu-stat-pending').innerText = myComplaints.filter(c => c.status !== 'Resolved' && c.status !== 'Closed').length;
  document.getElementById('stu-stat-resolved').innerText = myComplaints.filter(c => c.status === 'Resolved').length;
  document.getElementById('stu-stat-closed').innerText = myComplaints.filter(c => c.status === 'Closed').length;

  const filtered = myComplaints.filter(c => {
    if (app.studentStatusFilter !== 'All' && c.status !== app.studentStatusFilter) return false;
    if (app.studentSearchQuery.trim()) {
      const q = app.studentSearchQuery.toLowerCase();
      return c.complaint_id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || c.category_name.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 48px; border: 2px dashed #DDD7C5; border-radius: 14px; background: #FFF;">
        <h4 style="font-size: 16px; margin-bottom: 6px;">No complaints match this filter</h4>
        <p style="color: #768390; font-size: 12px; margin-bottom: 14px;">Submit a new complaint or change the filter status.</p>
        <button class="btn btn-primary" onclick="openSubmitModal()">+ Lodge New Complaint</button>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(c => `
    <div class="complaint-item">
      <div class="complaint-meta-row">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-amber); background: #FAF4E8; padding: 2px 8px; border-radius: 4px; border: 1px solid #DFCBAA;">
            ${c.complaint_id}
          </span>
          <span class="badge badge-${c.status.toLowerCase().replace(/\s+/g, '-')}">${c.status}</span>
          <span class="badge badge-priority-${c.priority.toLowerCase()}">${c.priority} Priority</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted);">
          📅 Lodged: ${c.submission_date}
        </div>
      </div>

      <h3 class="complaint-title">${escapeHtml(c.title)}</h3>
      <p class="complaint-desc">${escapeHtml(c.description)}</p>

      <div class="complaint-details-strip">
        <span>🏛️ Department: <strong>${c.department_name}</strong></span>
        <span>📁 Category: <strong>${c.category_name}</strong></span>
        <span>👨‍🏫 Authority: <strong>${c.assigned_staff_name || 'Pending Dean Assignment'}</strong></span>
        ${c.attachment_name ? `<span style="font-family: var(--font-mono);">📎 ${escapeHtml(c.attachment_name)}</span>` : ''}
      </div>

      ${c.remarks ? `
        <div class="remarks-box">
          <strong style="color: var(--brand-amber); font-family: var(--font-mono); text-transform: uppercase; font-size: 10px; display: block; margin-bottom: 3px;">
            Faculty Inspection Note:
          </strong>
          <em>"${escapeHtml(c.remarks)}"</em>
        </div>
      ` : ''}

      ${c.resolution ? `
        <div class="resolution-box">
          <strong style="color: var(--brand-forest); font-family: var(--font-mono); text-transform: uppercase; font-size: 10px; display: block; margin-bottom: 3px;">
            Official Redressal Resolution (${c.resolution_date || 'Resolved'}):
          </strong>
          ${escapeHtml(c.resolution)}
        </div>
      ` : ''}

      <div class="complaint-footer">
        <span>${c.history.length} lifecycle events recorded</span>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="trackComplaint('${c.complaint_id}')">
            ⏱️ Track Progress
          </button>
          <button class="btn btn-forest btn-sm" onclick="openDossierModal('${c.complaint_id}')">
            📄 View Dossier
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Student Portal Toolbar Filter
function setStudentFilter(status, elem) {
  app.studentStatusFilter = status;
  document.querySelectorAll('#student-filter-pills .filter-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
  renderStudentPortal();
}

function filterStudentSearch(query) {
  app.studentSearchQuery = query;
  renderStudentPortal();
}

// =============================================================================
// STAFF / FACULTY PORTAL
// =============================================================================

function renderStaffPortal() {
  const listContainer = document.getElementById('staff-complaints-list');
  const assigned = app.complaints.filter(c =>
    c.assigned_staff_id === app.activeStaff.staff_id ||
    c.assigned_staff_name === app.activeStaff.name ||
    c.department_name === app.activeStaff.department
  );

  document.getElementById('stf-stat-queue').innerText = assigned.length;
  document.getElementById('stf-stat-pending').innerText = assigned.filter(c => c.status === 'Assigned' || c.status === 'In Progress').length;
  document.getElementById('stf-stat-resolved').innerText = assigned.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;

  const filtered = assigned.filter(c => {
    if (app.staffStatusFilter !== 'All' && c.status !== app.staffStatusFilter) return false;
    if (app.staffSearchQuery.trim()) {
      const q = app.staffSearchQuery.toLowerCase();
      return c.complaint_id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || c.student_name.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 48px; border: 2px dashed #DDD7C5; border-radius: 14px; background: #FFF;">
        <h4 style="font-size: 16px; margin-bottom: 6px;">Grievance Queue Clear</h4>
        <p style="color: #768390; font-size: 12px;">No complaints match the filter for your faculty desk.</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(c => `
    <div class="complaint-item">
      <div class="complaint-meta-row">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-amber); background: #FAF4E8; padding: 2px 8px; border-radius: 4px; border: 1px solid #DFCBAA;">
            ${c.complaint_id}
          </span>
          <span class="badge badge-${c.status.toLowerCase().replace(/\s+/g, '-')}">${c.status}</span>
          <span class="badge badge-priority-${c.priority.toLowerCase()}">${c.priority} Priority</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-muted);">
          Student: <strong>${c.student_name}</strong> (${c.roll_number})
        </div>
      </div>

      <h3 class="complaint-title">${escapeHtml(c.title)}</h3>
      <p class="complaint-desc">${escapeHtml(c.description)}</p>

      <div class="complaint-details-strip">
        <span>🏛️ ${c.department_name}</span>
        <span>📁 ${c.category_name}</span>
        <span>📅 Filed on ${c.submission_date}</span>
      </div>

      ${c.remarks ? `
        <div class="remarks-box">
          <strong style="color: var(--brand-amber); font-size: 10px; font-family: var(--font-mono); display: block; margin-bottom: 3px;">
            Your Faculty Remarks:
          </strong>
          ${escapeHtml(c.remarks)}
        </div>
      ` : ''}

      ${c.resolution ? `
        <div class="resolution-box">
          <strong style="color: var(--brand-forest); font-size: 10px; font-family: var(--font-mono); display: block; margin-bottom: 3px;">
            Recorded Resolution:
          </strong>
          ${escapeHtml(c.resolution)}
        </div>
      ` : ''}

      <div class="complaint-footer">
        <span>${c.history.length} audit records</span>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="trackComplaint('${c.complaint_id}')">
            History Audit
          </button>
          <button class="btn btn-forest btn-sm" onclick="openStaffUpdateModal('${c.complaint_id}')">
            ✍️ Update Status & Remarks
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function setStaffFilter(status, elem) {
  app.staffStatusFilter = status;
  document.querySelectorAll('#staff-filter-pills .filter-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
  renderStaffPortal();
}

function filterStaffSearch(query) {
  app.staffSearchQuery = query;
  renderStaffPortal();
}

// =============================================================================
// ADMINISTRATOR PORTAL
// =============================================================================

function renderAdminPortal() {
  // Update subtab counts
  document.getElementById('admin-count-complaints').innerText = app.complaints.length;
  document.getElementById('admin-count-students').innerText = app.students.length;
  document.getElementById('admin-count-staff').innerText = app.staff.length;
  document.getElementById('admin-count-dept').innerText = app.departments.length;
  document.getElementById('admin-count-cat').innerText = app.categories.length;

  // Hide all admin views
  document.getElementById('admin-view-complaints').classList.add('hidden');
  document.getElementById('admin-view-students').classList.add('hidden');
  document.getElementById('admin-view-staff').classList.add('hidden');
  document.getElementById('admin-view-departments').classList.add('hidden');
  document.getElementById('admin-view-categories').classList.add('hidden');

  // Show active view
  document.getElementById(`admin-view-${app.adminSubtab}`).classList.remove('hidden');

  renderAdminComplaintsTable();
  renderAdminStudentsTable();
  renderAdminStaffTable();
  renderAdminDepartmentsTable();
  renderAdminCategoriesTable();
}

function switchAdminSubtab(tabName, elem) {
  app.adminSubtab = tabName;
  document.querySelectorAll('.admin-subtab-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
  renderAdminPortal();
}

function renderAdminComplaintsTable() {
  const tbody = document.getElementById('admin-complaints-tbody');
  const deptSelect = document.getElementById('admin-dept-filter');

  // Populate dept dropdown once
  if (deptSelect && deptSelect.options.length <= 1) {
    app.departments.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.department_id;
      opt.innerText = d.department_name;
      deptSelect.appendChild(opt);
    });
  }

  const filtered = app.complaints.filter(c => {
    if (app.adminStatusFilter !== 'All' && c.status !== app.adminStatusFilter) return false;
    if (app.adminDeptFilter !== 'All' && c.department_id !== app.adminDeptFilter) return false;
    if (app.adminSearchQuery.trim()) {
      const q = app.adminSearchQuery.toLowerCase();
      return c.complaint_id.toLowerCase().includes(q) || c.student_name.toLowerCase().includes(q) || c.title.toLowerCase().includes(q);
    }
    return true;
  });

  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td>
        <strong style="color: var(--brand-amber); font-family: var(--font-mono);">${c.complaint_id}</strong>
        <div style="font-size: 10px; color: var(--ink-muted);">${c.submission_date.split(' ')[0]}</div>
      </td>
      <td>
        <strong>${escapeHtml(c.student_name)}</strong>
        <div style="font-family: var(--font-mono); font-size: 10px; color: var(--ink-muted);">${c.roll_number}</div>
      </td>
      <td>
        <div style="max-width: 200px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${escapeHtml(c.title)}
        </div>
        <div style="font-size: 10px; color: var(--ink-muted);">${c.category_name}</div>
      </td>
      <td>${c.department_name}</td>
      <td>
        ${c.assigned_staff_name ? `<strong>${c.assigned_staff_name}</strong>` : `<span style="color: #B45309; font-style: italic;">Awaiting Assignment</span>`}
      </td>
      <td><span class="badge badge-${c.status.toLowerCase().replace(/\s+/g, '-')}">${c.status}</span></td>
      <td style="text-align: right; white-space: nowrap;">
        <button class="btn btn-secondary btn-sm" onclick="openAssignModal('${c.complaint_id}')">
          ${c.assigned_staff_name ? 'Reassign' : 'Assign'}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="trackComplaint('${c.complaint_id}')">
          Audit
        </button>
      </td>
    </tr>
  `).join('');
}

function renderAdminStudentsTable() {
  const tbody = document.getElementById('admin-students-tbody');
  tbody.innerHTML = app.students.map(s => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-amber);">${s.student_id}</td>
      <td><strong>${escapeHtml(s.name)}</strong></td>
      <td style="font-family: var(--font-mono);">${s.roll_number}</td>
      <td>${s.class} (${s.division})</td>
      <td>${s.department}</td>
      <td style="font-family: var(--font-mono); color: var(--ink-muted);">${s.email}</td>
      <td style="text-align: right;">
        ${s.student_id !== 'STU-001' ? `
          <button class="btn btn-secondary btn-sm" style="color: #DC2626;" onclick="deleteStudent('${s.student_id}')">Delete</button>
        ` : `<span style="font-size: 10px; color: var(--ink-muted); font-mono;">PRIMARY</span>`}
      </td>
    </tr>
  `).join('');
}

function renderAdminStaffTable() {
  const tbody = document.getElementById('admin-staff-tbody');
  tbody.innerHTML = app.staff.map(st => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-forest);">${st.staff_id}</td>
      <td><strong>${escapeHtml(st.name)}</strong></td>
      <td>${st.department}</td>
      <td>${st.designation}</td>
      <td style="font-family: var(--font-mono); color: var(--ink-muted);">${st.email}</td>
      <td style="text-align: right;">
        ${st.staff_id !== 'STF-01' ? `
          <button class="btn btn-secondary btn-sm" style="color: #DC2626;" onclick="deleteStaff('${st.staff_id}')">Delete</button>
        ` : `<span style="font-size: 10px; color: var(--ink-muted); font-mono;">LIAISON</span>`}
      </td>
    </tr>
  `).join('');
}

function renderAdminDepartmentsTable() {
  const tbody = document.getElementById('admin-departments-tbody');
  tbody.innerHTML = app.departments.map(d => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-amber);">${d.department_id}</td>
      <td><strong>${escapeHtml(d.department_name)}</strong></td>
      <td style="font-family: var(--font-mono);">${d.code}</td>
      <td>${d.head_name}</td>
      <td style="text-align: right;">
        ${d.department_id !== 'DEP-01' ? `
          <button class="btn btn-secondary btn-sm" style="color: #DC2626;" onclick="deleteDepartment('${d.department_id}')">Delete</button>
        ` : `<span style="font-size: 10px; color: var(--ink-muted); font-mono;">CORE</span>`}
      </td>
    </tr>
  `).join('');
}

function renderAdminCategoriesTable() {
  const tbody = document.getElementById('admin-categories-tbody');
  tbody.innerHTML = app.categories.map(cat => {
    const dept = app.departments.find(d => d.department_id === cat.default_department_id);
    return `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--brand-amber);">${cat.category_id}</td>
        <td><strong>${escapeHtml(cat.category_name)}</strong></td>
        <td style="color: var(--ink-body); max-width: 280px;">${escapeHtml(cat.description)}</td>
        <td style="font-family: var(--font-mono);">${dept ? dept.department_name : cat.default_department_id}</td>
        <td style="text-align: right;">
          ${cat.category_id !== 'CAT-01' ? `
            <button class="btn btn-secondary btn-sm" style="color: #DC2626;" onclick="deleteCategory('${cat.category_id}')">Delete</button>
          ` : `<span style="font-size: 10px; color: var(--ink-muted); font-mono;">DEFAULT</span>`}
        </td>
      </tr>
    `;
  }).join('');
}

// Admin Filters
function setAdminStatusFilter(status, elem) {
  app.adminStatusFilter = status;
  document.querySelectorAll('#admin-status-pills .filter-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');
  renderAdminComplaintsTable();
}

function setAdminDeptFilter(deptId) {
  app.adminDeptFilter = deptId;
  renderAdminComplaintsTable();
}

function filterAdminSearch(query) {
  app.adminSearchQuery = query;
  renderAdminComplaintsTable();
}

// Delete handlers
function deleteStudent(id) {
  if (confirm(`Remove student ${id} from directory?`)) {
    app.students = app.students.filter(s => s.student_id !== id);
    app.save();
    renderAll();
  }
}
function deleteStaff(id) {
  if (confirm(`Remove faculty officer ${id}?`)) {
    app.staff = app.staff.filter(s => s.staff_id !== id);
    app.save();
    renderAll();
  }
}
function deleteDepartment(id) {
  if (confirm(`Remove department ${id}?`)) {
    app.departments = app.departments.filter(d => d.department_id !== id);
    app.save();
    renderAll();
  }
}
function deleteCategory(id) {
  if (confirm(`Remove category ${id}?`)) {
    app.categories = app.categories.filter(c => c.category_id !== id);
    app.save();
    renderAll();
  }
}

// =============================================================================
// MODALS & INTERACTIVE FEATURES
// =============================================================================

function initModals() {
  // Populate category and department selects in Submit Modal
  const catSelect = document.getElementById('submit-category-select');
  const deptSelect = document.getElementById('submit-department-select');

  if (catSelect && deptSelect) {
    catSelect.innerHTML = app.categories.map(c => `
      <option value="${c.category_id}">${c.category_name}</option>
    `).join('');

    deptSelect.innerHTML = app.departments.map(d => `
      <option value="${d.department_id}">${d.department_name} (${d.code})</option>
    `).join('');

    catSelect.addEventListener('change', () => {
      const cat = app.categories.find(c => c.category_id === catSelect.value);
      if (cat && cat.default_department_id) {
        deptSelect.value = cat.default_department_id;
      }
    });
  }

  // Handle complaint submission form
  const submitForm = document.getElementById('submit-complaint-form');
  if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('submit-title').value.trim();
      const desc = document.getElementById('submit-description').value.trim();
      const priority = document.querySelector('input[name="priority"]:checked')?.value || 'Normal';
      const fileInput = document.getElementById('submit-file');
      const attachmentName = fileInput.files && fileInput.files[0] ? fileInput.files[0].name : null;

      if (!title || !desc) {
        alert('Please fill out both the complaint title and description.');
        return;
      }

      const created = app.submitComplaint({
        categoryId: catSelect.value,
        departmentId: deptSelect.value,
        title: title,
        description: desc,
        priority: priority,
        attachmentName: attachmentName
      });

      // Show success view
      document.getElementById('submit-form-fields').classList.add('hidden');
      document.getElementById('submit-success-view').classList.remove('hidden');
      document.getElementById('submitted-complaint-id').innerText = created.complaint_id;

      renderAll();
    });
  }
}

function openSubmitModal() {
  document.getElementById('submit-complaint-modal').classList.remove('hidden');
  document.getElementById('submit-form-fields').classList.remove('hidden');
  document.getElementById('submit-success-view').classList.add('hidden');
  document.getElementById('submit-title').value = '';
  document.getElementById('submit-description').value = '';
}

function closeSubmitModal() {
  document.getElementById('submit-complaint-modal').classList.add('hidden');
}

// Tracking Modal by ID
function initQuickTracker() {
  const form = document.getElementById('quick-track-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('quick-track-input');
      const id = input.value.trim().toUpperCase();
      if (!id) return;

      const found = app.complaints.find(c => c.complaint_id.toUpperCase() === id || c.complaint_id.replace(/-/g, '').toUpperCase() === id.replace(/-/g, ''));
      if (found) {
        trackComplaint(found.complaint_id);
        input.value = '';
      } else {
        alert(`Complaint ID "${id}" was not found. Try e.g. CMP-2026-1042`);
      }
    });
  }
}

function trackComplaint(id) {
  const c = app.complaints.find(item => item.complaint_id === id);
  if (!c) return;

  const modal = document.getElementById('tracking-modal');
  modal.classList.remove('hidden');

  document.getElementById('track-id-badge').innerText = c.complaint_id;
  document.getElementById('track-status-badge').innerText = c.status;
  document.getElementById('track-status-badge').className = `badge badge-${c.status.toLowerCase().replace(/\s+/g, '-')}`;
  document.getElementById('track-priority-badge').innerText = `${c.priority} Priority`;
  document.getElementById('track-priority-badge').className = `badge badge-priority-${c.priority.toLowerCase()}`;

  document.getElementById('track-title').innerText = c.title;
  document.getElementById('track-desc').innerText = c.description;
  document.getElementById('track-student').innerText = `${c.student_name} (${c.roll_number})`;
  document.getElementById('track-dept').innerText = c.department_name;
  document.getElementById('track-category').innerText = c.category_name;
  document.getElementById('track-authority').innerText = c.assigned_staff_name || 'Pending Dean Assignment';

  // Stepper calculations
  const steps = ['Submitted', 'Assigned', 'In Progress', 'Resolved', 'Closed'];
  const curIdx = steps.indexOf(c.status);

  // Set progress bar width
  const progressPercent = (curIdx / (steps.length - 1)) * 100;
  document.getElementById('stepper-progress-fill').style.width = `${progressPercent}%`;

  steps.forEach((st, idx) => {
    const circle = document.getElementById(`step-circle-${idx}`);
    const label = document.getElementById(`step-label-${idx}`);
    circle.className = 'step-circle';
    label.className = 'step-label';

    if (idx < curIdx) {
      circle.classList.add('completed');
      circle.innerHTML = '✓';
    } else if (idx === curIdx) {
      circle.classList.add('active');
      circle.innerHTML = `${idx + 1}`;
      label.classList.add('active');
    } else {
      circle.innerHTML = `${idx + 1}`;
    }
  });

  // Remarks & Resolution
  const remarksBox = document.getElementById('track-remarks-container');
  if (c.remarks) {
    remarksBox.classList.remove('hidden');
    document.getElementById('track-remarks-text').innerText = c.remarks;
  } else {
    remarksBox.classList.add('hidden');
  }

  const resBox = document.getElementById('track-resolution-container');
  if (c.resolution) {
    resBox.classList.remove('hidden');
    document.getElementById('track-resolution-text').innerText = c.resolution;
  } else {
    resBox.classList.add('hidden');
  }

  // Audit history
  const historyList = document.getElementById('track-history-list');
  historyList.innerHTML = c.history.map(h => `
    <div style="padding: 10px 14px; border-bottom: 1px solid #E8E5DD; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
      <div>
        <div style="font-weight: 700; color: #1A1D20;">
          ${h.status} <span style="font-size: 10px; font-family: var(--font-mono); color: #768390; font-weight: 400;">• by ${h.updated_by}</span>
        </div>
        <div style="font-size: 11px; color: #4F5661; margin-top: 2px;">${escapeHtml(h.remarks)}</div>
      </div>
      <div style="font-family: var(--font-mono); font-size: 10px; color: #768390; white-space: nowrap;">
        ${h.updated_date}
      </div>
    </div>
  `).join('');

  // Close complaint button if student & resolved
  const closeBtn = document.getElementById('track-close-complaint-btn');
  if (c.status === 'Resolved' && app.role === 'student') {
    closeBtn.classList.remove('hidden');
    closeBtn.onclick = () => {
      if (confirm('Confirm satisfactory resolution and mark this case officially Closed?')) {
        app.updateStatus(c.complaint_id, 'Closed', 'Student verified and confirmed satisfactory resolution.', c.resolution);
        closeTrackingModal();
        renderAll();
      }
    };
  } else {
    closeBtn.classList.add('hidden');
  }
}

function closeTrackingModal() {
  document.getElementById('tracking-modal').classList.add('hidden');
}

// Dossier View Modal
function openDossierModal(id) {
  const c = app.complaints.find(item => item.complaint_id === id);
  if (!c) return;

  document.getElementById('dossier-id').innerText = c.complaint_id;
  document.getElementById('dossier-status').innerText = c.status;
  document.getElementById('dossier-date').innerText = c.submission_date;
  document.getElementById('dossier-student').innerText = c.student_name;
  document.getElementById('dossier-roll').innerText = c.roll_number;
  document.getElementById('dossier-dept').innerText = c.department_name;
  document.getElementById('dossier-authority').innerText = c.assigned_staff_name || 'Pending Assignment';
  document.getElementById('dossier-category').innerText = c.category_name;
  document.getElementById('dossier-title').innerText = c.title;
  document.getElementById('dossier-desc').innerText = c.description;

  const remarksContainer = document.getElementById('dossier-remarks-container');
  if (c.remarks) {
    remarksContainer.classList.remove('hidden');
    document.getElementById('dossier-remarks').innerText = c.remarks;
  } else {
    remarksContainer.classList.add('hidden');
  }

  const resContainer = document.getElementById('dossier-resolution-container');
  if (c.resolution) {
    resContainer.classList.remove('hidden');
    document.getElementById('dossier-resolution').innerText = c.resolution;
  } else {
    resContainer.classList.add('hidden');
  }

  document.getElementById('dossier-history-list').innerHTML = c.history.map(h => `
    <div style="padding: 8px 12px; border-bottom: 1px solid #E8E5DD; font-size: 11px;">
      <strong>${h.status}</strong> • <span style="font-family: var(--font-mono); color: #768390;">${h.updated_by}</span>
      <div style="color: #4F5661;">${escapeHtml(h.remarks)}</div>
      <div style="font-family: var(--font-mono); font-size: 9px; color: #9AA1A9; text-align: right;">${h.updated_date}</div>
    </div>
  `).join('');

  document.getElementById('dossier-modal').classList.remove('hidden');
}

function closeDossierModal() {
  document.getElementById('dossier-modal').classList.add('hidden');
}

// Staff Update Modal
let currentEditingStaffComplaintId = null;
function openStaffUpdateModal(id) {
  const c = app.complaints.find(item => item.complaint_id === id);
  if (!c) return;
  currentEditingStaffComplaintId = id;

  document.getElementById('staff-edit-complaint-id').innerText = c.complaint_id;
  document.getElementById('staff-edit-status').value = c.status === 'Submitted' ? 'Assigned' : c.status;
  document.getElementById('staff-edit-remarks').value = c.remarks || '';
  document.getElementById('staff-edit-resolution').value = c.resolution || '';

  toggleResolutionVisibility();
  document.getElementById('staff-update-modal').classList.remove('hidden');
}

function toggleResolutionVisibility() {
  const status = document.getElementById('staff-edit-status').value;
  const resGroup = document.getElementById('staff-resolution-group');
  if (status === 'Resolved' || status === 'Closed') {
    resGroup.classList.remove('hidden');
  } else {
    resGroup.classList.add('hidden');
  }
}

function saveStaffUpdate() {
  if (!currentEditingStaffComplaintId) return;
  const status = document.getElementById('staff-edit-status').value;
  const remarks = document.getElementById('staff-edit-remarks').value.trim();
  const resolution = document.getElementById('staff-edit-resolution').value.trim();

  app.updateStatus(currentEditingStaffComplaintId, status, remarks, resolution);
  closeStaffUpdateModal();
  renderAll();
}

function closeStaffUpdateModal() {
  document.getElementById('staff-update-modal').classList.add('hidden');
  currentEditingStaffComplaintId = null;
}

// Admin Assign Modal
let currentAssigningComplaintId = null;
function openAssignModal(id) {
  const c = app.complaints.find(item => item.complaint_id === id);
  if (!c) return;
  currentAssigningComplaintId = id;

  document.getElementById('assign-complaint-id').innerText = c.complaint_id;
  document.getElementById('assign-title').innerText = c.title;

  const deptSelect = document.getElementById('assign-dept-select');
  deptSelect.innerHTML = app.departments.map(d => `
    <option value="${d.department_id}" ${d.department_id === c.department_id ? 'selected' : ''}>
      ${d.department_name} (${d.code})
    </option>
  `).join('');

  updateStaffAssignOptions();
  deptSelect.onchange = updateStaffAssignOptions;

  document.getElementById('admin-assign-modal').classList.remove('hidden');
}

function updateStaffAssignOptions() {
  const deptId = document.getElementById('assign-dept-select').value;
  const targetDept = app.departments.find(d => d.department_id === deptId);
  const staffSelect = document.getElementById('assign-staff-select');

  staffSelect.innerHTML = app.staff.map(s => `
    <option value="${s.staff_id}">
      ${s.name} - ${s.designation} (${s.department})
    </option>
  `).join('');
}

function saveAssignment() {
  if (!currentAssigningComplaintId) return;
  const deptId = document.getElementById('assign-dept-select').value;
  const staffId = document.getElementById('assign-staff-select').value;

  app.assignComplaint(currentAssigningComplaintId, deptId, staffId);
  closeAssignModal();
  renderAll();
}

function closeAssignModal() {
  document.getElementById('admin-assign-modal').classList.add('hidden');
  currentAssigningComplaintId = null;
}

// Add Student Modal
function openAddStudentModal() {
  document.getElementById('add-student-modal').classList.remove('hidden');
  const deptSelect = document.getElementById('new-student-dept');
  deptSelect.innerHTML = app.departments.map(d => `<option value="${d.department_name}">${d.department_name}</option>`).join('');
}
function closeAddStudentModal() {
  document.getElementById('add-student-modal').classList.add('hidden');
}
function saveNewStudent(e) {
  e.preventDefault();
  const name = document.getElementById('new-student-name').value.trim();
  const roll = document.getElementById('new-student-roll').value.trim();
  const cls = document.getElementById('new-student-class').value.trim();
  const div = document.getElementById('new-student-div').value.trim();
  const dept = document.getElementById('new-student-dept').value;

  if (!name || !roll) return;

  const id = `STU-00${app.students.length + 1}`;
  app.students.push({
    student_id: id,
    name: name,
    roll_number: roll,
    class: cls || 'T.E. Computer Engineering',
    division: div || 'Div A',
    department: dept,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@college.edu`,
    phone: '+91 98000 12345'
  });

  app.save();
  closeAddStudentModal();
  renderAll();
}

// Add Staff Modal
function openAddStaffModal() {
  document.getElementById('add-staff-modal').classList.remove('hidden');
  const deptSelect = document.getElementById('new-staff-dept');
  deptSelect.innerHTML = app.departments.map(d => `<option value="${d.department_name}">${d.department_name}</option>`).join('');
}
function closeAddStaffModal() {
  document.getElementById('add-staff-modal').classList.add('hidden');
}
function saveNewStaff(e) {
  e.preventDefault();
  const name = document.getElementById('new-staff-name').value.trim();
  const desig = document.getElementById('new-staff-desig').value.trim();
  const dept = document.getElementById('new-staff-dept').value;

  if (!name) return;

  const id = `STF-0${app.staff.length + 1}`;
  app.staff.push({
    staff_id: id,
    name: name,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@college.edu`,
    department: dept,
    designation: desig || 'Assistant Professor',
    phone: '+91 94000 54321'
  });

  app.save();
  closeAddStaffModal();
  renderAll();
}

// Add Department Modal
function openAddDeptModal() {
  document.getElementById('add-dept-modal').classList.remove('hidden');
}
function closeAddDeptModal() {
  document.getElementById('add-dept-modal').classList.add('hidden');
}
function saveNewDept(e) {
  e.preventDefault();
  const name = document.getElementById('new-dept-name').value.trim();
  const code = document.getElementById('new-dept-code').value.trim().toUpperCase();
  const head = document.getElementById('new-dept-head').value.trim();

  if (!name || !code) return;

  const id = `DEP-0${app.departments.length + 1}`;
  app.departments.push({
    department_id: id,
    department_name: name,
    code: code,
    head_name: head || 'Department Head'
  });

  app.save();
  closeAddDeptModal();
  renderAll();
}

// Add Category Modal
function openAddCatModal() {
  document.getElementById('add-cat-modal').classList.remove('hidden');
  const deptSelect = document.getElementById('new-cat-dept');
  deptSelect.innerHTML = app.departments.map(d => `<option value="${d.department_id}">${d.department_name}</option>`).join('');
}
function closeAddCatModal() {
  document.getElementById('add-cat-modal').classList.add('hidden');
}
function saveNewCat(e) {
  e.preventDefault();
  const name = document.getElementById('new-cat-name').value.trim();
  const desc = document.getElementById('new-cat-desc').value.trim();
  const deptId = document.getElementById('new-cat-dept').value;

  if (!name) return;

  const id = `CAT-0${app.categories.length + 1}`;
  app.categories.push({
    category_id: id,
    category_name: name,
    description: desc || 'General grievance category.',
    default_department_id: deptId
  });

  app.save();
  closeAddCatModal();
  renderAll();
}

// Reports Modal (SRS Section 9.8)
function openReportsModal() {
  renderReports();
  document.getElementById('reports-modal').classList.remove('hidden');
}
function closeReportsModal() {
  document.getElementById('reports-modal').classList.add('hidden');
}

function switchReportTab(tabId, elem) {
  document.querySelectorAll('.report-tab-btn').forEach(b => b.classList.remove('active'));
  elem.classList.add('active');

  document.getElementById('report-tab-overview').classList.add('hidden');
  document.getElementById('report-tab-department').classList.add('hidden');
  document.getElementById('report-tab-category').classList.add('hidden');
  document.getElementById('report-tab-student').classList.add('hidden');

  document.getElementById(`report-tab-${tabId}`).classList.remove('hidden');
}

function renderReports() {
  const total = app.complaints.length;
  const pending = app.complaints.filter(c => c.status !== 'Resolved' && c.status !== 'Closed').length;
  const resolved = app.complaints.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;
  const rate = total > 0 ? Math.round((resolved / total) * 100) : 100;

  document.getElementById('rep-total').innerText = total;
  document.getElementById('rep-pending').innerText = pending;
  document.getElementById('rep-resolved').innerText = resolved;
  document.getElementById('rep-rate').innerText = `${rate}%`;

  // Department-wise
  const deptTbody = document.getElementById('rep-dept-tbody');
  deptTbody.innerHTML = app.departments.map(d => {
    const list = app.complaints.filter(c => c.department_id === d.department_id || c.department_name === d.department_name);
    const resCount = list.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;
    const share = total > 0 ? Math.round((list.length / total) * 100) : 0;
    return `
      <tr>
        <td><strong>${d.department_name}</strong></td>
        <td style="font-family: var(--font-mono);">${d.code}</td>
        <td><strong>${list.length}</strong></td>
        <td style="color: #C25E00;">${list.length - resCount}</td>
        <td style="color: #1E6B39;">${resCount}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 60px; height: 6px; background: #EFECE1; border-radius: 3px; overflow: hidden;">
              <div style="width: ${share}%; height: 100%; background: #963D26;"></div>
            </div>
            <span style="font-family: var(--font-mono); font-size: 10px;">${share}%</span>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Category-wise
  const catGrid = document.getElementById('rep-cat-grid');
  catGrid.innerHTML = app.categories.map(cat => {
    const list = app.complaints.filter(c => c.category_id === cat.category_id);
    const share = total > 0 ? Math.round((list.length / total) * 100) : 0;
    return `
      <div style="padding: 12px; background: #FFF; border: 1px solid #E8E5DD; border-radius: 10px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <strong style="font-size: 12px;">${cat.category_name}</strong>
          <span style="font-family: var(--font-mono); font-weight: 700; color: #963D26;">${list.length} filed</span>
        </div>
        <div style="width: 100%; height: 6px; background: #EFECE1; border-radius: 3px; overflow: hidden;">
          <div style="width: ${share}%; height: 100%; background: #234E3E;"></div>
        </div>
      </div>
    `;
  }).join('');

  // Student-wise
  const stuTbody = document.getElementById('rep-stu-tbody');
  stuTbody.innerHTML = app.students.map(s => {
    const list = app.complaints.filter(c => c.student_id === s.student_id || c.roll_number === s.roll_number);
    const resCount = list.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;
    return `
      <tr>
        <td><strong>${s.name}</strong></td>
        <td style="font-family: var(--font-mono);">${s.roll_number}</td>
        <td>${s.department}</td>
        <td><strong>${list.length}</strong></td>
        <td style="color: #C25E00;">${list.length - resCount}</td>
        <td style="color: #1E6B39;">${resCount}</td>
      </tr>
    `;
  }).join('');
}

// Workflow Modal (SRS Section 9.5 & 16)
function openWorkflowModal() {
  document.getElementById('workflow-modal').classList.remove('hidden');
}
function closeWorkflowModal() {
  document.getElementById('workflow-modal').classList.add('hidden');
}

// Reset Database Confirmation
function resetDemoData() {
  if (confirm('Reset and restore original seed records for Samiksha Kakade, faculty staff, and departments?')) {
    app.reset();
    renderAll();
    alert('System records successfully restored to default PBL demo state.');
  }
}

// Utility: HTML Escaping
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
