package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.Employee;

import java.util.List;

public interface EmployeeDao {
    Employee findById(Long id);
    List<Employee> findAll();
    void save(Employee employee);
    void update(Employee employee);

    void delete(Long id);
}

