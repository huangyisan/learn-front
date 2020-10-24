<template>
  <q-page padding>
    <q-list bordered padding class="q-mb-md">
      <q-item-label header>Settings</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

      <!-- 点击跳转到/settings/help -->
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show one list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTasksInOneList" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding>
      <q-item-label header>More</q-item-label>
      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="visitMyGithub">
        <q-item-section>
          <q-item-label>Visit my github</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple @click="emailMe">
        <q-item-section>
          <q-item-label>Email me</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions, openUrl } from "vuex";
// 使用quasar的内置工具做外部页面访问
import { openURL } from "quasar";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        // trigger an action
        this.setShow12HourTimeFormat(value);
      },
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        // trigger an action
        this.setShowTasksInOneList(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", [
      "setShow12HourTimeFormat",
      "setShowTasksInOneList",
    ]),
    visitMyGithub() {
      openURL("https://github.com/huangyisan");
    },
    emailMe() {
      window.location.href = 'mailto: anonymousyisan@gmail.com?subject=Awesome Todo Feedback'
    }
  },
};
</script>
 