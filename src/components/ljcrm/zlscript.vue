<script>
var list = [
    {desc: null, time: null, class: 1, state: 1, name: 'bin_change_tsaleinfo_mail.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_check_sge_deal_quarter_bonus.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_account_tag.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_service_request.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_accountinfo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_deal_data_date.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_moni_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_risk_base.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongodb_sge_saler_yj_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_create_mongo_tj_sge_refcount_id.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_createorchange_table.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_delete_repeat_data_from_tjsgesalerperformance.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_export_diff_account_sid.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_export_sge_deal_vip.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_export_sge_more_tradeaccount.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_export_sge_rand_source_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_export_sge_source_userid_by_refcount.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_hw_sge_assign_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_hw_sge_export_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_hw_sge_import_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_lj_assign_cbas_account_20180124.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_lj_assign_cbas_account_20180327.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_lj_jnhhd_export_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_mysql_to_mongo_refcount_id.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_crm_telas_info_number_section.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_kt_to_redis.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_metal_blacktel.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_reward_gold_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_deal_detail.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_final_right.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_gold_detail.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_risk_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_repair_sge_source_queue.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_sge_auto_merge_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_sge_check_dealdata.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_sge_check_userid_tradeaccount.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_sge_make_account_risk.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_test_kafka.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_work_copy_table.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'bin_work_table_data_recove.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_activity_repair_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_agree_sge_violation.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_assembly_sendsms.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_assembly_sendsms_sge.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_dist_sge_account_2018.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_dist_sge_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_recycle_sge_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_auto_sendsms_for_sge_open_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_check_sge_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_client_export_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_create_taccountinfob_from_sgeaccountinfo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_saler_job_status_and_salary.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_accountinfo_for_app.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_accountinfo_for_server.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_account_tag_for_auth.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_account_userid_a.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_data_for_app_a.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_data_for_cbas_a.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_data_for_cbas_b.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_data_for_tgpt.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_source_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_export_sge_userid_for_app.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_get_rownum_metal.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_get_rownum_sge.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_account_circle.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_deal_detail.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_final_right.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_gold_detail.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_handle_sge_queue_activity.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_cbas_sge_account_logininfo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_cbas_sge_account_tag.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_data_from_ifind.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_sge_account_group.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_sge_account_tag_cbas_login.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_sge_account_tag_from_cbas_a.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_sge_moni_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_import_sge_source_account_group.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_insert_metal_blacktel.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_insert_sge_can_assigned_account_adviser.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_lj_export_activity_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_lj_handle_no_sign_user.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_lj_import_activity_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_pass_crm_blacktel_to_certification_center.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_pbx_call_static_fund.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_pbx_call_static_sge.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_pbx_unanswered_calling_to_fund.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_crm_homepage_target_data_to_ktserver.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_crm_yj_rank_data_to_cache.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_sge_homepage_grade_data_cache.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_tsaleinfo_to_cache.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_tsaleinfo_to_ktservice.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_put_tsaleinfo_to_shm_cache.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_account_userid_tradeno.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_deal_data_date_mongo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_deal_data_mongo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_deal_vip.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_last_month_champion.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_record_sge_risk_base_mongo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_repair_crm_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_repair_httpsqs_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_repair_mongodb_account_tag.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_repair_sge_t_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_rsync_pbx_data_to_fund.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_set_group_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_set_group_saleinfo.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_sge_auto_recycle_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_sge_make_account_risk.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_sge_map_userid_tradeaccount.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_sge_new_saler_performance.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_browse_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_pbx_calllog_info_fund.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_saler_job_status.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_accounttag_date.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_account_tel_area.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_deal_data_date_mongodb.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_deal_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_deal_work.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_hegui_kpi_data.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_pbx_calllog_info.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_performance_date.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_refcount_id.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_saler_performance_date.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_saler_performance.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_service_tel.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_source_account_a.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_source_account_old.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_source_account.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_source_account_temp.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_source.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_tj_sge_unanswered.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_appoint_account_with_dimission.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_missed_call_metal.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_saleinfo_si_ip_from_ktserver.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_sge_account_golden.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_sge_tel_as.php'},
    {desc: null, time: null, class: 1, state: 1, name: 'cron_update_tjsalerappdayinfo_sge.php'}
];
import crmDialog from '@/components/ljcrm/dialog'
export default {
    data: () => {
        return {
            list: list,
            orderk: 'name',
            ordert: -1,
            titles: {
                'desc': ['用途', 1],
                'name': ['名称', 1],
                'time': ['定时', 1],
                'class': ['分类', 1],
                'state': ['状态', 1]
            },
            classs: { 1: 'bin', 2: 'cron' },
            states: { 1: '有效', 2: '无效', 3: '单次', 4: '未配置' },
            height: 0,
            dialog: {
                form: new Array,
                show: false
            },
            loading: true
        }
    },
    components: {
      crmDialog  
    },
    created () {
        this.height = document.documentElement.clientHeight - 100
        this.loading = false
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
    <el-table v-loading="loading" border stripe highlight-current-row @row-dblclick="dblclick" :data="list" style="width:100%;" :height="height">
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
