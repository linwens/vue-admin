<template>
    <div id="Admin_index">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="m-userPad">
                    <el-row type="flex" align="middle">
                        <el-col :span="12" class="u-avator" :style="avatorBg"></el-col>
                        <el-col :span="12" class="u-nickname">
                            <p>{{nickName}}</p>
                            <span>超级管理员</span>
                        </el-col>
                    </el-row>
                    <el-row class="u-loginInfo">
                        <el-col>
                            <p>登录IP：{{ipInfo.ip}}</p>
                            <p>登录地址：{{ipInfo.addr}}</p>
                        </el-col>
                    </el-row>
                    <el-row type="flex" align="middle">
                        <el-col :span="8">
                            隐藏/显示侧边栏：
                        </el-col>
                        <el-col :span="4">
                            <el-switch
                                v-model="sidebarState"
                                @change="toggleSidebar"
                            ></el-switch>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="16"></el-col>
        </el-row>
    </div>
</template>
<script>
    //import '@/assets/........' //引入less
    export default{
        name:'Admin_index',
        data: function(){
            return {
                userType:this.$store.state.user.type,
                avatorBg:{
                    backgroundImage:''
                },
                sidebarState:!this.$store.state.theme.sideBarCol,
                ipInfo:{//returnCitySN这个变量直接写在index.html上，请求https://pv.sohu.com/cityjson?ie=utf-8获得
                    ip:returnCitySN.cip?returnCitySN.cip:'未获取',
                    addr:returnCitySN.cname?returnCitySN.cname:'未获取',
                }
            }
        },
        created(){
            this.avatorBg.backgroundImage = 'url('+this.avatorPic+')';//created里给头像背景图设置style样式
        },
        computed:{
            nickName(){
              return 'mc';
            },
            avatorPic(){
              return 'http://otvt0q8hg.bkt.clouddn.com/zoro.jpg';
            }
        },
        methods:{
            toggleSidebar (val){//参数就是新值
                //参考NavMenu导航菜单
                this.$store.dispatch('BAR_SWITCH');
            },
        }
    }
</script>
<style lang="less">
    #Admin_index{
        .el-row{
            margin-bottom: 20px;
        }
        .m-userPad{
            height: 422px;
            .u-avator{
                width: 150px;
                height: 150px;
                border-radius: 150px;
                overflow: hidden;
                text-align: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            .u-nickname{
                margin-left: 20px;
                p{
                    font-size: 30px;
                    color: #303133;  
                }
                span{
                    font-size: 12px;
                    color: #909399;
                }
            }
            .u-loginInfo{
                padding-top: 10px;
                border-top: 2px solid #DCDFE6;
                p{
                    color: #909399;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
        .m-statistics{
            overflow: hidden;
            height: 130px;
            i.iconfont{
                position: relative;
                left: -20px;
                top: -20px;
                width: 130px;
                height: 130px;
                line-height: 130px;
                float: left;
                text-align: center;
                font-size: 50px;
                color: #fff;
            }
            i.iconfont.icon-wenzhangliebiaoxiangqing{
                background: #1E90FF;
            }
            i.iconfont.icon-daiqueren{
                background: #FF4500;
            }
            i.iconfont.icon-fangkeshu{
                background: #02D902;
            }
            div.u-count{
                float: left;
                p{
                    line-height: 56px;
                    font-size: 30px;
                    font-weight: bold;
                    color: #606266;
                }
                span{
                    font-size: 16px;
                    color: #C0C4CC;
                }
            }
        }
        .m-progress{
            height: 270px;
            h2{
                font-size: 20px;
                margin-bottom: 20px;
            }
            h3{
                font-size: 16px;
                color: #909399;
                margin-bottom: 10px;
            }
            .m-circle-box{
                text-align: center;
            }
        }
        .m-progress-detail{
            height: 500px;
            h2{
                font-size: 20px;
                margin-bottom: 20px;
            }
            .u-steps{
                margin-left: 20px;
            }
        }
        .m-drag{
            min-height: 300px;
            margin-top: -250px;
            h2{
                font-size: 20px;
                margin-bottom: 20px;
            }
            .m-dragZone{
                width: 100%;
                min-height: 100px;
                background-color: #eee;
            }
            .u-dragItem{
                width: 90%;
                height: 80px;
                padding: 10px 10px 10px 20px;
                margin: 10px auto;
                font-size: 14px;
                color: #909399;
                background-color: #fff;
                border-radius: 5px;
            }
        }
    }
</style>