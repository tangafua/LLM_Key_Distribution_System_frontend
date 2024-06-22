<template>
    <div class="user-page">
        <el-card class="user-card">
            <el-form :model="form" ref="form" :rules="rules" label-width="80px">
                <h3 class="user-title">{{ showLogin ? '普通用户登录' : '普通用户注册' }}</h3>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item v-if="!showLogin" label="手机号" prop="phone">
                    <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item v-if="!showLogin" label="邮箱" prop="email">
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="showLogin ? onLogin() : onRegister()">
                    {{ showLogin ? '登录' : '注册' }}
                    </el-button>
                    <el-button type="text" @click="toggleForm">
                    {{ showLogin ? '没有账号? 去注册' : '已有账号? 去登录' }}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import router from '@/router';

export default {
    data() {
        return {
            showLogin: true,
            form: {
                username: '',
                password: '',
                phone: '',
                email: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]       
            }
        };
    },
    methods: {
        ...mapActions(['login']),
        onLogin() {
            axios.post('http://127.0.0.1:4523/m1/4663854-4314933-default/user_login', {
                username: this.form.username,
                password: this.form.password
            })
            .then((res) => {
                if(res.data.status === 1){
                    this.$message.success("登录成功");
                    this.login({
                        type: '普通用户',
                        username: this.form.username
                    });
                    router.push('user_notice');
                } else {
                    this.$message.error("登录失败");
                }    
            })
            .catch((error) => {
                console.log("登录错误", error);
                this.$message.error("登录错误");
            })
        },
        onRegister() {
            axios.post('http://127.0.0.1:4523/m1/4663854-4314933-default/user_register', {
                username: this.form.username,
                password: this.form.password,
                phone: this.form.phone,
                email: this.form.email
            })
            .then((res) => {
                if(res.data.status === 1){
                    this.$message.success("注册成功");
                    this.toggleForm();
                } else {
                    this.$message.error("注册失败");
                }    
            })
            .catch((error) => {
                console.log("注册错误", error);
                this.$message.error("注册错误");
            })
        },
        toggleForm() {
            this.showLogin = !this.showLogin;
            this.resetForm();
        },
        resetForm() {
            this.$refs.form.resetFields();
        }
    }
}
</script>

<style scoped>
.user-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ghostwhite;
}

.user-card {
    width: 400px;
    padding: 20px;
    background-color: #fff;
}

.user-title {
    text-align: center;
    margin-bottom: 20px;
}
</style>
