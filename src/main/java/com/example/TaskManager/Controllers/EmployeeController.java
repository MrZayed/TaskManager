package com.example.TaskManager.Controllers;

import com.example.TaskManager.Models.*;
import com.example.TaskManager.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
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
        public void updateEmployee(@PathVariable Employee emp, @RequestBody Employee employee) {
        employee.setEmp_id(emp.getEmp_id());
        employeeService.update(emp);
    }

    @DeleteMapping("/{emp_id}")
    public void deleteEmployee(@PathVariable Long emp_id) {
        employeeService.delete(emp_id);
    }
}

