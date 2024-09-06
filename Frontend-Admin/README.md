# Hospital Management System - Admin Panel

This is the **Admin Panel** of the Hospital Management System, designed to manage doctors, appointments, and patient messages efficiently. The admin panel provides a user-friendly interface for administrators to perform key operations related to hospital management.

## Features

- **Doctor Management**: Admin can register new doctors and manage their profiles.
- **Admin Management**: Admin can add new administrators to the system to help manage the hospital.
- **Appointment Management**: Admin can view, approve, or reject patient appointments that are in the pending status.
- **Patient Messages**: Admin can read messages sent by patients and respond to inquiries when necessary.
- **View Doctors**: Admins can view the complete list of registered doctors and manage their profiles.

## Pages and Functionalities

1. **Dashboard**: 
   - Overview of hospital management system activity, quick links to actions like registering doctors, adding admins, and managing appointments.

2. **Register Doctors**:
   - Admins can add new doctors to the system by filling out a registration form that includes doctor details such as name, specialization, contact info, and availability.

3. **Add New Admins**:
   - Admins can add other administrators to share the workload. This feature allows for better distribution of responsibilities.

4. **Manage Appointments**:
   - Admins can check the status of patient appointments, approve or reject appointments that are pending, and see all approved or rejected appointments.

5. **Read Patient Messages**:
   - Admins can read messages sent by patients, helping to address their concerns and ensuring smooth communication between the hospital and its patients.

6. **View Doctors**:
    - Admins can view the complete list of registered doctors and manage their profiles.

## Technologies Used

- **Frontend Framework**: React.js
- **State Management**: React Hooks and Context API
- **API Calls**: Axios for making HTTP requests to the backend

## Getting Started

To run the Admin Panel of the Hospital Management System locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system
- Backend server for handling API requests (ensure that the backend is running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hospital-management-system-admin.git
    ```
2. Navigate to the Frontend-Admin folder:

 ```bash
cd Frontend-Admin
```
3. Install the required dependencies:
 ```bash
npm install
```
### Running the Application
1. Start the application:
 ```bash
    npm start 
```
2. Open your browser and navigate to http://localhost:5174 to access the Admin Panel.

### Environment Variables
Ensure that you have a .env file in the root directory with the following variables:

REACT_APP_BACKEND_URL=http://localhost:4000

This will allow the frontend to communicate with the backend server.

### Usage
1. Login with admin credentials to access the admin dashboard.
2. Navigate through the dashboard to manage doctors, add admins, approve/reject appointments, and respond to patient messages.

### Contributing
If you'd like to contribute to the Admin Panel, feel free to fork the repository and create a pull request with your changes.


### Key Highlights:
- It explains the main features of the admin panel.
- Provides setup and installation instructions.
- Defines the technology stack used.
- Includes environment variable details to help the frontend communicate with the backend.