-- Create employees table
CREATE TABLE employees (
    emp_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('MALE', 'FEMALE')),  -- Use VARCHAR with CHECK constraint
    DOB DATE
);


-- Create tasks table
CREATE TABLE tasks (
    tsk_id INT PRIMARY KEY AUTO_INCREMENT,
    tsk_name VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    start_date DATE,
    end_date DATE,
    due_date DATE,
    employee_id BIGINT,
    task_category_id INT,
    FOREIGN KEY (employee_id) REFERENCES employees(emp_id)
);

-- Create task_categories table
CREATE TABLE task_categories (
    cat_id INT PRIMARY KEY AUTO_INCREMENT,
    cat_name VARCHAR(255) NOT NULL
);


-- Insert sample employees
INSERT INTO employees (emp_name, gender, DOB) VALUES
    ('Labalibo', 'FEMALE', '1990-05-15'),
    ('Hamasa', 'MALE', '1985-07-20'),
    ('Hambola', 'MALE', '1992-11-25');


-- Insert sample task categories
INSERT INTO task_categories (cat_name) VALUES
('Development'),
('Testing'),
('Documentation');

-- Insert sample tasks
INSERT INTO tasks (tsk_name, description, start_date, end_date, due_date, employee_id, task_category_id) VALUES
('Implement Feature A', 'Develop the new feature for the app', '2025-01-01', '2025-01-10', '2025-01-15', 1, 1),
('Write Test Cases', 'Create test cases for Feature A', '2025-01-11', '2025-01-15', '2025-01-20', 2, 2),
('Prepare Documentation', 'Write user manual for the app', '2025-01-16', '2025-01-20', '2025-01-25', 3, 3);

