package com.example.TaskManager.Service;

import com.example.TaskManager.DEO.TaskDao;
import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TaskService {
    private TaskDao taskDao ;
    @Autowired
    public TaskService(TaskDao taskDao) {
        this.taskDao = taskDao;
    }

    public List<Task> findTasks(){
        return taskDao.findAll();
    }

    public Task findTaskById(Integer id){
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
