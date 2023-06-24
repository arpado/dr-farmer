<template>
  <div class="wrapper">
    <section
      class="hero flex items-center justify-center md:justify-start md:mx-"
    >
      <div class="hero-textbox my-4 p-6 flex flex-col">
        <div>
          <h1 class="my-8 text-4xl">Lorem ipsum dolor sit.</h1>
          <p class="my-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rerum quam eum natus? Ipsa itaque perferendis debitis sunt
            repellendus! Impedit.
          </p>
        </div>
        <ButtonElement text="Learn More" class="m-auto text-xl" />
      </div>
    </section>

    <section class="features px-8 py-16 bg-blue-500 text-white">
      <div class="max-w-7xl flex flex-wrap md:flex-nowrap gap-8 mx-auto">
        <div class="features-title">
          <h2 class="my-4 text-2xl">Lorem, ipsum dolor.</h2>
          <hr class="w-2/3" />
          <p class="my-4 font-xl italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptas numquam debitis fuga!
          </p>
        </div>
        <ul class="features-list py-4 lg:columns-2 list-disc space-y-4">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            harum suscipit similique autem laudantium accusantium voluptatem,
            sequi corrupti cum sint.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            modi qui. Quisquam est eaque repudiandae?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            dolore consectetur esse atque quae id quod! Hic cupiditate, nemo
            ullam accusamus quisquam iure vel. Tenetur animi non quam unde
            delectus?
          </li>
        </ul>
      </div>
    </section>

    <section class="first-article-suggestion flex justify-center py-16">
      <div
        class="w-full max-w-5xl mx-8 flex items-center flex-col-reverse relative"
      >
        <div
          class="article-textbox article-textbox-1 z-10 bg-white my-2 p-8 static md:absolute space-y-4"
        >
          <h3 class="text-2xl">12 Reasons</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            assumenda soluta. Voluptas praesentium non veritatis.
          </p>
          <NuxtLink class="nuxtlink block" to="/blog">READ MORE</NuxtLink>
        </div>
        <img
          class="article-image relative w-full md:w-10/12 top-0 object-scale-down"
          src="/images/animals-about-to-drop-album-photos-58aeb2b30934d__700.jpg"
          alt=""
        />
      </div>
    </section>

    <section class="about-section px-8 py-16 bg-blue-500 text-white">
      <div class="max-w-7xl flex flex-wrap md:flex-nowrap gap-8 mx-auto">
        <div class="about-title md:flex-1 space-y-4">
          <h2 class="my-4 text-2xl">Lorem, ipsum dolor.</h2>
          <hr class="w-2/3" />
          <p class="my-4 text-xl italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptas numquam debitis fuga!
          </p>
        </div>
        <div class="about-text md:flex-1 space-y-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptas nihil totam nisi rem eum aut iure sequi animi. Totam,
            voluptatum similique natus, ipsum numquam illo error nostrum
            adipisci vel deleniti ullam architecto ut doloribus autem, ab
            dignissimos. Aliquid, non!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, a
            provident quae ipsam quasi quam.
          </p>
          <ButtonElement text="READ MORE" />
        </div>
      </div>
    </section>

    <section class="second-article-suggestion flex justify-center py-16">
      <div
        class="w-full max-w-5xl mx-8 flex items-center flex-col-reverse relative"
      >
        <div
          class="article-textbox article-textbox-2 z-10 bg-white my-2 p-8 static md:absolute space-y-4"
        >
          <h3 class="text-2xl">Something Else</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            assumenda soluta. Voluptas praesentium non veritatis.
          </p>
          <NuxtLink class="nuxtlink block" to="/blog">READ MORE</NuxtLink>
        </div>
        <img
          class="article-image relative w-full md:w-10/12 top-0 object-scale-down"
          src="/images/jakob-cotton-K1hwkV5GPl0-unsplash.jpg"
          alt=""
        />
      </div>
    </section>

    <section class="benefits-section flex justify-center py-16 bg-blue-500">
      <div class="benefits-grid-container w-full max-w-5xl mx-8 grid">
        <div class="benefits-grid grid grid-cols-1 sm:grid-cols-2">
          <BenefitElement
            v-for="(benefit, index) in benefits"
            :key="index"
            :content="benefit"
            :index="index"
          />
        </div>
        <img
          class="benefits-img"
          src="/images/veterinary-farm-walking-cowshed-checking-cows.jpg"
          alt=""
        />
      </div>
    </section>

    <section class="testimonials-section p-8">
      <swiper
        class="swiper-container"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 2000 }"
      >
        <swiper-slide
          class="swiper-slide p-4 isolate flex justify-center items-center"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <p>{{ testimonial.body }}</p>
        </swiper-slide>
      </swiper>
    </section>

    <section
      class="contacts-section flex justify-center py-16 bg-blue-500"
      id="contacts"
    >
      <div class="grid grid-cols-3 gap-4 w-full max-w-5xl mx-8">
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d693.7603741020332!2d19.759090194991362!3d45.930470422507035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2srs!4v1687283904615!5m2!1shu!2srs"
            height="450"
            style="border: 1px solid black; width: 100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contacts-container w-full text-center">
          <h3>Contact Us:</h3>
          <p>Telephone: 555-555</p>
        </div>

        <div>
          <h2>Contacts</h2>
          <hr />
          <form @submit.prevent="submitForm">
            <label for="form_name">Your Name:</label>
            <input
              class="message-input"
              type="text"
              name="form_name"
              id="form_name"
              placeholder="...by which I may refer you."
              v-model="name"
            />

            <label for="form_email">Your Email Address:</label>
            <input
              class="message-input"
              type="email"
              name="form_email"
              id="form_email"
              placeholder="...where I may send my reply to."
              v-model="email"
            />

            <label for="form_subject">Subject:</label>
            <input
              class="message-input"
              type="text"
              name="form_subject"
              id="form_subject"
              placeholder="...of the email you wish to send."
              v-model="subject"
            />

            <label for="form_message">Message:</label>
            <textarea
              class="message-input"
              name="message"
              id="form_message"
              cols="30"
              rows="10"
              placeholder="...question, opinion ot anything else you wish to share. Thank you for your feedback!"
              v-model="message"
            ></textarea>

            <!-- <input type="submit" value="Send Message"> -->
            <!-- <ButtonElement  text="Send Message" type="submit" /> -->
            <div class="flex justify-center">
              <button
                type="submit"
                class="submit-button button-anim"
                data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
              >
                Send Message
              </button>
            </div>
            <!-- @click.prevent="submitForm" -->
            <!-- class="submit-btn yellow-btn" -->
            <!-- @click="submitForm" -->
            <!-- type="submit" -->
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  data() {
    return {
      benefits: [
        {
          title: "Lorem",
          body:
            "Sed, assumenda soluta amet consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Ipsum",
          body:
            "Ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Assumenda",
          body:
            "Consectetur adipisicing elit. Sed, assumenda soluta. Voluptas praesentium non veritatis.",
        },
        {
          title: "Consectetur",
          body:
            "Voluptas praesentium non veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda soluta.",
        },
      ],
      testimonials: [
        {
          name: "Aron",
          pic: "54.jpg",
          body:
            "Super. Lorem ipsum dolor sit amet consectetur adipisicing elit... Sed, assumenda soluta.",
        },
        {
          name: "Janos",
          pic: "72.jpg",
          body: "Voluptas praesentium non veritatis.",
        },
        {
          name: "Edit",
          pic: "82.jpg",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas praesentium non veritatis.",
        },
      ],

      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    async submitForm() {
      const loading = useNuxtApp().$toast.loading("Please wait...");
      const response = await fetch(
        // "https://formsubmit.co/ajax/2504b17c1cdcf59e3fd818d8e727da33",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            subject: this.subject,
            email: this.email,
            message: this.message,
            // _replyto: this.email,
            // _cc: '',
            // _bcc: '',
            // _template: 'table',
          }),
        }
      );

      if (response.ok) {
        useNuxtApp().$toast.remove(loading);
        useNuxtApp().$toast.success("Email sent!", {
          delay: 400,
        });
        this.name = this.subject = this.email = this.message = "";
      } else {
        useNuxtApp().$toast.remove(loading);
        useNuxtApp().$toast.error("Failed to send email.");
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  /* height: 1500px; */
}
.hero {
  min-height: calc(100dvh - 7rem);
  height: fit-content;
  background-image: url("/images/white-brown-cow-looking-straight-camera-with-herd-cows-pasture-background.jpg");
  background-size: cover;
  background-position-x: 90%;
  background-position-y: center;
  background-attachment: fixed;
}
.hero-textbox,
.article-textbox {
  left: 0;
  width: 100%;
  max-width: 350px;
  height: fit-content;
}
.hero-textbox {
  max-width: 350px;
  min-height: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}
