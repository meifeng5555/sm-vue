<script>
import crmDialog from '@/components/ljcrm/dialog'
export default {
    data: () => {
        return {
            list: [
                {
                    'name': 'cron_import_sge_moni_deal_data.php',
                    'desc': '猎金模拟交易大赛数据导入',
                    'time': '5 19 * * *',
                    'class': 1,
                    'state': 2
                },
                {
                    'name': 'cron_import_sge_moni_deal_data.php',
                    'desc': '猎金模拟交易大赛数据更新',
                    'time': '*/30 * * * *',
                    'class': 1,
                    'state': 2
                },
                {
                    'name': 'cron_import_cbas_sge_account_logininfo.php',
                    'desc': '猎金CRM导入客户APP登录信息数据',
                    'time': '*/10 * * * *',
                    'class': 1,
                    'state': 1
                },
                {
                    'name': 'cron_import_sge_account_tag_from_cbas_a.php',
                    'desc': '猎金从CBAS导入客户标签数据',
                    'time': '0 20 * * *',
                    'class': 1,
                    'state': 1
                },
                {
                    'name': 'cron_update_sge_account_golden.php',
                    'desc': '猎金客户出入金统计脚本',
                    'time': '0 2 * * *',
                    'class': 1,
                    'state': 1
                }
            ],
            orderk: 'name',
            ordert: -1,
            titles: {
                'desc': ['用途', 1],
                'name': ['名称', 1],
                'time': ['定时', 1],
                'class': ['分类', 1],
                'state': ['状态', 1]
            },
            states: { 1: '有效', 2: '无效', 3: '单次', 4: '未配置' },
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
    <el-table border stripe highlight-current-row @row-dblclick="dblclick" :data="list" style="width:100%;" :height="height">
        <el-table-column sortable fixed v-for="(v, k) in titles" :key="k" :prop="k" :label="v[0]">
            <template slot-scope="scope">
                <span v-if="k == 'state'">{{states[scope.row[k]]}}</span>
                <span v-else>{{scope.row[k]}}</span>
            </template>
        </el-table-column>    
    </el-table>

    <crmDialog :show="dialog.show" :form="dialog.form" @closeDialog="closeDialog"></crmDialog>
</div>    
</template>
