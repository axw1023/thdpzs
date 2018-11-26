package com.qdjxd.wdth01.model;

public class Wdth_tb_itjf {
    private Integer sheetid;

    private Double value;

    private String name;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public Double getNum() {
        return value;
    }

    public void setNum(Double value) {
        this.value = value;
    }

    public String getTypes() {
        return name;
    }

    public void setTypes(String name) {
        this.name = name == null ? null : name.trim();
    }
}