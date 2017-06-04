<template>
    <div>
        <app-header :app_title="app_title"></app-header>
        <router-view></router-view>
        <!-- <show-jobs :jobs="jobs"></show-jobs>
        <add-job @job-add="addJobToList" :jobs="jobs"></add-job> -->
    </div>
</template>

<script>
import jobHeader from './components/jobHeader.vue';
import addJob from './components/addJob.vue';
import showJobs from './components/showJobs.vue';

export default {
    data() {
        return {
            'app_title': 'Job Vacancy'
        }
    },
    components: {
      'app-header': jobHeader,
      'add-job': addJob,
      'show-jobs': showJobs
    }
}
</script>
<style lang="scss">
@import "assets/bootstrap/_bootstrap.scss";
@import "assets/css/_main.scss";
</style>
