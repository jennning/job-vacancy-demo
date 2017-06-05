<template>
    <main id="add_job" class="main-container">
        <div class="toast-message">
            <p>Job added successfully!</p>
        </div>
		<form id="add_job_form" class="">
			<div class="container">
				<div class="add-form row">
					<div class="col-md-6 col-xs-12 add-form__container">
						<h3 class="form__title">Contact information</h3>
						<div class="form-item">
							<div class="row">
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="contact_first_name">First name</label>
										<input type="text" class="form-control" id="contact_first_name" name="contact_first_name" v-model="job.contact.name.first" maxlength="30">
                                    </div>
								</div>
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="contact_last_name">Last name</label>
										<input type="text" class="form-control" id="contact_last_name" name="contact_last_name" v-model="job.contact.name.last" maxlength="30">
									</div>
								</div>
							</div>
						</div>
						<div class="form-item">
							<div class="form-item__input form-group">
								<label class="form-item__required" for="contact_company">Company</label>
								<input type="text" class="form-control" id="contact_company" name="contact_company" v-model="job.contact.company" v-validate="'required'" data-vv-as="company">
                                <p class="form-item__error" v-show="errors.has('contact_company')">{{ errors.first('contact_company') }}</p>
							</div>
						</div>
						<div class="form-item">
							<div class="form-item__input form-group">
								<label class="form-item__required" for="contact_phone">Phone</label>
								<div class="input-group">
									<span class="input-group-addon">+60</span>
									<input type="text" class="form-control" id="contact_phone" name="contact_phone" v-model="job.contact.phone" v-validate="'required|numeric'" data-vv-as="phone" maxlength="11">
                                    <p class="form-item__error" v-show="errors.has('contact_phone')">{{ errors.first('contact_phone') }}</p>
								</div>
							</div>
						</div>
						<div class="form-item">
							<div class="form-item__input form-group">
								<label class="form-item__required" for="contact_company">Email</label>
								<input type="email" class="form-control" id="contact_email" name="contact_email" v-model="job.contact.email" v-validate="'required|email'" data-vv-as="email">
                                <p class="form-item__error" v-show="errors.has('contact_email')">{{ errors.first('contact_email') }}</p>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xs-12 add-form__container">
						<h3 class="form__title">Job vacancy information</h3>
						<div class="form-item">
							<div class="form-item__input form-group">
								<label class="form-item__required" for="vacancy_title">Title</label>
								<input type="text" class="form-control" id="vacancy_title" name="vacancy_title" v-model="job.vacancy.title" v-validate="'required'" data-vv-as="job title">
                                <p class="form-item__error" v-show="errors.has('vacancy_title')">{{ errors.first('vacancy_title') }}</p>
							</div>
						</div>
						<div class="form-item">
							<div class="form-item__input form-group">
								<label class="form-item__required" for="vacancy_description">Description</label>
								<textarea class="form-control" name="vacancy_description" id="vacancy_description" cols="30" rows="5" v-model="job.vacancy.description" v-validate="'required'" data-vv-as="job description"></textarea>
                                <p class="form-item__error" v-show="errors.has('vacancy_description')">{{ errors.first('vacancy_description') }}</p>
							</div>
						</div>
						<div class="form-item">
							<div class="row">
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="vacancy_location">Location</label>
										<select class="form-control" name="vacancy_location" id="vacancy_location" v-model="job.vacancy.location">
											<option v-for="location in locations">{{ location }}</option>
										</select>
									</div>
								</div>
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="vacancy_industry">Industry</label>
										<select class="form-control" name="vacancy_industry" id="vacancy_industry" v-model="job.vacancy.industry">
											<option v-for="industry in industries">{{ industry }}</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div class="form-item">
							<div class="row">
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="vacancy_salary_start">Salary starting from</label>
										<input type="text" class="form-control" id="vacancy_salary_start" name="vacancy_salary_start" v-model="job.vacancy.salary.start" v-validate="'numeric'" data-vv-as="starting salary">
                                        <p class="form-item__error" v-show="errors.has('vacancy_salary_start')">{{ errors.first('vacancy_salary_start') }}</p>
									</div>
								</div>
								<div class="col-xs-6">
									<div class="form-item__input form-group">
										<label for="vacancy_salary_end">to</label>
										<input type="text" class="form-control" id="vacancy_salary_end" name="vacancy_salary_end" v-model="job.vacancy.salary.end" v-validate="'numeric'" data-vv-as="ending salary">
                                        <p class="form-item__error" v-show="errors.has('vacancy_salary_end')">{{ errors.first('vacancy_salary_end') }}</p>
									</div>
								</div>
							</div>
						</div>
                        <div class="form-submit">
                            <button class="btn btn-primary" @click.prevent="validateForm">ADD VACANCY</button>
                        </div>
					</div>
				</div>
			</div>
		</form>
    </main>
</template>

<script>
export default {
	data() {
		return {
			job: {
				contact: {
					name: {
						first: '',
						last: ''
					},
					company: '',
					phone: '',
					email: ''
				},
				vacancy: {
					title: '',
					description: '',
					industry: '',
					location: '',
					salary: {
						start: '',
						end: ''
					}
				}
			},
			locations: [
				'Selangor',
				'Kuala Lumpur',
				'Sarawak',
				'Johor',
				'Sabah',
				'Penang',
				'Perak',
				'Pahang',
				'Negeri Sembilan',
				'Kedah',
				'Melaka',
				'Terengganu',
				'Kelantan',
				'Labuan',
				'Perlis'
			],
			industries: [
				'Account / Finance',
				'Admin / Human Resources',
				'Arts / Media / Communications',
				'Building / Construction',
				'Computer / Information Technology',
				'Education / Training',
				'Engineering',
				'Healthcare',
				'Hotel / Restaurant',
				'Manufacturing',
				'Sales / Marketing',
				'Sciences',
				'Services',
				'Others'
			],
            job_added: false
		}
	},
    computed: {
        show_toast()  {
            return this.job_added? 'show-toast' : '';
        }
    },
	methods: {
        validateForm() {
            this.$validator.validateAll();

            if(!this.errors.any()) {
                this.addJob();
            }
        },
		addJob() {
            var form_submit = document.querySelector('.form-submit');

            this.$http.post('https://job-vacancy-demo.firebaseio.com/jobs.json', this.job, {
                before(request) {
                    form_submit.classList.add('disable');
                }
            }).then((data) => {
                this.resetForm();
                form_submit.classList.remove('disable');

                if(!this.job_added) {
                    this.job_added = true;

                    var toast = document.querySelector('.toast-message');

                    toast.style.display = 'block';

                    setTimeout(() => {
                        this.job_added = false;
                        toast.style.display = '';
                    }, 1000)
                }
            });
		},
		clearObject(obj) {
			for (var k in obj) {
				if(typeof obj[k] === 'object') {
					this.clearObject(obj[k]);
				} else {
					obj[k] = '';
				}
			}
		},
		resetForm() {
			this.clearObject(this.job);
            this.$validator.clean();
		}
	}
}
</script>
