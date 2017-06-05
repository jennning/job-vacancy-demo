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
                <div class="nav-indicator"></div>
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
        window.addEventListener('resize', this.updateIndicator);
        this.updateIndicator();
    },
    methods: {
        updateIndicator() {
            var nav = document.querySelector('.nav'),
                nav_rect = nav.getBoundingClientRect(),
                active_link = document.querySelector('.router-link-active'),
                active_rect = active_link.getBoundingClientRect(),
                indicator = document.querySelector('.nav-indicator'),
                indicator_rect = indicator.getBoundingClientRect();

            indicator.style.width = active_rect.width + 'px';
            indicator.style.left = active_rect.left - nav_rect.left + 'px';

            var width_diff = indicator_rect.width / active_rect.width,
                pos_diff = indicator_rect.left - active_rect.left;

            indicator.style.transform = 'scaleX('+ width_diff +') translateX('+ pos_diff +'px)';

            requestAnimationFrame(() => {
                indicator.classList.add('nav-indicator-animate');

                indicator.style.transform = '';
            });

            setTimeout(() => {
                indicator.classList.remove('nav-indicator-animate');
            }, 300);
        }
    },
    watch: {
        $route(to, from) {
            this.$nextTick(() => {
                this.updateIndicator();
            });
        }
    }
}
</script>
