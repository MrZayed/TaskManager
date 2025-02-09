package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.TaskDetailsDTO;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskDetailsDTORowMapper implements RowMapper<TaskDetailsDTO> {
    @Override
    public TaskDetailsDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        TaskDetailsDTO dto = new TaskDetailsDTO();

        dto.setTsk_id(rs.getLong("tsk_id"));
        dto.setTsk_name(rs.getString("tsk_name"));
        dto.setDescription(rs.getString("description"));
        dto.setStart_date(rs.getDate("start_date"));
        dto.setEnd_date(rs.getDate("end_date"));
        dto.setDue_date(rs.getDate("due_date"));

        // Employee details
        dto.setEmp_id(rs.getLong("emp_id"));
        dto.setEmp_name(rs.getString("emp_name"));
        dto.setGender(rs.getString("gender"));
        dto.setDob(rs.getDate("dob"));

        // Task category details
        dto.setCat_id(rs.getInt("cat_id"));
        dto.setCat_name(rs.getString("cat_name"));

        return dto;
    }
}