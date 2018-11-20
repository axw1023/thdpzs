package com.qdjxd.wdth01.model;

public class Warning {
    private String warningId;

    private String warningName;

    private Integer warningNum;

    private Boolean warningEnable;

    public String getWarningId() {
        return warningId;
    }

    public void setWarningId(String warningId) {
        this.warningId = warningId == null ? null : warningId.trim();
    }

    public String getWarningName() {
        return warningName;
    }

    public void setWarningName(String warningName) {
        this.warningName = warningName == null ? null : warningName.trim();
    }

    public Integer getWarningNum() {
        return warningNum;
    }

    public void setWarningNum(Integer warningNum) {
        this.warningNum = warningNum;
    }

    public Boolean getWarningEnable() {
        return warningEnable;
    }

    public void setWarningEnable(Boolean warningEnable) {
        this.warningEnable = warningEnable;
    }
}