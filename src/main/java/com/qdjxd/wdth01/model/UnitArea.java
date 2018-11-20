package com.qdjxd.wdth01.model;

public class UnitArea {
    private String unitAreaId;

    private String unitAreaName;

    private Integer unitNum;

    private Integer unitSort;

    private Boolean unitEnable;

    public String getUnitAreaId() {
        return unitAreaId;
    }

    public void setUnitAreaId(String unitAreaId) {
        this.unitAreaId = unitAreaId == null ? null : unitAreaId.trim();
    }

    public String getUnitAreaName() {
        return unitAreaName;
    }

    public void setUnitAreaName(String unitAreaName) {
        this.unitAreaName = unitAreaName == null ? null : unitAreaName.trim();
    }

    public Integer getUnitNum() {
        return unitNum;
    }

    public void setUnitNum(Integer unitNum) {
        this.unitNum = unitNum;
    }

    public Integer getUnitSort() {
        return unitSort;
    }

    public void setUnitSort(Integer unitSort) {
        this.unitSort = unitSort;
    }

    public Boolean getUnitEnable() {
        return unitEnable;
    }

    public void setUnitEnable(Boolean unitEnable) {
        this.unitEnable = unitEnable;
    }
}