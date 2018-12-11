package com.qdjxd.wdth01.service.impl;

import com.qdjxd.wdth01.common.ConfigInfo;
import com.qdjxd.wdth01.dao.SystemMapper;
import com.qdjxd.wdth01.model.User;
import com.qdjxd.wdth01.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private SystemMapper systemMapper ;

    @Override
    public String login(User user, HttpServletRequest request) {
        User login = systemMapper.login(user);
        if (login == null) {
            request.getSession().setAttribute("msg","密码或账户名不对");
            return "redirect:/login/index";
        }
        request.getSession().removeAttribute("msg");
        request.getSession().setAttribute(ConfigInfo.SYSTEM_USER,login);
        return "redirect:/system/index";
    }
}
