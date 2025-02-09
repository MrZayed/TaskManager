package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.Employee;
import com.example.TaskManager.Models.Gender;
import com.example.TaskManager.mapper.EmployeeRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EmployeeDaoImpl implements EmployeeDao { // Implements the EmployeeDao interface

    private final JdbcTemplate jdbcTemplate;

    // Constructor injection for JdbcTemplate
    public EmployeeDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Employee findById(Long id) {
        String sql = "SELECT * FROM employees WHERE emp_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new EmployeeRowMapper());
    }

    @Override
    public List<Employee> findAll() {
        String sql = "SELECT * FROM employees";
        return jdbcTemplate.query(sql, new EmployeeRowMapper());
    }

    @Override
    public void save(Employee employee) {
        String sql = "INSERT INTO employees (emp_name,gender,DOB) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, employee.getEmp_name(),employee.getGender().name(), employee.getDOB());
    }


    @Override
    public void update(Employee employee) {
        String sql = "UPDATE employees SET emp_name = ?, gender = ?, DOB = ? WHERE emp_id = ?";
        jdbcTemplate.update(sql, employee.getEmp_name(), employee.getGender().toString(), employee.getDOB(), employee.getEmp_id());
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM employees WHERE emp_id = ?";
        jdbcTemplate.update(sql, id);
    }
}
