package com.qdjxd.wdth01.model;

public class InspectStatistics {
    private String inspectStaId;

    private String inspectAreaName;

    private String areaType;

    private Integer inspectNum;

    private Integer inspectPercent;

    private Integer inspectSort;

    private Boolean inspectEnable;

    public String getInspectStaId() {
        return inspectStaId;
    }

    public void setInspectStaId(String inspectStaId) {
        this.inspectStaId = inspectStaId == null ? null : inspectStaId.trim();
    }

    public String getInspectAreaName() {
        return inspectAreaName;
    }

    public void setInspectAreaName(String inspectAreaName) {
        this.inspectAreaName = inspectAreaName == null ? null : inspectAreaName.trim();
    }

    public String getAreaType() {
        return areaType;
    }

    public void setAreaType(String areaType) {
        this.areaType = areaType == null ? null : areaType.trim();
    }

    public Integer getInspectNum() {
        return inspectNum;
    }

    public void setInspectNum(Integer inspectNum) {
        this.inspectNum = inspectNum;
    }

    public Integer getInspectPercent() {
        return inspectPercent;
    }

    public void setInspectPercent(Integer inspectPercent) {
        this.inspectPercent = inspectPercent;
    }

    public Integer getInspectSort() {
        return inspectSort;
    }

    public void setInspectSort(Integer inspectSort) {
        this.inspectSort = inspectSort;
    }

    public Boolean getInspectEnable() {
        return inspectEnable;
    }

    public void setInspectEnable(Boolean inspectEnable) {
        this.inspectEnable = inspectEnable;
    }
}