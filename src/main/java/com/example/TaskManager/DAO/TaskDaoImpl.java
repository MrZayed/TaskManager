package com.example.TaskManager.DAO;

import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskDetailsDTO;
import com.example.TaskManager.mapper.TaskDetailsDTORowMapper;
import com.example.TaskManager.mapper.TaskMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class TaskDaoImpl implements TaskDao {
    private final JdbcTemplate jdbcTemplate;

    public TaskDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Task findById(int id) {
        String sql = "SELECT * FROM tasks WHERE tsk_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, new TaskMapper());
    }

    @Override
    public List<Task> findAll() {
        String sql = "SELECT * FROM tasks";
        return jdbcTemplate.query(sql, new TaskMapper());
    }


    @Override
    public List<TaskDetailsDTO> findAllDetails(String search, int offset, int limit) {
        String sql = """
        SELECT
            t.tsk_id, t.tsk_name, t.description, t.start_date, t.end_date, t.due_date,
            e.emp_id, e.emp_name, e.gender, e.dob,
            tc.cat_id, tc.cat_name
        FROM tasks t
        LEFT JOIN employees e ON t.employee_id = e.emp_id
        LEFT JOIN task_categories tc ON t.task_category_id = tc.cat_id
        WHERE (t.tsk_name LIKE ? OR e.emp_name LIKE ?)
        LIMIT ? OFFSET ?
    """;

        String searchPattern = "%" + (search != null ? search.trim() : "") + "%";

        return jdbcTemplate.query(
                sql,
                new TaskDetailsDTORowMapper(),
                searchPattern, searchPattern, limit, offset
        );
    }



    @Override
    public int countAllTasks(String search) {
        String sql = """
    SELECT COUNT(*)
    FROM tasks t
    LEFT JOIN employees e ON t.employee_id = e.emp_id
    WHERE t.tsk_name LIKE ? OR e.emp_name LIKE ?
    """;
        String searchPattern = "%" + (search == null ? "" : search) + "%"; // Use the search parameter

        return jdbcTemplate.queryForObject(sql, Integer.class, searchPattern, searchPattern);
    }





    @Override
    public void save(Task task) {
        String sql = "INSERT INTO tasks (tsk_name, description, start_date, end_date, due_date, employee_id, task_category_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, task.getTsk_name(), task.getDescription(), task.getStart_date(), task.getEnd_date(),
                task.getDue_date(), task.getEmployee_id(), task.getTask_category());
    }

    @Override
    public void update(Task task) {
        String sql = "UPDATE tasks SET tsk_name = ?, description = ?, start_date = ?, end_date = ?, due_date = ?, employee_id = ?, task_category_id = ? WHERE tsk_id = ?";
        jdbcTemplate.update(sql, task.getTsk_name(), task.getDescription(), task.getStart_date(), task.getEnd_date(),
                task.getDue_date(), task.getEmployee_id(), task.getTask_category(), task.getTsk_id());
    }

    @Override
    public void delete(int id) {
        String sql = "DELETE FROM tasks WHERE tsk_id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public TaskDetailsDTO findDetailsById(Long id) {
        String sql = """
        SELECT t.tsk_id, t.tsk_name, t.description, t.start_date, t.end_date, t.due_date,
               e.emp_id, e.emp_name, e.gender, e.dob,
               tc.cat_id, tc.cat_name
        FROM tasks t
        LEFT JOIN employees e ON t.employee_id = e.emp_id
        LEFT JOIN task_categories tc ON t.task_category_id = tc.cat_id
        WHERE t.tsk_id = ?""";
        return jdbcTemplate.queryForObject(sql, new TaskDetailsDTORowMapper(), id);
    }

    @Override
    public void updateDetails(TaskDetailsDTO taskDetailsDTO) {
        String sql = """
        UPDATE tasks
        SET tsk_name = ?, description = ?, start_date = ?, end_date = ?, due_date = ?,
            employee_id = ?, task_category_id = ?
        WHERE tsk_id = ?""";
        jdbcTemplate.update(sql,
                taskDetailsDTO.getTsk_name(),
                taskDetailsDTO.getDescription(),
                taskDetailsDTO.getStart_date(),
                taskDetailsDTO.getEnd_date(),
                taskDetailsDTO.getDue_date(),
                taskDetailsDTO.getEmp_id(),
                taskDetailsDTO.getCat_id(),
                taskDetailsDTO.getTsk_id());
    }
}