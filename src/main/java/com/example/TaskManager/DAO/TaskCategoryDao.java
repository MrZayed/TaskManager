package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.TaskCategory;

import java.util.List;

public interface TaskCategoryDao {
    TaskCategory findById(int id);
    List<TaskCategory> findAll();
    void save(TaskCategory taskCategory);
    void update(TaskCategory taskCategory);
    void delete(int id);
}
