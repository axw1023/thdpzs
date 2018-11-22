package com.qdjxd.wdth01.common;

import java.util.LinkedList;

public class EchartsPieVo extends EchartsVo{

    private LinkedList<One> seriesData ;

    private Integer sum;

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public LinkedList<One> getSeriesData() {
        return seriesData;
    }

    public void setSeriesData(LinkedList<One> seriesData) {
        this.seriesData = seriesData;
    }

    public void addOne(String name ,Number value){
        if (this.seriesData==null){
            this.seriesData = new LinkedList<>();
        }
        this.seriesData.add(new One(name,value));
    }

    class One{
        private String name;
        private Number value;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Number getValue() {
            return value;
        }

        public void setValue(Number value) {
            this.value = value;
        }

        public One(String name, Number value) {
            this.name = name;
            this.value = value;
        }
    }
}
