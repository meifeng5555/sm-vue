<script>
import crmDialog from '@/components/ljcrm/dialog'
export default {
    data: () => {
        return {
            list: [
                {
                    'state': 3,
                    'title': '猎金CRM销售业绩奖励资料错误',
                    'timeW': '2018-10-10',
                    'timeF': '2018-10-10',
                    'hour': '1d',
                    'need': 'BUG',
                    'jira': 'IMS-3058',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM销售业绩奖励资料错误'
                },
                {
                    'state': 3,
                    'title': '猎金CRM活动开户统计优化',
                    'timeW': '2018-10-10',
                    'timeF': '2018-10-10',
                    'hour': '2d',
                    'need': '李纯鹏',
                    'jira': 'IMS-3059',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM活动开户统计优化'
                },
                {
                    'state': 3,
                    'title': '猎金模拟黄金交易大赛数据导入',
                    'timeW': '2018-10-17',
                    'timeF': '2018-10-17',
                    'hour': '3d',
                    'need': '吴越',
                    'jira': 'IMS-3082',
                    'worker': '梅锦峰',
                    'remark': '猎金模拟黄金交易大赛数据导入'
                },
                {
                    'state': 2,
                    'title': '猎金实盘大赛活动',
                    'timeW': '2018-10-24',
                    'timeF': '2018-10-24',
                    'hour': '3d',
                    'need': '李纯鹏',
                    'jira': 'IMS-3103',
                    'worker': '梅锦峰',
                    'remark': '猎金实盘大赛活动'
                },
                {
                    'state': 3,
                    'title': '猎金电话数据统计新增统计项',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '3d',
                    'need': '廖仁',
                    'jira': 'IMS-3113',
                    'worker': '梅锦峰',
                    'remark': '猎金电话数据统计新增统计项'
                },
                {
                    'state': 3,
                    'title': '猎金CRM客户贡献值统计调整',
                    'timeW': '2018-10-17',
                    'timeF': '2018-10-17',
                    'hour': '1d',
                    'need': '廖仁',
                    'jira': 'IMS-3102',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM客户贡献值统计调整'
                },
                {
                    'state': 3,
                    'title': '猎金CRM销售自动分发资料查询功能优化',
                    'timeW': '2018-10-17',
                    'timeF': '2018-10-17',
                    'hour': '3d',
                    'need': '廖仁',
                    'jira': 'IMS-3083',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM销售自动分发资料查询功能优化'
                },
                {
                    'state': 3,
                    'title': '猎金涨停基因活动',
                    'timeW': '2018-10-17',
                    'timeF': '2018-10-17',
                    'hour': '3d',
                    'need': '李纯鹏',
                    'jira': 'IMS-3105',
                    'worker': '汪新星',
                    'remark': '猎金涨停基因活动'
                },
                {
                    'state': 3,
                    'title': '猎金自主开户一期',
                    'timeW': '2018-10-17',
                    'timeF': '2018-10-17',
                    'hour': '2d',
                    'need': '廖仁',
                    'jira': 'IMS-3081',
                    'worker': '汪新星',
                    'remark': '猎金自主开户一期'
                },
                {
                    'state': 3,
                    'title': '猎金自主开户二期',
                    'timeW': '2018-10-24',
                    'timeF': '2018-10-24',
                    'hour': '3d',
                    'need': '程嘉嘉',
                    'jira': 'IMS-3112',
                    'worker': '汪新星',
                    'remark': '猎金自主开户二期'
                },
                {
                    'state': 3,
                    'title': '猎金CRM导入数据校验',
                    'timeW': '2018-10-24',
                    'timeF': '2018-10-24',
                    'hour': '2d',
                    'need': '系统',
                    'jira': 'IMS-3104',
                    'worker': '汪新星',
                    'remark': '猎金CRM导入数据校验'
                },
                {
                    'state': 3,
                    'title': '猎金CRM导入数据文件备份',
                    'timeW': '2018-10-24',
                    'timeF': '2018-10-24',
                    'hour': '3d',
                    'need': '系统',
                    'jira': 'IMS-3089',
                    'worker': '汪新星',
                    'remark': '猎金CRM导入数据文件备份'
                },
                {
                    'state': 3,
                    'title': '猎金CRM出入金查询条件优化',
                    'timeW': '2018-10-10',
                    'timeF': '2018-10-10',
                    'hour': '1d',
                    'need': '廖仁',
                    'jira': 'IMS-3060',
                    'worker': '汪新星',
                    'remark': '猎金CRM出入金查询条件优化'
                },
                {
                    'state': 3,
                    'title': '猎金CRM销售业绩合计页面贡献值明细增加排序功能',
                    'timeW': '2018-10-10',
                    'timeF': '2018-10-10',
                    'hour': '2d',
                    'need': '廖仁',
                    'jira': 'IMS-3061',
                    'worker': '汪新星',
                    'remark': '猎金CRM销售业绩合计页面贡献值明细增加排序功能'
                },
                {
                    'state': 3,
                    'title': '猎金CRM销售预分发客户净入金奖励详细客户显示错误',
                    'timeW': '2018-10-18',
                    'timeF': '2018-10-18',
                    'hour': '0.5d',
                    'need': 'BUG',
                    'jira': 'IMS-3114',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM销售预分发客户净入金奖励详细客户显示错误'
                },
                {
                    'state': 3,
                    'title': '猎金CRM客户开户平台标签完善',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '1d',
                    'need': '程嘉嘉',
                    'jira': 'IMS-3122',
                    'worker': '汪新星',
                    'remark': '猎金CRM客户开户平台标签完善'
                },
                {
                    'state': 3,
                    'title': '猎金CRM客户资料查询页面资料来源条件优化',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '2d',
                    'need': '程嘉嘉',
                    'jira': 'IMS-3118',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM客户资料查询页面资料来源条件优化'
                },
                {
                    'state': 3,
                    'title': '猎金CRM前端查询条件配置化生成',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '3d',
                    'need': '系统',
                    'jira': 'IMS-3123',
                    'worker': '梅锦峰',
                    'remark': '猎金CRM前端查询条件配置化生成'
                },
                {
                    'state': 3,
                    'title': '猎金自主开户三期',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '3d',
                    'need': '程嘉嘉',
                    'worker': '汪新星',
                    'remark': '猎金自主开户三期'
                },
                {
                    'state': 3,
                    'title': '猎金CRM销售晋级功能数据展示问题修复',
                    'timeW': '2018-10-31',
                    'timeF': '2018-10-31',
                    'hour': '1d',
                    'need': '系统',
                    'worker': '汪新星',
                    'remark': '猎金CRM销售晋级功能数据展示问题修复'
                }
            ],
            orderk: 'title',
            ordert: -1,
            titles: {
                'title': ['任务标题', 1],
                'state': ['状态', 1],
                'timeW': ['计划完成时间', 1],
                'timeF': ['计划发布时间', 1],
                'need': ['需求方', 1],
                'hour': ['预估工时', 1],
                'jira': ['任务编号', 1],
                'worker': ['开发负责人', 1],
                'remark': ['需求相关说明', 1]
            },
            states: { 1: '未安排', 2: '已安排', 3: '已发布' },
            height: 0,
            dialog: {
                form: new Array,
                show: false
            }
        }
    },
    components: {
        crmDialog  
    },
    created () {
        this.height = document.documentElement.clientHeight - 100
    },
    methods: {
        dblclick (row, e) {
            let vm = this
            vm.dialog = Object.assign(
                {},
                vm.dialog,
                {
                    form: new Array,
                    show: false
                }
            )

            Object.keys(row).forEach(k => {
                vm.dialog.form.push({
                    name: vm.titles[k][0],
                    val: row[k]
                })
            })

            vm.dialog.show = true
        },
        closeDialog () {
            this.dialog.show = false
        }
    }
}
</script>

<template>
<div>
    <el-table border stripe highlight-current-row @row-dblclick="dblclick" :data="list" style="width:100%" :height="height">
        <el-table-column sortable fixed v-for="(v, k) in titles" :key="k" :prop="k" :label="v[0]">
            <template slot-scope="scope">
                <span v-if="k == 'state'">{{states[scope.row.state]}}</span>
                <span v-else>{{scope.row[k]}}</span>
            </template>
        </el-table-column>    
    </el-table>

    <crmDialog :show="dialog.show" :form="dialog.form" @closeDialog="closeDialog"></crmDialog>
</div>
</template>
