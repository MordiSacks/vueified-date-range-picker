import Vue from 'vue';
import VueifiedDateRangePicker from '../VueifiedDateRangePicker';
import dayjs from 'dayjs';

Vue.use(VueifiedDateRangePicker);

let app = new Vue({
    el: '#app',

    data: {
        p: [
            {
                label: 'Yesterday',
                dateRange: {
                    start: dayjs().subtract(1, 'day'),
                    end: dayjs().subtract(1, 'day'),
                },
            }
        ],
    },

    methods: {
        drs(dr) {
            alert(dr.string);
        },
    },
});