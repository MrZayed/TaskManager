package com.example.TaskManager.Controllers;

import com.example.TaskManager.Models.TaskCategory;
import com.example.TaskManager.Services.TaskCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/TaskCategorie")
public class TaskCategoryController {

    private final TaskCategoryService taskCategoryService;

    @Autowired // Ensures Spring injects the TaskCategoryService bean
    public TaskCategoryController(TaskCategoryService taskCategoryService) {
        this.taskCategoryService = taskCategoryService;
    }

    @GetMapping
    public List<TaskCategory> getAllCategories() {
        return taskCategoryService.findCategories();
    }

    @GetMapping("/{cat_id}")
    public TaskCategory getCategory(@PathVariable Integer cat_id) {
        return taskCategoryService.findCategoryById(cat_id);
    }

    @PostMapping
    public void addCategory(@RequestBody TaskCategory taskCategory) {
        taskCategoryService.save(taskCategory);
    }

    @PutMapping("/{cat_id}")
    public void updateCategory(@PathVariable Integer cat_id, @RequestBody TaskCategory taskCategory) {
        taskCategory.setCatId(cat_id); // Set the category ID to the provided path variable
        taskCategoryService.update(taskCategory);
    }

    @DeleteMapping("/{cat_id}")
    public void deleteCategory(@PathVariable Integer cat_id) {
        taskCategoryService.delete(cat_id);
    }
}
