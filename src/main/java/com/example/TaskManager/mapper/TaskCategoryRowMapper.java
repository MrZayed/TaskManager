package com.example.TaskManager.mapper;

import com.example.TaskManager.Models.TaskCategory;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskCategoryRowMapper implements RowMapper<TaskCategory> {
    @Override
    public TaskCategory mapRow(ResultSet rs, int rowNum) throws SQLException {
        TaskCategory taskCategory = new TaskCategory();
        taskCategory.setCatId(rs.getInt("CAT_ID")); // Use CAT_ID here
        taskCategory.setCatName(rs.getString("CAT_NAME")); // Use CAT_NAME here
        return taskCategory;
    }
}
