package com.qdjxd.wdth01.model;

public class AiFactroy {
    private String aiFactroyId;

    private String aiFactroyText;

    private String textType;

    private String textTypeExplain;

    private Integer textSort;

    private Boolean aiEnable;

    public String getAiFactroyId() {
        return aiFactroyId;
    }

    public void setAiFactroyId(String aiFactroyId) {
        this.aiFactroyId = aiFactroyId == null ? null : aiFactroyId.trim();
    }

    public String getAiFactroyText() {
        return aiFactroyText;
    }

    public void setAiFactroyText(String aiFactroyText) {
        this.aiFactroyText = aiFactroyText == null ? null : aiFactroyText.trim();
    }

    public String getTextType() {
        return textType;
    }

    public void setTextType(String textType) {
        this.textType = textType == null ? null : textType.trim();
    }

    public String getTextTypeExplain() {
        return textTypeExplain;
    }

    public void setTextTypeExplain(String textTypeExplain) {
        this.textTypeExplain = textTypeExplain == null ? null : textTypeExplain.trim();
    }

    public Integer getTextSort() {
        return textSort;
    }

    public void setTextSort(Integer textSort) {
        this.textSort = textSort;
    }

    public Boolean getAiEnable() {
        return aiEnable;
    }

    public void setAiEnable(Boolean aiEnable) {
        this.aiEnable = aiEnable;
    }
}