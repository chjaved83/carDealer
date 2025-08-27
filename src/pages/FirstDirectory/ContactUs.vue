<template>
  <q-page class="">
    <div class="q-py-xl q-my-lg radius-12">
      <div class="container row">
        <div class="col-12 col-md-11 q-mx-auto">
          <div class="row">
            <div class="col-12">
              <div class="bg-white" :class="$q.screen.xs ? 'q-pa-md' : 'q-pa-xl'">
                <div class="row text-center">
                  <div class="col-12 col-sm-10 q-mx-auto text-red text-44 text-weight-600">
                    We’re here for you
                  </div>
                  <div
                    class="col-10 col-sm-8 col-lg-7 q-mx-auto text-blue-6 text-28 text-weight-medium q-mt-sm q-pt-xs">
                    Want to get in touch? We’d love to hear from you. Here’s how you can reach us.
                  </div>
                  <div class="col-12 col-md-10 col-lg-9 q-mx-auto q-mt-md text-h6 text-grey-6 q-mb-lg q-pb-sm">
                    Can't find the answers you're looking for? Contact us here or email us at
                    support@autodealersolution.com and our friendly customer care team will
                    be in touch shortly.
                  </div>
                </div>
                <div class="row bg-grey-1 radius-30">
                  <div class="col-12" :class="$q.screen.xs ? 'q-pa-md' : 'q-pa-42'">
                    <q-form class="row" @submit="contactUs">
                      <div
                        :class="[input.colClass, $q.screen.gt.sm ? input.lgClass : '']"
                        v-for="(input, index) in inputFields" :key="index"
                      >
                        <div class="text-h6 text-weight-600 q-mt-md text-dark-grey">
                          {{ input.label }}
                        </div>
                        <q-input
                          v-if="input.inputType === 'input'"
                          :type="input.type"
                          outlined
                          v-model="form[input.model]"
                          :placeholder="input.placeholder"
                          :mask="input.mask"
                          :rules="input.rules"
                          lazy-rules
                          bg-color="white"
                          input-class="text-subtitle letter-spacing-03"
                        />

                        <q-select
                          v-else-if="input.inputType === 'select'"
                          :type="input.type"
                          outlined
                          v-model="form[input.model]"
                          :placeholder="input.placeholder"
                          :options="input.options"
                          :rules="input.rules"
                          lazy-rules
                          bg-color="white"
                          behavior="menu"
                          dropdown-icon="expand_more"
                          class="text-subtitle letter-spacing-03"
                        />

                        <q-input
                          v-else
                          v-model="form[input.model]"
                          :placeholder="input.placeholder"
                          :type="input.type"
                          :rules="input.rules"
                          lazy-rules
                          bg-color="white"
                          input-class="text-subtitle letter-spacing-03"
                          outlined
                        />
                      </div>
                      <div class="col-12 text-center q-mt-lg-xl q-mt-lg">
                        <q-btn
                          dense
                          no-caps
                          type="submit"
                          label="Submit"
                          text-color="white"
                          :padding="$q.screen.gt.sm ? '16px 70px' : '16px 48px'"
                          class="bg-blue-6 font-weight-600 radius-100"
                          :class="$q.screen.lt.sm ? 'text-h6' : 'text-h5'"
                          :loading="btnLoading"
                        />
                      </div>
                    </q-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <BrandPartner :brandingImg="false"/>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import {ref} from "vue";
import {useQuasar} from "quasar";
import BrandPartner from "components/BrandPartner.vue";

const $q = useQuasar();
const btnLoading = ref(false)
const form = ref({
  full_name: "",
  email: "",
  phone: "",
  subject: "",
  textArea: "",
});
const inputFields = ref([
  {
    inputType: "input",
    type: "text",
    label: "Full Name *",
    placeholder: "Enter your name here",
    model: "full_name",
    rules: [(val) => !!val || "Name is required"],
    colClass: "col-12"
  },
  {
    inputType: "input",
    type: "text",
    label: "Your Phone No",
    placeholder: "123-456-7890",
    model: "phone",
    mask: "###-###-####",
    rules: [
      (val) => {
        if (!val) return true;
        return (
          /^\d{3}-\d{3}-\d{4}$/.test(val) ||
          "Phone must be in format XXX-XXX-XXXX"
        );
      },
    ],
    lgClass: "q-pr-md",
    colClass: "col-12 col-md-6"
  },
  {
    inputType: "input",
    type: "email",
    label: "Your E-mail *",
    placeholder: "test@example.com",
    model: "email",
    rules: [
      (val) => !!val || "Field is required.",
      (val) =>
        val.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ? !!val
          : "Must be valid email address like test@example.com",
    ],
    lgClass: "q-pl-md",
    colClass: "col-12 col-md-6"
  },
  {
    inputType: "select",
    label: "Select a subject *",
    model: "subject",
    options: [
      "Help & Support Department",
      "Technical Department",
      "Billing & Account Department",
      "Feedback",
      "Other",
    ],
    rules: [(val) => !!val || "Subject is required"],
    colClass: "col-12"
  },
  {
    inputType: "textArea",
    type: "textarea",
    label: "Comments *",
    placeholder: "Write your message here...",
    model: "textArea",
    rules: [(val) => !!val || "Comments are required"],
    colClass: "col-12"
  },
]);
const contactUs = () => {
  console.log(form.value)
}
</script>
<style scoped>
.text-44 {
  font-size: 44px;
  line-height: 52px;
}

.q-pa-42 {
  padding: 42px;
}

:deep(.q-field--outlined .q-field__control) {
  border-radius: 10px;
  padding: 0 12px;
}

</style>
