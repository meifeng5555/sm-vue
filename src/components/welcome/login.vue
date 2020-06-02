<template>
    <div class="login">
        <el-form ref="loginForm" :rules="ruleForm" class="loginForm" action="" :model="loginForm">
            <h3 class="title">登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="Please Enter Your Account"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="loginForm.remeber">
                    记住我
                </el-checkbox>
            </el-form-item>
            <el-form-item style="text-align:center">
                <el-button type="primary" @click="registerForm('loginForm')" style="width:45%">Register</el-button>
                <el-button type="primary" @click="submitForm('loginForm')" style="width:45%">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            loginForm: {
                username: '',
                password: '',
                remeber: false
            },
            ruleForm: {
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 1, max: 6, message: '用户名在1-6位', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 18, message: '密码规定在6-18位', trigger: 'blur'}
                ],
            }
        }
    },
    mounted () {
        this.keyEvent()  
    },
    methods: {
        submitForm (formName) {
            let vm = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let loading = vm.showLoading()
                    vm.$api.post(
                        '/login',
                        {
                            username: vm.loginForm.username,
                            password: vm.loginForm.password,
                            remeber: vm.loginForm.remeber
                        }
                    ).then(function (response) {
                        console.dir(response)
                        if (response.data.err_code === -1) {
                            vm.$message.error(
                                response.data.err_msg
                            )
                        } else if (response.data.err_code === 0) {
                            // 存储登陆的用户名
                            vm.$store.commit('changeLoginUser', {
                                name: vm.loginForm.username
                            })

                            // 存储登陆的用户状态
                            vm.$store.commit('changeLoginStatus', {
                                loginStatus: 1
                            })

                            // 解绑OnkeyDown事件
                            document.onkeydown = ''
                        }
                    }).finally(function (f) {
                        vm.hideLoading(loading)
                    })
                } else {
                    console.log('error submit!!')
                    return false;
                }
            })
        },
        registerForm (formName) {
            let vm = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let loading = vm.showLoading()
                    vm.$api.post(
                        'register',
                        {
                            username: vm.loginForm.username,
                            password: vm.loginForm.password,
                            remeber: vm.loginForm.remeber
                        }
                    ).then(function (response) {
                        if (response.data.err_code == -1) {
                            vm.$message.warning(
                                response.data.err_msg
                            )
                        } else if (response.data.err_code === 0) {
                            vm.$message.success(
                                '注册成功，正在登陆'
                            )
                        }
                    }).finally(function (f) {
                        vm.hideLoading(loading)
                    })
                } else {
                    console.log('error Register!')
                    return false;
                }
            })
        },
        keyEvent () {
            let vm = this
            let path = vm.$route.path

            if (path == "/login") {
                document.onkeydown = function (e) {
                    let type = e.keyCode;

                    switch (type) {
                        case 13:
                            vm.submitForm('loginForm')
                            break
                    }
                } 
            }
        },
        showLoading () {
            let loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(255, 255, 255, 0.5)'
            })

            return loading
        },
        hideLoading (obj) {
            obj.close()
        }
    }
}
</script>

<style>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    background: url("https://bbs.qn.img-space.com/201811/9/4179f4abd4c91491c369a96619fa781c.jpg?imageView2/2/w/1800/q/90/ignore-error/1/") no-repeat;
    background-size:100% 100%;
}
.loginForm {
    width: 350px;
    margin: auto;
    padding: 35px 35px 15px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    opacity: 0.8;
    box-shadow: 0 0 25px #888888;
}
.loginForm .title {
    text-align: center;
    color: #505458;
}
</style>


