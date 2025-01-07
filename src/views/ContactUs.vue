<template>
    <Header :links="headerLinks" :logoDetails="logoInfo" />
    <main>
        <section class="contact-form">
            <div class="form-container">
            <h1 class="form-heading">Get in Touch</h1>
            <p class="form-caption">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
            <form @submit.prevent="handleSubmit">
                <!-- Name Input -->
                <div class="form-group">
                <label for="name">Your Name<span>*</span></label>
                <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    placeholder="Enter your name"
                    required
                />
                </div>
                <!-- Email Input -->
                <div class="form-group">
                <label for="email">Your Email<span>*</span></label>
                <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    placeholder="Enter your email"
                    required
                />
                </div>
                <!-- Subject Input -->
                <div class="form-group">
                <label for="subject">Subject<span>*</span></label>
                <input
                    type="text"
                    id="subject"
                    v-model="formData.subject"
                    placeholder="Enter the subject"
                    required
                />
                </div>
                <!-- Message Textarea -->
                <div class="form-group">
                <label for="message">Your Message<span>*</span></label>
                <textarea
                    id="message"
                    v-model="formData.message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                ></textarea>
                </div>
                <!-- Submit Button -->
                <button type="submit" class="form-submit">Send Message</button>
            </form>
            </div>
        </section>
    </main>
    <Footer :currentYear="year" :logoDetails="logoInfo" />
</template>

<script>
  import logo from '../assets/Img/to-do-list.png';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
    data() {
        return {
            logoInfo: {
                logoUrl: logo,
                logoCaption: 'To Do List Logo',
            },
            headerLinks: [
                {url: '/', text: 'Home'},
                {url: '/about', text: 'About Us'},
                {url: '/contact', text: 'Contact Us'},
                {url: '/quotes', text: 'Quotes'},
            ],
            year: new Date().getFullYear(),
            formData: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
        }
    },

    components: {
        Header,
        Footer
    },

    methods: {
        handleSubmit() {
        // Handle form submission (e.g., send data to an API or display a message)
        console.log("Form submitted with data:", this.formData);

        // Reset form after submission
        this.formData = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };

        alert("Your message has been sent!");
        },
    },
  }
</script>

<style lang="scss" scoped>
    .contact-form {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f9f9f9;
        min-height: 100vh;

        .form-container {
            max-width: 600px;
            width: 100%;
            background: #fff;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .form-heading {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
            text-align: center;
        }

        .form-caption {
            font-size: 1rem;
            color: #666;
            text-align: center;
            margin-bottom: 20px;
        }

        form {
            .form-group {
            margin-bottom: 20px;

            label {
                display: block;
                font-weight: bold;
                margin-bottom: 8px;
                color: #333;

                span {
                    color: rgb(250, 16, 16);
                }
            }

            input,
            textarea {
                width: 100%;
                padding: 10px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                transition: border-color 0.3s;

                &:focus {
                border-color: #0074a1;
                outline: none;
                }
            }

            textarea {
                resize: none;
            }
            }

            .form-submit {
            width: 100%;
            padding: 12px;
            background-color: #0074a1;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #005f7f;
            }
            }
        }
}
</style>