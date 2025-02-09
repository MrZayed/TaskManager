package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.Task;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskMapper implements RowMapper<Task> {
    @Override
    public Task mapRow(ResultSet rs, int rowNum) throws SQLException {
        Task task = new Task();
        task.setTsk_id(rs.getLong("tsk_id"));
        task.setTsk_name(rs.getString("tsk_name"));
        task.setDescription(rs.getString("description"));
        task.setStart_date(rs.getDate("start_date"));
        task.setEnd_date(rs.getDate("end_date"));
        task.setDue_date(rs.getDate("due_date"));
        return task;
    }
}