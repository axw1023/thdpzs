package com.qdjxd.wdth01.common;

import java.util.List;

abstract class BaseEchartsVo {

    protected String title;

    protected String subtitle;

    protected List<String> legendData;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public List<String> getLegendData() {
        return legendData;
    }

    public void setLegendData(List<String> legendData) {
        this.legendData = legendData;
    }
}
