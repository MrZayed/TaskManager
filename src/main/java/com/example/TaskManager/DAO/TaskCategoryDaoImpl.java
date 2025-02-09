package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.TaskCategory;
import com.example.TaskManager.mapper.TaskCategoryRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskCategoryDaoImpl implements TaskCategoryDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TaskCategoryDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public TaskCategory findById(int id) {
        String sql = "SELECT * FROM TASK_CATEGORIES WHERE CAT_ID = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new TaskCategoryRowMapper());
    }

    public List<TaskCategory> findAll() {
        String sql = "SELECT * FROM TASK_CATEGORIES";
        return jdbcTemplate.query(sql, new TaskCategoryRowMapper());
    }

    public void save(TaskCategory taskCategory) {
        String sql = "INSERT INTO TASK_CATEGORIES (CAT_NAME) VALUES (?)";
        jdbcTemplate.update(sql, taskCategory.getCatName()); // Save CAT_NAME, CAT_ID is auto-generated
    }

    public void update(TaskCategory taskCategory) {
        String sql = "UPDATE TASK_CATEGORIES SET CAT_NAME = ? WHERE CAT_ID = ?";
        jdbcTemplate.update(sql, taskCategory.getCatName(), taskCategory.getCatId());
    }

    public void delete(int id) {
        String sql = "DELETE FROM TASK_CATEGORIES WHERE CAT_ID = ?";
        jdbcTemplate.update(sql, id);
    }
}