.features-title {
  flex-shrink: 2;
}
.features-list {
  flex-shrink: 3;
}
.first-article-suggestion {
  /* min-height: 100dvh; */
}
.article-textbox {
  max-width: unset;
  box-shadow: 2px 2px 4px 0px #333;
  background-color: white;
}
.article-textbox-1 {
  top: 50%;
  transform: translateY(-50%);
}
.article-textbox-2 {
  bottom: -10%;
}
.article-image {
  right: 0%;
}
.benefits-section {
  min-height: 60dvh;
  height: fit-content;
}
.benefits-grid-container {
  grid-template-columns: 1fr;
}
.benefits-img {
  height: 100%;
  object-fit: cover;
  object-position: right;
}
.swiper-container {
  min-height: 300px;
}
.swiper-slide {
  min-height: 250px;
  background-color: black;
  color: white;
  position: relative;
  display: flex;
}
.swiper-slide::before {
  content: open-quote;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10rem;
  font-weight: bold;
  line-height: 1;
  z-index: -1;
  color: rgb(100, 98, 98);
}
.swiper-slide::after {
  content: no-close-quote;
}
.swiper-slide > p {
  max-width: 500px;
}
@media (min-width: 768px) {
  .hero-textbox {
    margin-left: 20%;
  }
  .article-textbox {
    max-width: 350px;
  }
  .article-image {
    right: -10%;
  }
  .benefits-grid-container {
    grid-template-columns: 3fr 1fr;
  }
}
</style>