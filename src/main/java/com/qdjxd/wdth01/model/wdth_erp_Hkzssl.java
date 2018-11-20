package com.qdjxd.wdth01.model;

public class wdth_erp_Hkzssl {
    private Integer sheetid;

    private Integer num;

    private Integer day;

    private Integer mou;

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getMou() {
        return mou;
    }

    public void setMou(Integer mou) {
        this.mou = mou;
    }

    private String name;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }
}