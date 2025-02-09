package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.Employee;
import com.example.TaskManager.Models.Gender;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class EmployeeRowMapper implements RowMapper<Employee> {
    @Override
    public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
        Employee employee = new Employee();

        // Map emp_id
        employee.setEmp_id(rs.getLong("emp_id"));

        // Map emp_name
        employee.setEmp_name(rs.getString("emp_name"));

        // Map gender
        String genderString = rs.getString("gender");

        if (genderString != null) {
            employee.setGender(Gender.valueOf(genderString.toUpperCase()));
        } else {
            employee.setGender(null);
        }


        // Map DOB (Date of Birth)
        employee.setDOB(rs.getDate("DOB"));

        return employee;
    }
}

