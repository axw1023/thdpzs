package com.qdjxd.wdth01.model;

public class wdth_erp_Hkzssl {
    private Integer sheetid;

    private double num;

    private double day;

    private double mou;



    private String name;

    public Integer getSheetid() {
        return sheetid;
    }

    public void setSheetid(Integer sheetid) {
        this.sheetid = sheetid;
    }

    public double getNum() {
        return num;
    }

    public void setNum(double num) {
        this.num = num;
    }

    public double getDay() {
        return day;
    }

    public void setDay(double day) {
        this.day = day;
    }

    public double getMou() {
        return mou;
    }

    public void setMou(double mou) {
        this.mou = mou;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }
}