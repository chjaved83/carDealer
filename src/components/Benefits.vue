<template>
  <div class="container row">
    <div
      class="col-12 q-mx-auto col-sm-9 col-md-6 col-lg-5 q-my-auto"
      :class="$q.screen.gt.md ? 'q-ml-auto' : 'q-pt-xl'"
    >
      <q-img src="/images/welcomeGrey.svg"/>
    </div>
    <div class="col-12 col-md-6 q-my-lg"
         :class="$q.screen.lt.md ? '' : 'q-py-xl'"
    >
      <div class="text-h4 text-weight-bold">
        What are the benefits?
      </div>
      <div class="q-mt-sm q-pt-xs text-subtitle text-grey-7 q-mb-lg">
        Cras tincidunt nibh ac lacus cursus, in element erat ac lorem amet at interdum malesuada
        dolor sit amet, consectetur adipiscing elit. Class
        aptent vamus taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </div>
      <div class="row text-blue-6">
        <div class="col-6 flex items-center" v-for="benefit in benefits">
          <q-icon size="20px" name="img:/icons/benefits.svg" class="q-pt-sm"/>
          <div class="text-h6 text-weight-normal q-ml-sm q-pl-xs q-pt-sm text-wrap">
            {{ benefit.benefit }}
          </div>
        </div>
      </div>
      <div class="text-subtitle q-mt-lg q-pt-sm text-grey-7">
        Lorem ipsum dolor amet, consectetur adipiscing elit. Nullam eget pretiums magna.
        Vivamus eget erat ac lorem interdum malesuada. Mauris a nec mollis mauris, vitae
        porttitor nunc. Ut congue bibendum orci vel varius. Cras tincidunt nibh ac lacus
        cursus, in element erat ac lorem amet at interdum malesuada dolor sit amet,
      </div>
    </div>
    <div class="col-12">
      <div class="row"
           :class="$q.screen.lt.sm ? 'q-my-lg' : 'q-col-gutter-lg q-mb-xl q-pb-lg'"
      >
        <div
          class="col-12 col-sm-6"
          :class="$q.screen.lt.sm ? 'q-pb-lg' :''"
          v-for="statement in statements"
        >
          <q-card
            flat
            class="bg-dark-navy text-center text-white radius-25"
            :class="$q.screen.lt.md ? 'q-pa-lg' : 'card-padding'"
          >
            <q-icon size="100px" :name="statement.icon"/>
            <div
              class="text-weight-bold q-mt-md q-pt-xs"
              :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'"
            >
              {{ statement.heading }}
            </div>
            <div class="text-subtitle q-mt-md q-pt-xs">
              {{ statement.description }}
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import {reactive} from "vue";

const benefits = [
  {
    benefit: 'Aenean leo non vehicula',
  },
  {
    benefit: 'Aenean leo non vehicula',
  },
  {
    benefit: 'In efficitur neque aliquam',
  },
  {
    benefit: 'In efficitur neque aliquam',
  },
  {
    benefit: 'In efficitur neque aliquam',
  },
  {
    benefit: 'In efficitur neque aliquam',
  },
  {
    benefit: 'Sed imperdiet a ligcongue',
  },
  {
    benefit: 'Sed imperdiet a ligcongue',
  },
]

const statements = reactive([
  {
    icon: "img:/icons/mission.svg",
    heading: "Mission Statement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pretiums magna.\n" +
      "                Vivamus eget erat ac lorem interdum malesuada. Mauris a nec mollis mauris, vitae\n" +
      "                porttitor nunc. Ut congue bibendum orci vel varius. Cras tincidunt nibh ac lacus\n" +
      "                cursus, in element erat ac lorem amet at interdum malesuada dolor sit amet,"

  },
  {
    icon: "img:/icons/vision.svg",
    heading: "Vision Statement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pretiums magna.\n" +
      "                Vivamus eget erat ac lorem interdum malesuada. Mauris a nec mollis mauris, vitae\n" +
      "                porttitor nunc. Ut congue bibendum orci vel varius. Cras tincidunt nibh ac lacus\n" +
      "                cursus, in element erat ac lorem amet at interdum malesuada dolor sit amet,"

  },
])
</script>
<style scoped>
.text-wrap {
  white-space: normal;
  flex: 1;
}

.card-padding {
  padding: 40px 36px
}
</style>
