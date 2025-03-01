package com.example.TaskManager.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;

public class Task {
    @JsonProperty("tsk_id")
    private Long tsk_id;

    @JsonProperty("tsk_name")
    private String tsk_name;

    @JsonProperty("description")
    private String description;

    @JsonProperty("start_date")
    private Date start_date;

    @JsonProperty("end_date")
    private Date end_date;

    @JsonProperty("due_date")
    private Date due_date;

    @JsonProperty("employee_id")
    private Long employee_id;

    @JsonProperty("task_category")
    private Integer task_category;

    // Getters and Setters
    public Long getTsk_id() {
        return tsk_id;
    }

    public void setTsk_id(Long tsk_id) {
        this.tsk_id = tsk_id;
    }

    public String getTsk_name() {
        return tsk_name;
    }

    public void setTsk_name(String tsk_name) {
        this.tsk_name = tsk_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee) {
        this.employee_id = employee;
    }

    public Integer getTask_category() {
        return task_category;
    }

    public void setTask_category(Integer task_category) {
        this.task_category = task_category;
    }
}