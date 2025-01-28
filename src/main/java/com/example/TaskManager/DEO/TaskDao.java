package com.example.TaskManager.DEO;

import com.example.TaskManager.Models.Task;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
@Repository
public interface TaskDao {
    Task findById(int id);
    List<Task> findAll();
    void save(Task task);
    void update(Task task);
    void delete(int id);
}
