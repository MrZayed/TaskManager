package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.Employee;
import com.example.TaskManager.Models.Gender;
import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskCategory;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskRowMapper implements RowMapper<Task> {
    @Override
    public Task mapRow(ResultSet rs, int rowNum) throws SQLException {
        Task task = new Task();

        // Set basic fields
        task.setTsk_id(rs.getInt("tsk_id"));
        task.setTsk_name(rs.getString("tsk_name"));
        task.setDescription(rs.getString("description"));
        task.setStart_date(rs.getDate("start_date"));
        task.setEnd_date(rs.getDate("end_date"));
        task.setDue_date(rs.getDate("due_date"));

        // Set Employee details
        Employee employee = new Employee();
        employee.setEmp_id(rs.getLong("emp_id"));
        employee.setEmp_name(rs.getString("emp_name"));
        employee.setGender(Gender.valueOf(rs.getString("gender").toUpperCase()));
        employee.setDOB(rs.getDate("dob"));
        task.setEmployee(employee);

        // Set TaskCategory details
        TaskCategory taskCategory = new TaskCategory();
        taskCategory.setCatId(rs.getInt("cat_id"));
        taskCategory.setCatName(rs.getString("cat_name"));
        task.setTaskCategory(taskCategory);

        return task;
    }
}
