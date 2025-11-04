import React from "react";
import "./Settings.css";


export default function Settings() {
  return (
    <div class="settings">
  <div class="settings-header">
    <h1>Account Settings</h1>
    <p>Manage your profile and preferences</p>
  </div>

  {/* Profile Section */}
  <div className="settings-section profile-section">
    <h2>Profile Information</h2>
    <div className="profile-info">
      <div className="profile-avatar">JS</div>
      <div className="profile-details">
        <h3>John Smith</h3>
        <p>john.smith@example.com</p>
      </div>
    </div>
    <form className="profile-form">
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" defaultValue="John Smith" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" defaultValue="john.smith@example.com" />
      </div>
      <button type="submit" className="btn-primary">Update Profile</button>
    </form>
  </div>

  {/* Security Section */}
  <div className="settings-section security-section">
    <h2>Security Settings</h2>
    <form className="password-form">
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password" id="currentPassword" placeholder="Enter current password" />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" placeholder="Enter new password" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input type="password" id="confirmPassword" placeholder="Confirm new password" />
      </div>
      <button type="submit" className="btn-primary" onClick={() => alert('password updated')}>Update Password</button>
       
    </form>
  </div>

  {/* Notifications Section */}
  <div className="settings-section notifications-section">
    <h2>Notification Preferences</h2>
    <div className="notification-form">
      <div className="toggle-group">
        <div className="toggle-item">
          <div className="toggle-label">
            <strong>Email Notifications</strong>
            <span>Receive updates via email</span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="toggle-item">
          <div className="toggle-label">
            <strong>Push Notifications</strong>
            <span>Get browser notifications</span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="toggle-item">
          <div className="toggle-label">
            <strong>Security Alerts</strong>
            <span>Important security updates</span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <button type="submit" class="btn-primary">Save Preferences</button>
    </div>
  </div>
</div>
  );
}
