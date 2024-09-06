
# Hospital Management System - Patient Portal (Frontend)

This is the **Patient Portal** of the **Life Care Hospital** Management System. The portal allows patients to manage their appointments, communicate with the hospital administration, and learn more about the hospital. It provides a simple and intuitive interface for patients to perform these essential tasks.

## Features

- **Patient Registration and Login**: Patients can create an account, log in to the portal, and manage their information securely.
- **Appointment Booking**: Patients can schedule appointments with doctors by providing their details, selecting a doctor, and choosing the desired date.
- **Message to Admin**: Patients can send messages directly to the hospital administration, helping to address inquiries, issues, or general questions.
- **About the Hospital**: Learn about **Life Care Hospital**, its services, and its mission to provide top-quality healthcare.

## Pages and Functionalities

1. **Home**:
   - Provides a general overview of the services offered by **Life Care Hospital** and quick access to key actions like booking appointments, sending messages, and more.

2. **Register**:
   - Patients can create a new account by entering their personal details, including name, email, and password, to gain access to the patient portal.

3. **Login**:
   - Patients can log in using their registered email and password to access their dashboard and manage their interactions with the hospital.

4. **Appointment Booking**:
   - Patients can book appointments by providing their personal details, selecting the doctor they wish to meet with, and choosing a suitable date. Appointments are then reviewed by the hospital admin.

5. **Messages**:
   - Patients can send direct messages to the hospital administration to ask questions or raise concerns. Admins will review and respond to messages as needed.

6. **About Us**:
   - Patients can view detailed information about **Life Care Hospital**, its history, and its mission to provide exceptional healthcare services to the community.

## Technologies Used

- **Frontend Framework**: React.js
- **State Management**: React Hooks and Context API
- **API Calls**: Axios for making HTTP requests to the backend

## Getting Started

To run the Patient Portal of the Hospital Management System locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system
- Backend server for handling API requests (ensure that the backend is running)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hospital-management-system-patient.git
   ```

2. Navigate to the **Frontend-Patient** folder:

   ```bash
   cd Frontend-Patient
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

2. Open your browser and navigate to **http://localhost:5173** to access the Patient Portal.

### Environment Variables

Ensure that you have a `.env` file in the root directory with the following variable:

```bash
REACT_APP_BACKEND_URL=http://localhost:4000
```

This will allow the frontend to communicate with the backend server.

### Usage

1. Register as a patient by filling out the registration form with your personal information.
2. Log in to access the patient dashboard where you can manage appointments and send messages to the hospital.
3. Book appointments with doctors by providing necessary details, selecting a doctor, and choosing a preferred appointment date.
4. Send messages to the hospital administration for any queries or concerns.

### Contributing

If you'd like to contribute to the Patient Portal, feel free to fork the repository and create a pull request with your changes.

### Key Highlights:

- User-friendly portal for patients to register, login, and manage appointments.
- Secure communication with hospital administration via messaging.
- Easy-to-use interface for booking appointments with detailed doctor and patient information.



