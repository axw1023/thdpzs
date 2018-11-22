package com.qdjxd.wdth01.model;

public class EquipmentComposition {
    private String equipComId;

    private String equipTypeName;

    private Integer equipNum;

    private Integer sort;

    private Boolean enable;

    public String getEquipComId() {
        return equipComId;
    }

    public void setEquipComId(String equipComId) {
        this.equipComId = equipComId == null ? null : equipComId.trim();
    }

    public String getEquipTypeName() {
        return equipTypeName;
    }

    public void setEquipTypeName(String equipTypeName) {
        this.equipTypeName = equipTypeName == null ? null : equipTypeName.trim();
    }

    public Integer getEquipNum() {
        return equipNum;
    }

    public void setEquipNum(Integer equipNum) {
        this.equipNum = equipNum;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public Boolean getEnable() {
        return enable;
    }

    public void setEnable(Boolean enable) {
        this.enable = enable;
    }
}
