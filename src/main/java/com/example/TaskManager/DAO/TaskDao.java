package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskDetailsDTO;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskDao {

    Task findById(int id);
    List<Task> findAll();

    // Updated to support pagination and search
    List<TaskDetailsDTO> findAllDetails(String search, int offset, int limit);

    void save(Task task);
    void update(Task task);
    void delete(int id);

    TaskDetailsDTO findDetailsById(Long id);
    void updateDetails(TaskDetailsDTO taskDetailsDTO);

    // New method to get total count for pagination with search filter
    int countAllTasks(String search);
}
