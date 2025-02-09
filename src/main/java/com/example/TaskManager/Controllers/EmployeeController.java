package com.example.TaskManager.Controllers;

import com.example.TaskManager.Models.*;
import com.example.TaskManager.Services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/{emp_id}")
    public Employee getEmployee(@PathVariable Long emp_id) {
        return employeeService.findById(emp_id);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.findAll();
    }


    @PostMapping
    public void addEmployee(@RequestBody Employee employee) {
        employeeService.save(employee);
    }

    @PutMapping("/{emp_id}")
    public void updateEmployee(@PathVariable Long emp_id, @RequestBody Employee employee) {
        Employee existingEmployee = employeeService.findById(emp_id); // Get the existing employee
        if (existingEmployee != null) {
            // Update the fields
            existingEmployee.setEmp_name(employee.getEmp_name());
            existingEmployee.setGender(employee.getGender());
            existingEmployee.setDOB(employee.getDOB());

            // Save the updated employee
            employeeService.update(existingEmployee);
        }
    }


    @DeleteMapping("/{emp_id}")
    public void deleteEmployee(@PathVariable Long emp_id) {
        employeeService.delete(emp_id);
    }
}

