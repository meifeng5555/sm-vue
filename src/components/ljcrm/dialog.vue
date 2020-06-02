<template>
    <el-dialog :visible.sync="dialogShow" width="30%" title="详情" @close="close">
        <el-form ref="form">
            <el-form-item v-for="(v, k) in form" :key="k" :label="v.name">
                <el-input v-model="v.val"></el-input>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'crmDialog',
    props: ['show', 'form'],
    data () {
        return {
            dialogShow: false
        }
    },
    watch: {
        show (newValue, oldValue) {
            this.dialogShow = newValue
        }
    },
    methods: {
        close () {
            this.$emit('closeDialog')
        }
    }
}
</script>

