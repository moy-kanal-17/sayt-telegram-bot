-- 1. Admins
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT,
    role VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Patients
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    date_of_birth DATE,
    gender VARCHAR(10),
    phone VARCHAR(20),
    address TEXT,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Doctors
CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    specialty VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100)
);

-- 4. Staffs
CREATE TABLE staffs (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    position VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100)
);

-- 5. Appointments
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    doctor_id INT REFERENCES doctors(id),
    appointment_date TIMESTAMP,
    status VARCHAR(50)
);

-- 6. MedicalRecords
CREATE TABLE medical_records (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    doctor_id INT REFERENCES doctors(id),
    diagnosis TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Medications
CREATE TABLE medications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT
);

-- 8. Prescriptions
CREATE TABLE prescriptions (
    id SERIAL PRIMARY KEY,
    medical_record_id INT REFERENCES medical_records(id),
    medication_id INT REFERENCES medications(id),
    dosage VARCHAR(100),
    frequency VARCHAR(100)
);

-- 9. Payments
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    amount DECIMAL(10, 2),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    method VARCHAR(50)
);

-- 10. LabTests
CREATE TABLE lab_tests (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(id),
    test_name VARCHAR(100),
    result TEXT,
    test_date TIMESTAMP
);
