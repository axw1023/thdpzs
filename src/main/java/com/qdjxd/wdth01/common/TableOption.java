package com.qdjxd.wdth01.common;

import java.util.LinkedList;
import java.util.List;
//
public class TableOption {
    private String tableName ;
    private String idColumn;
    private List<Column> columns;


    public String getIdColumn() {
        return idColumn;
    }

    public void setIdColumn(String idColumn) {
        this.idColumn = idColumn;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    public TableOption(){
    }

    public TableOption(String tableName){
        this.tableName = tableName;
        columns = new LinkedList<>();
    }

    public void addColumn(boolean visible, String title, String align, String width, String valign, String field){
        Column column = new Column(visible,title,align,width,valign,field);
        columns.add(column);
    }

}
