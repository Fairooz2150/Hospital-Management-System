import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments({});
        console.log("Some Error Occured While Fetching Appointments", error);
      }
    };
    fetchAppointments();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="Admin" />
            <div className="content">
              <div>
                <p>Hello, </p>
                <h5>{user && `${user.firstName} ${user.lastName}`}</h5>
              </div>
              <p>
                The Life Care Administration panel allows admins to add new
                administrators, register doctors, and manage patient
                appointments. Admins can view, approve, or reject appointment
                requests, ensuring smooth hospital operations and improved
                efficiency.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{appointments.length}</h3>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Dashboard;
