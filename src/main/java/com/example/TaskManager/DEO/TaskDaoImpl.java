package com.example.TaskManager.DEO;
import com.example.TaskManager.Models.Task;
import com.example.TaskManager.mapper.TaskRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskDaoImpl implements TaskDao {
    private final JdbcTemplate jdbcTemplate;

    public TaskDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Task findById(int id) {
        String sql = "SELECT * FROM tasks WHERE tsk_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new TaskRowMapper());
    }

    public List<Task> findAll() {
        String sql = """
                SELECT
                    t.tsk_id, t.tsk_name, t.description, t.start_date, t.end_date, t.due_date,
                    e.emp_id, e.emp_name, e.gender, e.dob,
                    tc.cat_id, tc.cat_name
                FROM tasks t
                LEFT JOIN employees e ON t.employee_id = e.emp_id
                LEFT JOIN task_categories tc ON t.task_category_id = tc.cat_id
                
                """;
        return jdbcTemplate.query(sql, new TaskRowMapper());
    }

    public void save(Task task) {
        String sql = "INSERT INTO tasks (tsk_name, description, start_date, end_date, due_date, emp_id, catId) VALUES (?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, task.getTsk_name(), task.getDescription(), task.getStart_date(), task.getEnd_date(),
                task.getDue_date(), task.getEmployee().getEmp_id(), task.getTaskCategory().getCatId());
    }

    public void update(Task task) {
        String sql = "UPDATE tasks SET tsk_name = ?, description = ?, start_date = ?, end_date = ?, due_date = ?, emp_id = ?, catId = ? WHERE tsk_id = ?";
        jdbcTemplate.update(sql, task.getTsk_name(), task.getDescription(), task.getStart_date(), task.getEnd_date(),
                task.getDue_date(), task.getEmployee().getEmp_id(), task.getTaskCategory().getCatId(), task.getTsk_id());
    }

    public void delete(int id) {
        String sql = "DELETE FROM tasks WHERE tsk_id = ?";
        jdbcTemplate.update(sql, id);
    }
}

