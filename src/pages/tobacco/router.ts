import Vue from 'vue';
import Router from 'vue-router';
import Task from './views/task.vue';
import Table from './views/table.vue';
import ProgressAudit from './views/progressAudit.vue';
import PersonInfo from './views/personInfo.vue';
import TaskItems from './views/taskItems.vue';
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
            path: '/taskItems',
            name: 'taskItems',
            component: TaskItems
        }
    ]
});
