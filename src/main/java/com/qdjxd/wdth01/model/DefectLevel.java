package com.qdjxd.wdth01.model;

public class DefectLevel {
    private String defectId;

    private String defectName;

    private Integer defectNum;

    private Integer defectSort;

    private Boolean defectEnable;

    public String getDefectId() {
        return defectId;
    }

    public void setDefectId(String defectId) {
        this.defectId = defectId == null ? null : defectId.trim();
    }

    public String getDefectName() {
        return defectName;
    }

    public void setDefectName(String defectName) {
        this.defectName = defectName == null ? null : defectName.trim();
    }

    public Integer getDefectNum() {
        return defectNum;
    }

    public void setDefectNum(Integer defectNum) {
        this.defectNum = defectNum;
    }

    public Integer getDefectSort() {
        return defectSort;
    }

    public void setDefectSort(Integer defectSort) {
        this.defectSort = defectSort;
    }

    public Boolean getDefectEnable() {
        return defectEnable;
    }

    public void setDefectEnable(Boolean defectEnable) {
        this.defectEnable = defectEnable;
    }
}