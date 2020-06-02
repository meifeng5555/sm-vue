<script>
export default {
    data: () => {
        return {
            list: [
                {
                    'title': '猎金CRM任务',
                    'img': './static/task.jpg',
                    'href': '/task',
                    'remark': '猎金CRM任务整理'
                },
                {
                    'title': '猎金CRM脚本',
                    'img': './static/script.jpg',
                    'href': '/script',
                    'remark': '猎金CRM脚本列表'
                },
                {
                    'title': '猎金CRM脚本整理',
                    'img': './static/zlscript.jpg',
                    'href': '/zlscript',
                    'remark': '猎金CRM脚本整理列表'
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <div v-for="(val, key) in list"
            v-bind:key="key" 
            class="card" 
            style="width: 18rem; display: inline-block; margin: 0 10px 10px 0;">
            <img class="card-img-top" v-bind:src="val.img">
            <div class="card-body">
                <p class="card-text">{{ val.remark }}</p>
                <router-link v-bind:to="val.href" class="btn btn-primary">{{ val.title }}</router-link>
            </div>
        </div>
    </div>
</template>
