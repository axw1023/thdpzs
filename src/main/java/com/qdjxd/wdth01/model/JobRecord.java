package com.qdjxd.wdth01.model;

public class JobRecord {
    private String jobRecordId;

    private String jobRecordName;

    private Integer jobRecordNum;

    private Integer jobRecordSort;

    private Boolean jobEnable;

    public String getJobRecordId() {
        return jobRecordId;
    }

    public void setJobRecordId(String jobRecordId) {
        this.jobRecordId = jobRecordId == null ? null : jobRecordId.trim();
    }

    public String getJobRecordName() {
        return jobRecordName;
    }

    public void setJobRecordName(String jobRecordName) {
        this.jobRecordName = jobRecordName == null ? null : jobRecordName.trim();
    }

    public Integer getJobRecordNum() {
        return jobRecordNum;
    }

    public void setJobRecordNum(Integer jobRecordNum) {
        this.jobRecordNum = jobRecordNum;
    }

    public Integer getJobRecordSort() {
        return jobRecordSort;
    }

    public void setJobRecordSort(Integer jobRecordSort) {
        this.jobRecordSort = jobRecordSort;
    }

    public Boolean getJobEnable() {
        return jobEnable;
    }

    public void setJobEnable(Boolean jobEnable) {
        this.jobEnable = jobEnable;
    }
}