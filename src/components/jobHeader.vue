<template>
    <header class="header">
        <div class="container">
            <h1>{{ app_title }}</h1>
            <nav class="nav">
                <ul class="nav-links">
                    <li>
                        <router-link to="/" exact>Vacancy list</router-link>
                    </li>
                    <li>
                        <router-link to="/add" exact>Add a job vacancy</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    props: ['app_title'],
	data() {
		return {

		}
	},
    mounted() {
        
    },
    methods: {
        updateLink() {

        }
    }
}
</script>
