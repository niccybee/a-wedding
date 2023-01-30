<script setup>
// src/components/Form.vue
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

let count = ref({ number: 0 });
let status = ref({
  loading: false,
  success: false,
  error: false,
});

let rsvpForm = ref();

onMounted(() => {
  autoAnimate(rsvpForm.value);
});

const submitHandler = (x) => {
  console.log(x);
};

let rsvpOptions = ["Can attend", "Can not attend"];

let busSchema = [
  {
    $cmp: "FormKit",
    props: {
      type: "radio",
      id: "bus",
      label: "Bus needed:",
      placeholder: "I would like to take the bus to:",
      options: {
        sorrento: "Sorrento",
        melbourne: "Melbourne",
        other: "Other...",
      },
      validation: "required",
    },
  },
  {
    $cmp: "FormKit",
    if: "$get(bus).value == 'other'",
    props: { type: "text", label: "Where else would you like to go?" },
  },
];
</script>

<template>
  <article>
    <div ref="loading" v-if="status.loading" class="loading">Loading</div>
    <div ref="success" v-if="status.success" class="success">Succesful!</div>
    <div ref="error" v-if="status.error" class="error">Error submitting!</div>
    <form ref="rsvpForm" netlify v-else>
      <FormKit
        type="text"
        label="Name"
        name="name"
        validation="required|text"
        help="Please enter both your name and your partners if applicable"
        placeholder="John & Jane"
      />
      <FormKit
        type="email"
        label="Email"
        name="email"
        validation="required|email"
        help="Please enter your email address."
        placeholder="johnsmith@email.com"
      />
      <FormKit
        type="radio"
        label="RSVP reponse:"
        validation="required"
        name="attend"
        help="Select an option..."
        :options="rsvpOptions"
      />
      <FormKitSchema :schema="busSchema" />
      <FormKit
        type="textarea"
        label="Dietary requirements:"
        name="diet"
        rows="1"
        placeholder="Please add any dietary requirements"
      />
      <FormKit
        type="textarea"
        label="Notes:"
        name="note"
        rows="3"
        placeholder="Anything you'd like to add..."
      />
      <FormKit
        type="submit"
        action="submitHandler"
        outer-class="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center"
        inner-class="bg-green-500 px-18"
        input-class="bg-yellow-500 w-full"
        style="background: black; width: 100%"
        label="Send"
        help="Check your answers before you submit"
      />
    </form>
  </article>
</template>
