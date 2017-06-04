import showJobs from './components/showJobs.vue';
import addJob from './components/addJob.vue';

export default [
	{
		path: '/',
		component: showJobs
	},
	{
		path: '/add',
		component: addJob
	}
]
