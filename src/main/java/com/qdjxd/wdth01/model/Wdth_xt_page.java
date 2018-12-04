package com.qdjxd.wdth01.model;

public class Wdth_xt_page {
    private Integer id;

    private String name;

    private String value;

    private Integer code;

    private Integer ifshow;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Integer getIfshow() {
        return ifshow;
    }

    public void setIfshow(Integer ifshow) {
        this.ifshow = ifshow;
    }
}