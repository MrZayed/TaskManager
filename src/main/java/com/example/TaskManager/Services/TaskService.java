package com.example.TaskManager.Services;

import com.example.TaskManager.DAO.TaskDao;
import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskDetailsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    private final TaskDao taskDao;

    @Autowired
    public TaskService(TaskDao taskDao) {
        this.taskDao = taskDao;
    }


    public TaskDetailsDTO getTaskDetailsById(Long id) {
        return taskDao.findDetailsById(id);
    }

    public void updateTaskDetails(TaskDetailsDTO taskDetailsDTO) {
        taskDao.updateDetails(taskDetailsDTO);
    }


    public List<Task> findBasicTasks() {
        return taskDao.findAll();
    }

    public List<TaskDetailsDTO> findDetailedTasks(String search, int offset, int limit) {
        return taskDao.findAllDetails(search, offset, limit);  // Pass search, offset, limit
    }

    public int countAllTasks(String search) {
        return taskDao.countAllTasks(search); // Delegate the call to the DAO layer
    }



    public Task findTaskById(Integer id) {
        return taskDao.findById(id);
    }

    public void save(Task task) {
        taskDao.save(task);
    }

    public void update(Task task) {
        taskDao.update(task);
    }

    public void delete(Integer id) {
        taskDao.delete(id);
    }
}