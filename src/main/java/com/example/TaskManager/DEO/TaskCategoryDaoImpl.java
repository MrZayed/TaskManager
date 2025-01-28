package com.example.TaskManager.DEO;

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
        String sql = "SELECT * FROM task_categories WHERE catId = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new TaskCategoryRowMapper());
    }

    public List<TaskCategory> findAll() {
        String sql = "SELECT * FROM task_categories";
        return jdbcTemplate.query(sql, new TaskCategoryRowMapper());
    }

    public void save(TaskCategory taskCategory) {
        String sql = "INSERT INTO task_categories (catName) VALUES (?)";
        jdbcTemplate.update(sql, taskCategory.getCatName());
    }

    public void update(TaskCategory taskCategory) {
        String sql = "UPDATE task_categories SET catName = ? WHERE catId = ?";
        jdbcTemplate.update(sql, taskCategory.getCatName(), taskCategory.getCatId());
    }

    public void delete(int id) {
        String sql = "DELETE FROM task_categories WHERE catId = ?";
        jdbcTemplate.update(sql, id);
    }
}


