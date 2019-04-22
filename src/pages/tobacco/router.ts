import Vue from 'vue';
import Router from 'vue-router';
import Task from './components/task.vue';
import Table from './components/table.vue';
import ProgressAudit from './components/progressAudit.vue';
import PersonInfo from './views/personInfo.vue';
import TaskItems from './views/taskItems.vue';
import TaskItemPage from './views/taskItemPage.vue';
import Home from './views/home.vue';
import router from '@/router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tobacco',
            component: Home,
            redirect: '/task',
            children: [
                {
                    path: '/task',
                    name: 'task',
                    component: Task
                },
                {
                    path: '/table',
                    name: 'table',
                    component: Table
                },
                {
                    path: '/progressAudit',
                    name: 'progressAudit',
                    component: ProgressAudit
                }
            ]
        },
        {
            path: '/personInfo',
            name: 'personInfo',
            component: PersonInfo
        },
        {
            path: '/taskItems', //’新增填报 展示填报历史‘页面
            name: 'taskItems',
            component: TaskItems
        },
        {
            path: '/taskItemPage',
            name: 'taskItemPage',
            component: TaskItemPage
        }
    ]
});
