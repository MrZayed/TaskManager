package com.example.TaskManager.DEO;

import com.example.TaskManager.Models.TaskCategory;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TaskCategoryDao {
    TaskCategory findById(int id);
    List<TaskCategory> findAll();
    void save(TaskCategory taskCategory);
    void update(TaskCategory taskCategory);
    void delete(int id);
}
