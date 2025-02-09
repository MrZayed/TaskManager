package com.example.TaskManager.Models;

import java.util.Date;

public class TaskDetailsDTO {
    private Long tsk_id;
    private String tsk_name;
    private String description;
    private Date start_date;
    private Date end_date;
    private Date due_date;
    private Long emp_id;
    private String emp_name;
    private String gender;
    private Date dob;
    private Integer cat_id;
    private String cat_name;

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

    public Long getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(Long emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_name() {
        return emp_name;
    }

    public void setEmp_name(String emp_name) {
        this.emp_name = emp_name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Integer getCat_id() {
        return cat_id;
    }

    public void setCat_id(Integer cat_id) {
        this.cat_id = cat_id;
    }

    public String getCat_name() {
        return cat_name;
    }

    public void setCat_name(String cat_name) {
        this.cat_name = cat_name;
    }
}