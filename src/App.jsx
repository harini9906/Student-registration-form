
import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    gender: '',
    team: '',
    comments: ''
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      department: '',
      year: '',
      gender: '',
      team: '',
      comments: ''
    })
    setSuccess(false)
  }

  return (
    <div className="page">

      <header className="header">
        <div className="logo">🎓</div>
        <div>
          <h1>Event Registration</h1>
          <p>Register for the AI Hackathon 2026</p>
        </div>
      </header>

      <div className="main-card">

        <div className="event-info">
          <h2>AI Hackathon</h2>
          <h3>2026</h3>
          <p className="tagline">Innovate • Build • Excel</p>

          <div className="robot">🤖</div>

          <div className="details">
            <p>📅 <b>Date:</b> December 15, 2026</p>
            <p>📍 <b>Venue:</b> College Auditorium</p>
            <p>🏆 <b>Events:</b> Coding, AI Projects</p>
          </div>

          <div className="quote">
            Be a part of the biggest tech event of the year! 🚀
          </div>
        </div>

        <div className="form-section">
          <div className="form-heading">
            <h2>👤 Student Registration Form</h2>
          </div>

          {success ? (
            <div className="success">
              <h2>🎉 Registration Successful!</h2>
              <p>Thank you, {form.name}!</p>
              <p>Your registration has been received.</p>

              <div className="student-details">
                <h3>Registration Details</h3>
                <p><b>Name:</b> {form.name}</p>
                <p><b>Email:</b> {form.email}</p>
                <p><b>Phone:</b> {form.phone}</p>
                <p><b>Department:</b> {form.department}</p>
                <p><b>Year:</b> {form.year}</p>
                <p><b>Gender:</b> {form.gender}</p>
                <p><b>Team Member:</b> {form.team || 'Not provided'}</p>
                <p><b>Comments:</b> {form.comments || 'None'}</p>
              </div>

              <button className="register-btn" onClick={resetForm}>
                Register Another Student
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="field">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit number"
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Department *</label>
                  <select name="department" value={form.department}
                    onChange={handleChange} required>
                    <option value="">Select Department</option>
                    <option>CSE</option>
                    <option>AIML</option>
                    <option>IT</option>
                    <option>ECE</option>
                    <option>EEE</option>
                    <option>Mechanical</option>
                  </select>
                </div>

                <div className="field">
                  <label>Year of Study *</label>
                  <select name="year" value={form.year}
                    onChange={handleChange} required>
                    <option value="">Select Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>

                <div className="field">
                  <label>Gender *</label>
                  <select name="gender" value={form.gender}
                    onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              <div className="field">
                <label>Team Member (Optional)</label>
                <input
                  name="team"
                  placeholder="Enter team member name"
                  value={form.team}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Additional Comments</label>
                <textarea
                  name="comments"
                  placeholder="Enter your message..."
                  value={form.comments}
                  onChange={handleChange}
                />
              </div>

              <div className="buttons">
                <button type="submit" className="register-btn">
                  🚀 Register Now
                </button>
                <button type="button" className="reset-btn"
                  onClick={resetForm}>
                  ↻ Reset
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      <footer>
        © 2026 AI Hackathon | All Rights Reserved
      </footer>

    </div>
  )
}

export default App
