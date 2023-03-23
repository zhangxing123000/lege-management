import React, { useState } from 'react';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = () => {

    };

    const handleSubmit = () => {
        // 在此处添加提交表单的逻辑
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                用户名：
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                电子邮件地址：
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                密码：
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                确认密码：
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">注册</button>
        </form>
    );
}

export default RegisterPage
