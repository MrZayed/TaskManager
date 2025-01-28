package com.example.TaskManager.Service;

import com.example.TaskManager.DEO.EmployeeDao;
import com.example.TaskManager.Models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service  // Make sure EmployeeService is a Spring-managed service
public class EmployeeService {

    private final EmployeeDao employeeDao;

    @Autowired  // This will inject the EmployeeDaoImpl (which implements EmployeeDao)
    public EmployeeService(EmployeeDao employeeDao) {
        this.employeeDao = employeeDao;
    }

    public List<Employee> findAll() {
        return employeeDao.findAll();
    }

    public Employee findById(Long id) {
        return employeeDao.findById(id);
    }

    public void save(Employee employee) {
        employeeDao.save(employee);
    }

    public void update(Employee employee) {
        employeeDao.update(employee);
    }

    public void delete(Long id) {
        employeeDao.delete(id);
    }
}
