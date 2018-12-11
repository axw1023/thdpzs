package com.qdjxd.wdth01.service;

import com.qdjxd.wdth01.model.User;

import javax.servlet.http.HttpServletRequest;

public interface LoginService {
    String login(User user, HttpServletRequest request);
}
