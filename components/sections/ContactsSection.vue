<template>
  <section
    class="contacts-section flex justify-center py-16 bg-blue-500"
    id="contacts"
  >
    <div class="grid grid-cols-3 gap-4 w-full max-w-5xl mx-8">
      <div class="google-map">
        <h2 class="text-center my-4 text-xl">Find Us:</h2>
        <hr class="w-1/2 m-auto my-4" />
        <!-- <div> -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d693.7603741020332!2d19.759090194991362!3d45.930470422507035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2srs!4v1687283904615!5m2!1shu!2srs"
          style="
            border: 1px solid black;
            width: 100%;
            height: calc(100% - 5rem);
            min-height: 450px;
          "
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <!-- </div> -->
      </div>
      <div class="contacts-container w-full text-center">
        <h2 class="text-center my-4 text-xl">Contact Us:</h2>
        <hr class="w-1/2 mx-auto my-4" />
        <div
          class="space-y-4 text-center flex flex-col justify-evenly items-center text-xl"
        >
          <div
            class="w-16 h-16 flex justify-center items-center bg-black rounded-full"
          >
            <Icon name="ph:phone-call-bold" size="2rem" color="#3B82F6" />
          </div>
          <p>Telephone1:<br />555-555</p>
          <p>Telephone2:<br />555-555</p>
          <div
            class="w-16 h-16 flex justify-center items-center bg-black rounded-full"
          >
            <Icon name="uil:location-point" size="2rem" color="#3B82F6" />
          </div>
          <p>Address:<br />Kelemen 3., Cantavir, 24220, Serbia</p>
          <div
            class="w-16 h-16 flex justify-center items-center bg-black rounded-full"
          >
            <Icon name="bi:envelope-at" size="2rem" color="#3B82F6" />
          </div>
          <p>Email:<br />mail@dr-farmer.com</p>
        </div>
      </div>

      <div>
        <h2 class="text-center my-4 text-xl">Send a Message:</h2>
        <hr class="w-1/2 m-auto mt-4" />
        <form @submit.prevent="submitForm" class="flex flex-col">
          <label for="form_name" class="mt-4">Your Name:</label>
          <input
            class="message-input p-1"
            type="text"
            name="form_name"
            id="form_name"
            placeholder="...by which I may refer you."
            v-model="name"
          />

          <label for="form_email" class="mt-4">Your Email Address:</label>
          <input
            class="message-input"
            type="email"
            name="form_email"
            id="form_email"
            placeholder="...where I may send my reply to."
            v-model="email"
          />

          <label for="form_subject" class="mt-4">Subject:</label>
          <input
            class="message-input"
            type="text"
            name="form_subject"
            id="form_subject"
            placeholder="...of the email you wish to send."
            v-model="subject"
          />

          <label for="form_message" class="mt-4">Message:</label>
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
            <!-- <button
                type="submit"
                class="submit-button button-anim"
              >
                Send Message
              </button> -->
            <ElementsButtonLight
              text="Send Message"
              type="submit"
              class="my-8"
            />
          </div>
          <!-- @click.prevent="submitForm" -->
          <!-- class="submit-btn yellow-btn" -->
          <!-- @click="submitForm" -->
          <!-- type="submit" -->
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
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
@media (min-width: 768px) {
}
</style>