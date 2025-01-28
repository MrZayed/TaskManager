package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.TaskCategory;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskCategoryRowMapper implements RowMapper<TaskCategory> {
    @Override
    public TaskCategory mapRow(ResultSet rs, int rowNum) throws SQLException {
        TaskCategory taskCategory = new TaskCategory();
        taskCategory.setCatId(rs.getInt("id"));
        taskCategory.setCatName(rs.getString("name"));
        return taskCategory;
    }
}
