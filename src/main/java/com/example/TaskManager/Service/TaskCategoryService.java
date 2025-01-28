package com.example.TaskManager.Service;

import com.example.TaskManager.DEO.TaskCategoryDao;
import com.example.TaskManager.Models.Employee;
import com.example.TaskManager.Models.TaskCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskCategoryService {
    private final TaskCategoryDao taskCategoryDao;

    @Autowired
    public TaskCategoryService(TaskCategoryDao taskCategoryDao) {
        this.taskCategoryDao = taskCategoryDao;
    }

    public List <TaskCategory> findCategories(){
        return taskCategoryDao.findAll();
    }

    public TaskCategory findCategoryById(Integer id){
        return taskCategoryDao.findById(id);
    }

    public void save(TaskCategory taskCategory) {
        taskCategoryDao.save(taskCategory);
    }

    public void update(TaskCategory taskCategory) {
        taskCategoryDao.update(taskCategory);
    }

    public void delete(Integer id) {
        taskCategoryDao.delete(id);
    }
}
