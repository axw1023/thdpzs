package com.qdjxd.wdth01.interceptor;


import com.qdjxd.wdth01.common.ConfigInfo;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(filterName = "loginFilter",urlPatterns = {"/system/*"})
public class UserLoginFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        Object attribute = request.getSession().getAttribute(ConfigInfo.SYSTEM_USER);
        if (attribute==null){
            response.sendRedirect("/login/index");
            return;
        }else {
            filterChain.doFilter(request,servletResponse);
        }
    }

    @Override
    public void destroy() {

    }
}
