package com.qdjxd.wdth01.common;

public class Column {
    private String field;
    private String title;
    private String align ;
    private String width ;
    private String valign;
    private boolean  visible = true;


    public Column( boolean visible, String title, String align, String width, String valign, String field ) {
        this.title = title;
        this.align = align;
        this.width = width;
        this.valign = valign;
        this.field = field;
        this.visible = visible;
    }

    public Column(String title, String field) {
        this.title = title;
        this.field = field;
    }

    public Column(String title, String field, boolean visible) {
        this.title = title;
        this.field = field;
        this.visible = visible;
    }

    public Column() {
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAlign() {
        return align;
    }

    public void setAlign(String align) {
        this.align = align;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getValign() {
        return valign;
    }

    public void setValign(String valign) {
        this.valign = valign;
    }

    public boolean isVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }
}
